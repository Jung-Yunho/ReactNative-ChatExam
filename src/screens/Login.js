import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'
import SendBird from 'sendbird'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            nickname: '',
            error: ''
        }
    }

    static navigationOptions = {
        title: 'LOGIN'
    }

    _userIdChanged = (userId) => {
        this.setState({
            userId
        })
    }

    _nicknameChanged = (nickname) => {
        this.setState({
            nickname
        })
    }

    _onButtonPress = () => {
        const {userId, nickname} = this.state
        const sb = new SendBird({'appId': '9DA1B1F4-0BE6-4DA8-82C5-2E81DAB56F23'})

        if (userId === '' || nickname === '') {
            alert('UserID 와 Nickname 은 필수 입력값입니다.')
            return
        }

        sb.connect(userId, (user, error) => {
            if (error) {
                console.error('connect: ', error)
                this.setState({error})
            } else {
                sb.updateCurrentUserInfo(nickname, null, (user, error) => {
                    if (error) {
                        console.error('update nickname : ', error)
                        this.setState({error})
                    } else {
                        console.log(user)
                        this.setState({
                            userId: '',
                            nickname: '',
                            error: ''
                        }, () => {
                            this.props.navigation.navigate('Menu')
                        })
                    }
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <FormLabel>User ID</FormLabel>
                    <FormInput
                        value={this.state.userId}
                        onChangeText={this._userIdChanged}
                    />
                </View>

                <View style={styles.container}>
                    <FormLabel>NickName</FormLabel>
                    <FormInput
                        value={this.state.nickname}
                        onChangeText={this._nicknameChanged}
                    />
                </View>

                <View style={styles.container}>
                    <Button
                        buttonStyle={{backgroundColor: '#2096f3'}}
                        title='Connect'
                        onPress={this._onButtonPress}
                    />
                </View>

                <View style={styles.container}>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                </View>

                <View>
                    <Text>{this.state.userId}</Text>
                    <Text>{this.state.nickname}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
})
