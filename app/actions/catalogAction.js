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
            dispatch(receiveCatalog(response.result))
            console.log(response.result);
        },(error)=>{
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
        catalogs:catalogs.list,
        count:catalogs.count
    }
}


