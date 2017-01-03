/**
 * Created by cong on 2016/12/26.
 */

import React from 'react'
import {connect} from 'react-redux';
import MainPage from '../pages/mainPage';

class HomeContainer extends React.Component {

    render() {

        return (
            <MainPage {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    const  mainData = state.catalogReducer;
    return {
        mainData
    }
}
export default connect(mapStateToProps)(HomeContainer);

