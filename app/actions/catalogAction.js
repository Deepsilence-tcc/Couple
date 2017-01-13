/**
 * Created by cong on 2016/12/26.
 */
import *as Types from './action_type';
import utils from '../common/util';
import *as Apis from '../common/api';

export let getCatalog = ()=>{

    let URL = Apis.catalogApi;

    return dispatch=>{
        dispatch(fetchCatalog());
        utils.requestUtil.get(URL,(response)=>{
            dispatch(receiveCatalog(response.result.list))
        },(error)=>{
            console.log(error)
            dispatch(receiveCatalog())
        })
    }
}


let fetchCatalog =()=>{
    return {
        type: Types.FETCH_CATALOG,
    }
}
let receiveCatalog=(catalogs)=>{
    return{
        type:Types.RECEIVE_CATALOG,
        catalogs:catalogs,
        isLoading:false
    }
}

export let getHomeData = (isLoading,isLoadMore,isRefresh,page,id,sort)=> {

    let URL = Apis.homeApi + '&offset=' + page * 10;
    if (id != null && id != undefined) {
        URL = URL + '&genre_id=' + id
    }
    if (sort != undefined) {
        URL = URL + '&sort=' + sort;
    }

    return dispatch => {
        dispatch(fetchContent());
        utils.requestUtil.get(URL, (response) => {
            dispatch(receiveContent(response.result.list))
        }, (error) => {
            console.log(error)
            dispatch(receiveContent())
        })
    }
}
let fetchContent =()=>{
    return {
        type: Types.FETCH_CONTENT
    }
}
let receiveContent = (list)=>{

    return{
        type:Types.RECEIVE_CONTENT,
        isLoading:false,
        isLoadMore:false,
        isRefresh:false,
        content:list
    }
}





