import axios from 'axios'
export const CONVERT_DATA_REQUEST = "CONVERT_DATA_REQUEST";
export const CONVERT_DATA_SUCCESS = "CONVERT_DATA_SUCCESS";
export const CONVERT_DATA_FAILURE = "CONVERT_DATA_FAILURE";




const convertDataRequest = ()=>{
    return{
        type:CONVERT_DATA_REQUEST
    }
}


const convertDataSuccess = (data)=>{
    return{
        type:CONVERT_DATA_SUCCESS,
        payload:data
    }
}


const convertDataFailure = ()=>{
    return{
        type:CONVERT_DATA_FAILURE
    }
}



export const convertData = (data)=>(dispatch)=>{
    dispatch(convertDataRequest())
return axios({
    method:'POST',
    url:'http://localhost:8080',
    data
})

.then((res)=>{
    dispatch(convertDataSuccess(res.data))
})

.catch((error)=>{
    dispatch(convertDataFailure(error))
})
}