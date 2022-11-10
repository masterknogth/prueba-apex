
import $http from './../../interceptors';

import axios from 'axios';

export async function findVideo({ commit,dispatch, state}) {

    const config = {
        headers: {      
            'Accept': 'application/json',
            'Content-Type': 'application/json',               
            'X-Requested-With': 'XMLHttpRequest',   
        }
    }
    
    let idFinal = '';

    if(state.selectedUrl.url.includes("https://youtu.be")){    
        let id = state.selectedUrl.url.split('/');
        idFinal = id[3];
        
    }

    if(state.selectedUrl.url.includes("https://www.youtube.com/")){ 
        let id = state.selectedUrl.url.split('=');
        idFinal = id[1];
    }
   
    
   
    await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${idFinal}&key=AIzaSyCDTOwovFQT9F8OArZWkXubLXS9tHOn78Q&part=snippet`,config)
    .then(async response  => {
        
        
        if(response.data.items.length > 0){
            commit('setSelectedVideo',response.data.items[0]);
            await dispatch('storeVideo');
            await dispatch('getVideos');
            commit('resetSelectedUrl');
            commit('setSucess',{success:true,message:'Video Agregado Exitosamente'});
            setTimeout(() => {
                commit('setSucess',{success:false,message:''});
            },5000)
            
        }else{
            commit('setErrors',{error:true,message:'No Existe Video'});
            setTimeout(() => {
                commit('setErrors',{error:false,message:''});
            },5000)
        }
    }).catch(error=>{

    })
}

export async function getVideos({ commit, state}) {
    await $http.get('/videos.json' )
    .then((response) => {
        
        commit('setVideos',response.data);      
    })
    .catch((error) => {
        
    })
}
export async function getVideo({ commit, state},id) {
    await $http.get(`/videos/${id}.json` )
    .then((response) => {
        
         
    })
    .catch((error) => {
        
    })
}

export async function storeVideo({ commit, state}, id) {
    
    await $http.post(`/videos.json`, JSON.stringify(state.selectedVideo) )
    .then((response) => {
        
        
    })
    .catch((error) => {
        
    })
}

export async function deleteVideo({ commit, state}, id) {
    
    await $http.delete(`/videos/${id}.json` )
    .then((response) => {
        
    })
    .catch((error) => {
       
    })
}