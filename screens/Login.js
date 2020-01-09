import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';


export default class Login extends React.Component {
    state = { eamil: '', password: '', errorMessage: null}

    handleLogin = () => {
        //TO DO: FIREBASE
        //console.log('handleLogin')
        this.setState({ error: '', loading: true })
        const { email, password } = this.state;
        console.log('handleLogin')
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res.user.email);
                });
        } catch (error) {
            console.log(error.toString(error));
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                <Text style = {{ color: 'red'}}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                 style = {styles.TextInput}
                 autoCapitalize = "none"
                 placeholder = "Email"
                 onChangeText = {email => this.setState({email})}
                 value = {this.state.email}
                 />
                 <TextInput
                secureTextEntry
                style = {styles.TextInput}
                autoCapitalize = "none"
                placeholder = "Password"
                onChangeText = {password => this.setState({password})}
                value = {this.state.password}
                />
                <Button title = "Login" onPress = {this.handleLogin}/>
                <Button
                title = "Don't have an account? Sign Up"
                onPress = {() => this.props.navigation.navigate('Signup')}
                />
                </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})