/**
 * Created by cong on 2017/1/12.
 */

import React from 'react'
import{
    View,
    Text,
    InteractionManager,
    ListView,
    RefreshControl,
}from 'react-native'
import {getHomeData} from '../actions/contentAction';
import Constants from '../common/constants'
var RefreshListView = require('../components/RefreshableListView/index');
import Item from '../components/item'
import LoadMoreFooter from '../components/LoadMoreFooter'


let page = 1;
let isLoadMore = false;
let isRefreshing = false;
let isLoading = true;

export default class Content extends React.Component{

    constructor(props){
        super(props)
        this.state= {
             ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
    }
   componentDidMount(){
       InteractionManager.runAfterInteractions(()=>{
            const {dispatch} = this.props;
            const {id} = this.props;
            dispatch(getHomeData(isLoading, isLoadMore, isRefreshing, page,id))

       })
   }

    render(){
        const {contentData} = this.props
        return(
            <View>
                {
                    contentData.isLoading?
                        <Text>loading</Text>:
                        <ListView
                            dataSource={this.state.ds.cloneWithRows(contentData.contentList)}
                            renderRow={this.renderListViewRow}
                            initialListSize={3}
                            enableEmptySections={true}
                            onEndReached={this._onEndReach.bind(this)}
                            onEndReachedThreshold={20}
                            renderFooter={this._renderFooter.bind(this)}
                            onScroll={this._onScroll}
                            style={{height: Constants.window.height - 140}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={contentData.isRefresh}
                                    onRefresh={this._onRefresh.bind(this)}
                                    title="正在加载中……"
                                    color="#ccc"
                                />
                            }
                        />
                }
            </View>
        )
    }
    renderListViewRow=(rowData)=>{
        return(
            <Item item={rowData}/>
        )
    }
    _onScroll=()=>{
        if (!isLoadMore) isLoadMore = true;
    }
    // 上拉加载
    _onEndReach(){
        const {dispatch} = this.props;
        const {id} = this.props;
        if (isLoadMore) {
            page++;
            dispatch(getHomeData(false,isLoadMore,isRefreshing,page,id));
            isLoadMore = false;
        }
    }
    _renderFooter(){
        const {contentData} = this.props;
        if (contentData.isLoadMore) {
            return <LoadMoreFooter />
        }
    }
    // 下拉刷新
    _onRefresh() {
        page = 1;
        const {dispatch} = this.props;
        const {id} = this.props;

        isLoadMore = false;
        isRefreshing = true;
        dispatch(getHomeData(false,isLoadMore,isRefreshing,page,id))

    }

    _selectItem=(item)=>{

        alert(item.title)
    }

}