/**
 * Created by cong on 2016/12/27.
 */

import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    ScrollView
}from 'react-native'
import ScrollableTable from 'react-native-scrollable-tab-view';
import MyTabBar from './myTabBar'

export default class ScrollBar extends React.Component {
    render() {
        var list = this.props;

        return (
            <ScrollableTable
                renderTabBar={() => <MyTabBar textStyle={styles.tabText}/>}
            >

            </ScrollableTable>
        )
    }

    renderChildren(list) {
        return (
            list.map((item)=> {
                return (
                    <ScrollView tabLabel={item.name}>
                    </ScrollView>
                )
            })
        )
    }


}

const styles = StyleSheet.create({

    tabText: {
        fontSize: 13,
    }
})