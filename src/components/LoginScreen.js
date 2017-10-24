import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { logIn, skipLogin } from '../actions/login';
import TYPES from "../actions/types";
//import {loginAction} from '../actions/login';

import {bindActionCreators} from "redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
this.state = {
    username: 'sup1',
    password: '123456',
};
let opt = {
    'name':this.state.username,
    'password':this.state.password,
};

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Screen A
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
   {/* <Button
      onPress={() => navigation.navigate('SampleTabView')}
      title="Log in"
    />*/}
      <Button
      onPress={() => this.props.dispatch({'type': TYPES.LOGGED_DOING})}
      title="Log in"
    />
  </View>
);
LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

function select(store){
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status,
    }
}


export default connect(select)(LoginScreen);
//export default  connect(select,(dispatch)=>({action:bindActionCreators(loginAction,dispatch)}))(LoginScreen);