/**
 * Created by cong on 2016/12/26.
 */

import React from 'react'
import{
    View,
    TabBarIOS
}from 'react-native'
import HomeContainer from './homeContainer';
import SearchContainer from './searchContainer';
import MessageContainer from './messageContainer';
import UserContainer from './userContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../common/constants';

const tabBarItems = [
    {title: '首页', icon: 'home', component: HomeContainer},
    {title: '发现', icon: 'search', component: SearchContainer},
    {title: '消息', icon: 'bell', component: MessageContainer},
    {title: '我', icon: 'user', component: UserContainer},
]

export default class TabView extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }

    render() {
        return (
            <TabBarIOS tintColor={Constants.colors.themeColor}>
                {
                    tabBarItems.map((controller, i) => {

                        let Component = controller.component;
                        return (
                            <FontAwesome.TabBarItem
                                key={i}
                                title={controller.title}
                                iconName={controller.icon}
                                selectedIconName={controller.icon}
                                selected={this.state.selectedTab === controller.title}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: controller.title
                                    })
                                }}
                            >
                                <Component navigator={this.props.navigator} {...this.props}/>
                            </FontAwesome.TabBarItem>
                        )
                    })
                }
            </TabBarIOS>
        )
    }
}