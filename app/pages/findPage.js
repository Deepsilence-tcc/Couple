/**
 * Created by cong on 2016/12/28.
 */

import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    InteractionManager,
    ScrollView
}from 'react-native'
import StatusBar from '../components/StatusBarIOS'
import Icon from 'react-native-vector-icons/FontAwesome'
import Constant from '../common/constants';
export default class FindPage extends React.Component {


    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar common={styles.commonBg}/>
                <View style={styles.searchHeader}>
                    <View style={styles.input}>
                        <Icon name='search' size={15} color={'white'}/>
                        <TextInput style={{flex: 1}}
                                   autoFocus={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={()=>this.props.navigator.pop()}
                        activeOpacity={0.8}
                    >
                        <Text style={{color:Constant.colors.themeColor}}>取消</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sep}></View>
                <ScrollView>
                    <View>
                        <Text>热门搜索</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }

    back() {
        InteractionManager.runAfterInteractions(()=> {
            this.props.navigator.pop()
        })
    }
}
const styles = StyleSheet.create({
        commonBg: {
            height: 20,
        },
        searchHeader: {
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 8,
            paddingRight: 8
        },
        input: {
            flexDirection: 'row',
            backgroundColor: 'gray',
            height: 20,
            width: Constant.window.width - 56,
            alignItems: 'center',
            marginRight: 8,
            borderRadius: 5,
            paddingLeft: 5
        },
        sep: {

            height:Constant.window.radio,
            backgroundColor:'gray'
        }
    }
)