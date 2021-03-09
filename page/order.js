import React, { Component } from 'react';
import { Button, Text, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

class Order extends Component {
  render() {
    console.log(this.props);
    return(
      <View>
        <Text class={styles.textCenter}>helo temen. you have many order : {this.props.orders}</Text>

        <Button class={styles.buttonOrder} onPress={this.props.pressAddOrder} title="Add Order"/>
        <Button class={styles.buttonOrder} onPress={this.props.pressDeleteOrder} title="Delete Order"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonOrder: {
    fontSize: 6
  },

  textCenter: {
    textCenter: 'center'
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