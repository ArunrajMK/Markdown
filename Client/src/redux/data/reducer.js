import { CONVERT_DATA_FAILURE, CONVERT_DATA_REQUEST, CONVERT_DATA_SUCCESS } from "./action"





const initState = {
    isLoading: false,
    isError:false,
    convert:[]
}


export const dataReducer = (state=initState, action)=>{
    switch(action.type){


case CONVERT_DATA_REQUEST:
    return({
        ...state,
        isLoading:true,
        isError:false
    })


    case CONVERT_DATA_SUCCESS:
    return({
        ...state,
        isLoading:false,
        isError:false,
        convert:action.payload
    })



    case CONVERT_DATA_FAILURE:
    return({
        ...state,
        isLoading:false,
        isError:true
    })


default:
    return({
        ...state
    })

    }
}