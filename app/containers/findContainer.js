/**
 * Created by cong on 2016/12/28.
 */

import React from 'react'
import{
    View,
}from 'react-native'
import FindPage from '../pages/findPage'

export default class FindContainer extends React.Component{

    render(){

        return(
            <FindPage {...this.props}/>
        )
    }
}