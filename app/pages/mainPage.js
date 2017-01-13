/**
 * Created by cong on 2016/12/26.
 */

import React from 'react'
import{
    View,
    Text,
    InteractionManager,
    StyleSheet,
    ScrollView
}from 'react-native'
import Header from '../components/searchView';
import ScrollableaBar from 'react-native-scrollable-tab-view';
import FindContainer from '../containers/findContainer';
import StatusBar from '../components/StatusBarIOS';
import Base from './BaseComponent'
import MyTabBar from '../components/tab/myTabBar'
import Content from './content'

export default class MainPage extends Base {

    componentDidMount() {

    }
    //TODO 进入搜索页
    _search = ()=> {
        InteractionManager.runAfterInteractions(()=>{
            this.props.navigator.push({
                name: 'FindContainer',
                component: FindContainer,
            })
        })
    }
    //TODO 进入地点选择页
    _locationPress = ()=> {
        alert("location");
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content"/>
                <Header locationPress={this._locationPress} searchPress={this._search}/>
                <ScrollableaBar
                    renderTabBar={() => <MyTabBar textStyle={styles.tabText}/>}
                >
                    <Content tabLabel='精选' {...this.props}/>
                    <Content tabLabel='周边&户外' id = {41} {...this.props}/>
                    <Content tabLabel='景点门票' id = {152} {...this.props}/>
                    <Content tabLabel='展览' id = {44} {...this.props}/>
                    <Content tabLabel='DIY&体验' id = {115} {...this.props}/>
                    <Content tabLabel='运动' id = {45} {...this.props}/>
                    <Content tabLabel='演出&赛事' id = {42} {...this.props}/>
                    <Content tabLabel='益智潮玩' id = {150} {...this.props}/>
                    <Content tabLabel='沙龙讲座' id = {118} {...this.props}/>
                </ScrollableaBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    tabText: {
        fontSize: 13,
    }
})