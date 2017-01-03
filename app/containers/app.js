/**
 * Created by cong on 2016/12/26.
 */

import React from 'react'
import{
    View,
    Navigator
}from 'react-native'
import TabView from './tabView';

export default class App extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
                <Navigator
                    initialRoute={{name:'tabView',component:TabView}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.FloatFromRight
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    }}
                />
            </View>
        );
    }
}