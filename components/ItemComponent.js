import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <FlatList style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <ListItem key={index}>
              <Text style={styles.itemtext}>Name: {item.name}</Text>
              <Text style={styles.itemtext}>Address: {item.Address}</Text>
              <Text style={styles.itemtext}>Price: {item.Price}</Text>
              <Text style={styles.itemtext}>Availability: {item.Availability}</Text>
              <Text style={styles.itemtext}>Sharing: {item.Sharing}</Text>
              <Text style={styles.itemtext}>Description: {item.Description}</Text>
            </ListItem>
          );
        })}
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
  }
});