import React, {Component} from 'react';
import { View, FlatList, StyleSheet, Text,TextInput, TouchableHighlight, AlertIOS } from 'react-native';
import {ListItem, Input} from 'react-native-elements';
//import { Rent } from '../Rent.js';
import { db } from '../config';
import ItemComponent from '../components/ItemComponent';


let addItem = Input=> {
    db.ref('/items').push({
      name: Input.name,
      address: Input.address,
      price: Input.price,
      availability: Input.availability,
      sharing: Input.sharing,
      description: Input.description,      
    });
  };
  
  export default class AddRent extends Component {
    state = {
      name: '',
      address: '',
      price: '',
      availability: '',
      sharing: '',
      description: '',
    };
  
    handleNameChange = e => {
      this.setState({
        name: e.nativeEvent.text
      });
    };
    handleAddressChange = e => {
        this.setState({
          address: e.nativeEvent.text
        });
      };
    handlePriceChange = e => {
        this.setState({
          price: e.nativeEvent.text
        });
      };
    handleAvailabilityChange = e => {
        this.setState({
          availability: e.nativeEvent.text
        });
      };
    handleSharingChange = e => {
        this.setState({
          sharing: e.nativeEvent.text
        });
      };
    handleDescriptionChange = e => {
        this.setState({
          description: e.nativeEvent.text
        });
      };
    handleSubmit = () => {
      addItem(this.state);
      AlertIOS.alert('New Rent added successfully');
    };
  
    render() {
      return (
        <View style={styles.main}>
          <Text style={styles.title}>Please fill out following form</Text>
          <Text style={styles.subtitle}>Answer yes/no for the 'availability' and 'sharing'</Text>
          <TextInput
          placeholder = "name" 
          style={styles.itemInput} onChange={this.handleNameChange} />
          <TextInput
          placeholder = "address" 
          style={styles.itemInput} onChange={this.handleAddressChange} />
          <TextInput
          placeholder =  "price"
          style={styles.itemInput} onChange={this.handlePriceChange} />
           <TextInput
          placeholder = "availability" 
          style={styles.itemInput} onChange={this.handleAvailabilityChange} />
           <TextInput
          placeholder = "sharing" 
          style={styles.itemInput} onChange={this.handleSharingChange} />
           <TextInput
          placeholder = "description" 
          style={styles.itemInput} onChange={this.handleDescriptionChange} />
          
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#6565fc'
    },
    title: {
      marginBottom: 20,
      fontSize: 20,
      textAlign: 'center'
    },
    subtitle: {
        marginBottom: 15,
        fontSize: 19,
        textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      marginBottom: 10,
      borderWidth: 1,
      marginTop: 10,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });

AddRent.navigationOptions = {
  title: 'Add Rent',
};