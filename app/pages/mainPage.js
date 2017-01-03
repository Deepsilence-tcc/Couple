/**
 * Created by cong on 2016/12/26.
 */

import React from 'react'
import{
    View,
    Text,
    InteractionManager
}from 'react-native'
import {getCatalog} from '../actions/catalogAction';
import Header from '../components/searchView';
import ScrollableaBar from '../components/tab/scrollableBar';
import FindContainer from '../containers/findContainer';
import StatusBar from '../components/StatusBarIOS';
import Base from './BaseComponent'

export default class MainPage extends Base {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=> {
            const {dispatch} = this.props;
            dispatch(getCatalog());
        })
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
        alert("1");
    }

    render() {
        const {mainData} = this.props;
        let catalogList = mainData.catalogs;
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content"/>
                <Header locationPress={this._locationPress} searchPress={this._search}/>
                {
                    catalogList.length == 0 ? <Text></Text> : <ScrollableaBar list={catalogList}/>
                }
            </View>
        )
    }
}