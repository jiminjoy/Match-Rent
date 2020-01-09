import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default class Signup extends React.Component {
    state = {email: '', password: '', firstname: '', lastname: '', phonenumber: '', errorMessage: null}

    handleSignUp = () => {
        //TO DO : NEED FIREBASE
        console.log('handleSignUp')
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.firstname, this.state.lastname, this.state.phonenumber)
                .then(user => {
                    console.log(user);
                });
        } catch (error) {
            console.log(error.toString(error));
        }
    }

    render() {
        return (
            <View style = {styles.container}>
            <Text>Sign Up</Text>
            {this.state.errorMessage &&
            <Text style = {{color: 'red'}}>
                {this.state.errorMessage}
            </Text>}
            <TextInput
             placeholder = "First Name"
             autoCaptialize = "none"
             style = {styles.TextInput}
             onChangeText = {firstname => this.setState({ firstname })}
             value = {this.state.firstname}
             />
             <TextInput
             placeholder = "Last Name"
             autoCaptialize = "none"
             style = {styles.TextInput}
             onChangeText = {lastname => this.setState({ lastname })}
             value = {this.state.lastname}
             />
            <TextInput
             placeholder = "Email"
             autoCaptialize = "none"
             style = {styles.TextInput}
             onChangeText = {email => this.setState({ email })}
             value = {this.state.email}
             />
             <TextInput
               secrureTextEntry
               placeholder = "Password"
               autoCapialize = "none"
               style = {styles.TextInput}
               onChangeText = {password => this.setState({password})}
               value = {this.state.passord}
               />
               <TextInput
               secrureTextEntry
               placeholder = "Phone Number"
               autoCapialize = "none"
               style = {styles.TextInput}
               onChangeText = {phonenumber => this.setState({phonenumber})}
               value = {this.state.phonenumber}
               />
               <Button title = "Sign up" onPress = {this.handleSignUp}/>
               <Button
               title = "Already have an account? Login"
               onPress = {() => this.props.navigation.navigate('Login')}
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