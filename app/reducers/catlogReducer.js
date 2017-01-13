/**
 * Created by cong on 2016/12/26.
 */
import *as Types from '../actions/action_type';

const initialState ={
    catalogs:[],
    isLoading:true
}
let catalogReducer = (state=initialState,action)=>{

    switch (action.type){
        case Types.FETCH_CATALOG:
            return Object.assign({},state,{
                ...state
            });
        case Types.RECEIVE_CATALOG:
            return Object.assign({},state,{
                catalogs:action.catalogs,
                isLoading:action.isLoading
            });
        default:
            return state;
    }
}
export default catalogReducer;
