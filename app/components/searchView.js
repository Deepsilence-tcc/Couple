/**
 * Created by cong on 2016/12/27.
 */
import React from 'react'
import{
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
}from 'react-native'
import Constants from '../common/constants';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchView extends React.Component {

    render() {
        return (
            <View style={styles.search}>
                <Text style={styles.locationText}>北京</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={this.props.locationPress}>
                    <Icon name="location-arrow" size={15} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.props.searchPress}
                    activeOpacity={0.8} style={styles.searchArea}>
                    <Icon name="search" color='white' size={15}/>
                    <Text style={styles.normalText}>
                        搜索周末精彩活动
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    search: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: Constants.colors.themeColor,
        alignItems: 'center',
    },
    locationText: {
        color: 'white',
        marginLeft: 15,
        marginRight: 5,
    },
    arrow: {
        height: 15,
        width: 15,
    },
    searchArea: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(34, 170, 252)',
        marginLeft: 10,
        marginRight: 15,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 5
    }
});

module.exports = SearchView