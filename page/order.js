import React, { Component } from 'react';
import { Button, Text, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

class Order extends Component {
  render() {
    console.log(this.props);
    return(
      <View>
        <Text style={styles.textCenter}>helo temen. you have many order : {this.props.orders}</Text>

        <Button style={styles.buttonOrder} onPress={this.props.pressAddOrder} title="Add Order"/>
        <Button style={styles.buttonOrder} onPress={this.props.pressDeleteOrder} title="Delete Order"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonOrder: {
    fontSize: 6
  },

  textCenter: {
    textAlign: 'center',
    color: '#000',
    justifyContent: "center",
  }
})

const mapsStateToProps = (state) => {
  return {
    orders: state.totalOrder,
  }
}

const mapsDispatchtoProps = (dispatch) => {
  return {
    pressAddOrder: () => dispatch({type: 'INSERT_ORDER'}),
    pressDeleteOrder: () => dispatch({type: 'DELETE_ORDER'})
  }
}

export default connect(mapsStateToProps, mapsDispatchtoProps)(Order);