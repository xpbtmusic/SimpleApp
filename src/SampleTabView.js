/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HomeScreen from './pages/HomeScreen';
import SettingScreen from './pages/SettingScreen';
import UserScreen from './pages/UserScreen';
import { connect } from 'react-redux';

 export default class SampleTabView extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: '首页',
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '首页'}
                    title="首页"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./images/ic_launcher.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/ic_launcher.png")} />}
                    onPress={() => this.setState({ selectedTab: '首页' })}>
                  <HomeScreen/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '用户'}
                    title="用户"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./images/ic_launcher.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/ic_launcher.png")} />}
                    onPress={() => this.setState({ selectedTab: '用户' })}>
                  <UserScreen />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./images/ic_launcher.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/ic_launcher.png")} />}
                    onPress={() => this.setState({ selectedTab: '我的' })}>
                  <SettingScreen />
                </TabNavigator.Item>
              </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#666666",
        fontSize: 13
    },
    selectedTabText: {
        color: "#ff8a00",
        fontSize: 13
    },
    icon: {
        width: 25,
        height: 25
    }
});
/*function select(store){
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
    }
}*/
//export default connect(select)(SampleTabView);
