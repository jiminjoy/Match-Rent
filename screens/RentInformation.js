import React, {Component} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import {ListItem} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import { Rent } from '../Rent.js';
import { db } from '../config';
import ItemComponent from '../components/ItemComponent';


let itemsRef = db.ref('/items');

export default class RentInformation extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <FlatList style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});

// export default class RentInformation extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//      rents: Rent
//     };
//   }

//   render(){
//     const renderHouseItem = ({ item, index }) => {
//       return (
//         <ListItem
//           key={index}
//           title={item.name}
//           subtitle={item.description}
//           hideChevron={true}
//           onPress={() => navigate('HouseDetail', { houseId: item.id })}
//           leftAvatar={{ source: require('../gobadgers.png') }}
//         />
//       );
//     };

//     const { navigate } = this.props.navigation;
//     return (
//     <FlatList
//         data={this.state.rents}
//         renderItem={renderHouseItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     );
//     }}


RentInformation.navigationOptions = {
  title: 'Rent Information',
};

// export default function RentInformation() {
//   return (
//     <ScrollView style={styles.container}>
//       {/**
//        * Go ahead and delete ExpoLinksView and replace it with your content;
//        * we just wanted to provide you with some helpful links.
//        */}
//       <ExpoLinksView />
//     </ScrollView>
//   );
// }

// RentInformation.navigationOptions = {
//   title: 'Rent Information',
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
