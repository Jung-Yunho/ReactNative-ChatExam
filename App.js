import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'

import {Provider} from 'react-redux';
import store from './src/store'

import Login from './src/screens/Login'
import Menu from './src/screens/Menu'
import Profile from './src/screens/Profile'
import OpenChannel from './src/screens/OpenChannel'
import Chat from './src/screens/Chat'


const MainNavigator = StackNavigator({
    Login: {screen: Login},
    Menu: {screen: Menu},
    Profile: {screen:Profile},
    OpenChannel: {screen: OpenChannel},
    Chat: {screen:Chat}
})

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        )
    }
}

