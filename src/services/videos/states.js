export const defaultUrl = () => {
    return {
        url:'',
    }
}

export const defaultSelectedVideo = () => {
    return {
        id_video:'',
        tittle:'',
        description:'',
        thumbnail:''
    }
}


export const defaultError = () => {
    return {
        error:false,
        message:'',
    }
}

export const defaultSuccess = () => {
    return {
        success:false,
        message:'',
    }
}


export default {
    videos:[],
    selectedUrl:defaultUrl(),
    selectedVideo:defaultSelectedVideo(),
    errors:defaultError(),
    success:defaultSuccess()
   
}