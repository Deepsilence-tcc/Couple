import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
}from 'react-native'
import Constants from '../common/constants'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Item extends React.Component{

    render(){
        const {item} = this.props
       return(
           <View style={styles.container}>
               <TouchableOpacity style={styles.item_container} activeOpacity={0.8}>
                   <Image source={{uri:item.pic_list_img}} style={styles.item_image}/>
                    <View style={styles.item_detail}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.item_title} numberOfLines={2}>{item.title}</Text>
                            <Text style={styles.price_text}> ¥{item.price_show.l}</Text>
                        </View>
                        <View style={styles.recommendation_view}>
                            <Icon name='book' size={10} color={Constants.colors.themeColor}/>
                            <Text style={styles.recommendation}>{item.recommendation_list_show}</Text>
                        </View>
                        <View style={styles.recommendation_view}>
                            <Icon name="location-arrow" size={7} color={'rgb(216,216,216)'}/>
                            <Text style={styles.poi_text}>{item.poi.title}</Text>
                            <Icon name="times" size={7} color={'rgb(216,216,216)'} style={{marginLeft:15}}/>
                            <Text style={styles.poi_text}>{item.date_tag}</Text>
                        </View>
                    </View>
               </TouchableOpacity>
           </View>
       )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    item_container:{
        backgroundColor:'rgb(242,242,242)',
        shadowColor: 'gray',
        shadowOffset: {x: 1.5, y: 1},
        shadowOpacity: 0.5,
        marginTop:8,
        marginLeft:8,
        marginRight:8
    },
    item_image:{
        height:200,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    item_detail:{
        backgroundColor:'white',
        padding:7
    },
    item_title:{
        color:'rgb(11,30,48)',
        fontSize:13,
        width:Constants.window.width-100
    },
    recommendation:{
        fontSize:11,
        color:'rgb(112,112,112)',
        marginLeft:4
    },
    poi_text:{
        fontSize:10,
        color:'rgb(164,164,164)',
        marginLeft:3
    },
    price_text:{
        fontSize:15,
        color:'rgb(255,86,93)',
        marginLeft:25
    },
    recommendation_view:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:6
    }
})