/**
 * Created by cong on 2017/1/12.
 */
import *as Types from '../actions/action_type';

let initialState = {
    isLoading: true,
    isLoadMore: false,
    isRefresh: false,
    contentList:[]
}

let contentReducer =(state = initialState,action)=>{

    switch (action.type){
        case Types.FETCH_CONTENT:
            return Object.assign({},state,{
                isLoadMore: action.isLoadMore,
                isRefresh: action.isRefresh,
                isLoading: action.isLoading,
            });

        case Types.RECEIVE_CONTENT:
            return Object.assign({},state,{
                contentList:state.isLoadMore?state.contentList.concat(action.contentList):action.contentList,
                isRefresh: false,
                isLoading: false,
            })
        default:
            return state
    }
}
export default contentReducer;

