/**
 * Created by ljunb on 16/5/26.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import Constants from '../common/constants';

export default class StatusBarIOS extends React.Component {
    render() {
        return (
            <View>
                <StatusBar {...this.props}/>
                <View style={[styles.statusBar,this.props.common]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 20,
        backgroundColor: Constants.colors.themeColor,
    }
})