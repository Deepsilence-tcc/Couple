/**
 * Created by cong on 2016/12/26.
 */

import {
    Dimensions,
    PixelRatio
} from 'react-native'

let colors = {
    themeColor: 'rgb(80, 198, 215)',
}
let deviceInfo = {
    uuid:'2FBAD219-FA9B-4B3A-AC65-5D2CCA7578B2',
    timestamp:new Date().getTime(),
    v:3.0

}
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    radio:1/PixelRatio.get()
}

export default {
    colors: colors,
    window:window,
    deviceInfo:deviceInfo,
}
