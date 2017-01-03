/**
 * Created by cong on 2016/12/26.
 */
import {
    Dimensions,
}from 'react-native'
import Constants from './constants'
let Util = {
    /*
     * fetch简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     *
     * */
    get: (url, successCallback, failCallback) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err) => {
                failCallback(err);
            });
    },
    post: (url, successCallback, failCallback)=> {

        fetch(url, {
                method: 'POST',
                header: {
                    ' Host': 'api.wanzhoumo.com',
                    'Accept': '*/*',
                    'CHANNEL': 'ios-Q1',
                    'RN_VERSION': '0.37.0',
                    'HTTP_X_REST_APPKEY': 800000002,
                    'OS': 'iphone',
                    'Accept-Language': 'zh-Hans-CN;q=1',
                    'Accept-Encoding': 'gzip, deflate',
                    'HTTP_X_REST_APPSIGN': 'ae7398b7af3ac3fc1d820eec90aee9e0',
                    'User-Agent': 'User-Agent	zhoumowan/5.4.0 (iPhone; iOS 10.2; Scale/2.00)',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json; charset=utf-8',
                    'APP_V_CODE': 78,
                },
                body: JSON.stringify({
                    "token": "baa6196c45a7a83943eaae475fff92a2635042d37708b0e3a08e4aec2ce87001",
                    "getui": "{\"clientId\":\"02c31dee6c1fbffb1d7b01b686fda7c3\"}"
                })
            }
        ).then((response) =>response.text()
        ).then((text) => {
                alert(text);
            }
        ).catch((error) => {
                console.error(error);
            }
        );

    }


}


export default {
    requestUtil: Util,
};
