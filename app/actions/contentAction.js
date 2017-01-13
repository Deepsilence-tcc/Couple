/**
 * Created by cong on 2017/1/12.
 */
import *as Types from './action_type';
import utils from '../common/util';
import *as Apis from '../common/api';

export let getHomeData = (isLoading,isLoadMore,isRefresh,page,id,sort)=> {

    let URL = Apis.homeApi + '&offset=' + page * 10;
    if (id != undefined) {
        URL = URL + '&genre_id=' + id
    }
    if (sort != undefined) {
        URL = URL + '&sort=' + sort;
    }

    return dispatch => {
        dispatch(fetchContent(isLoadMore,isRefresh,isLoading));
        utils.requestUtil.get(URL, (response) => {
            dispatch(receiveContent(response.result.list))
        }, (error) => {
            console.log(error)
            dispatch(receiveContent())
        })
    }
}
    let fetchContent =(isLoadMore, isRefresh, isLoading)=>{
        return {
            type: Types.FETCH_CONTENT,
            isLoading:isLoading,
            isLoadMore:isLoadMore,
            isRefresh:isRefresh,
        }
    }
    let receiveContent = (list)=>{

        return{
            type:Types.RECEIVE_CONTENT,
            contentList:list
        }
    }



