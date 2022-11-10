
import {defaultUrl} from './states'



// asigna los valores por defecto del estado selectedCodigo
export function resetSelectedUrl(state) {
    state.selectedUrl = defaultUrl();
}

export function setVideos(state, data) {
    state.videos = data
}
export function setSelectedVideo(state, data) {
   
    state.selectedVideo.id_video = data.id;
    state.selectedVideo.tittle = data.snippet.localized.title;
    state.selectedVideo.description = data.snippet.localized.description;
    state.selectedVideo.thumbnail = data.snippet.thumbnails.medium.url;
 
}

export function setSelectedVideoModal(state, data) {
   
    state.selectedVideo.id_video = data.id_video;
    state.selectedVideo.tittle = data.tittle;
    state.selectedVideo.description = data.description;
    state.selectedVideo.thumbnail = data.thumbnail;
 
}

export function setErrors(state, data) {
    state.errors.error = data.error;
    state.errors.message = data.message;
}

export function setSucess(state, data) {
    state.success.success = data.success;
    state.success.message = data.message;

}

