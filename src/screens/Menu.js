import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Menu extends Component {
    static navigationOptions = {
        title : 'MENU'
    }

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View Style={styles.container}>
                <Text>Menu</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#fff'
    }
})