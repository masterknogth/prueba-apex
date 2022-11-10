<template>
    <div class="container">
       
        <div class="row">
            <div class="col-md-1">
            </div>
            <div class="col-md-10">
                <p class="text-title-form text-left">Añadir nuevo video</p>
            </div>     
            <div class="col-md-1">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-1">
            </div>
            <div class="col-md-10">
                <div class="input-group mt-4 ">
                    <input type="text" v-model="selectedUrl.url" class="form-control form-control-sm" placeholder="Añadir">
                    <div class="input-group-append">
                        <button  :disabled="loading" class="btn btn-primary btn-sm button-form" @click="buscarVideo" type="button">
                            Añadir
                            <span v-if="loading"  class="loader"></span>
                        </button>                      
                    </div>
                </div>
            </div>
            <div class="col-md-1">
            </div>
        </div>   
        <br/>
        <div class="row">
            
            <div class="alert alert-danger" v-if="errors.error" role="alert">
                {{errors.message}}
            </div>
            <div class="alert alert-success" v-if="success.success" role="alert">
                {{success.message}}
            </div>
            <br/>
            <div class="col-md-2" >
            </div>
            <div class="col-md-8" >
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4" v-for="(video, index ) in videos" :key="video.id_video">
                        
                       <b-img class="img-size" :src="video.thumbnail" fluid @click="selectVideo(video)"></b-img> 
                        <div class="video-delete-icon" @click="confirmDelete(index)">
                            <span class="video-delete-icon-text">x</span>
                        </div>
                        
                                                           
                    </div>
                </div>
            </div>
          
           
             <div class="col-md-2" >
            </div>
        </div>   
        

        <div id="modal" @click="closeModal">
            <div class="row justify-content-center">
                <div class="col-xs-9 col-sm-6 col-md-6">
                    <div class="modal-container">
                        
                        <div class="row">
                            <div class="col-md-10">
                                <p class="modal-text text-left">¿Seguro que quieres eliminar este video?</p>
                            </div>
                            <div class="col-md-2" @click="closeModal">
                                <i class="fa-solid fa-xmark modal-text modal-close-icon"></i>
                            </div>
                            
                        </div>
                        <br/>
                        <div class="row justify-content-end">
                                <div class="col-md-9">
                                    <div class="row col-md-12 justify-content-end">
                                        <div class="col-md-6">
                                            <button class="modal-cancel-button col-md-12" @click="closeModal">Cancelar</button>
                                        </div>
                                        <div class="col-md-6">
                                            <button class="modal-confirm-button col-md-12" @click="eliminarVideo">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>  
           
        </div>

        <div id="modal-video" @click="closeModalVideo">
            <div class="row justify-content-center">
                <div class="col-xs-9 col-sm-6 col-md-10">
                    <div class="modal-video-container">
                        <div class="row justify-content-end modal-text modal-close-icon" @click="closeModalVideo">
                            X
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+urlVideo" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <br/><br/>
                                <p class="modal-text text-left">{{selectedVideo.tittle}}</p>
                                <p class="text-left" style="color:#000">{{selectedVideo.description}}</p>
                                <p class="text-left">https://www.youtube.com/embed/{{urlVideo}}</p>
                            </div>
                        
                        </div>     
                        
                    </div>
                </div>
            </div>  
           
        </div>
        <Footer/>
    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    import Footer from './Footer.vue'
    export default {
        components: { 
            Footer
        },
        data() {
            return {
                id:'',
                urlVideo:'',
                loading:false
            }
        },
        async created() {    
            await this.getVideos();
           
        }, 

        computed: {           
            ...mapState("videos", [
                "videos",
                "selectedUrl",
                "selectedVideo",
                "errors",
                "success"
            ]),
        }, 
        methods:{
           
            ...mapMutations("videos", [
                "setSelectedVideoModal",
            ]),
            ...mapActions("videos", [
                "getVideos",  
                "findVideo",
                "deleteVideo" 
            ]),

            async buscarVideo(){
                this.loading = true;
                await this.findVideo();
                this.loading = false;
            },
            confirmDelete(i){
                let modal = document.getElementById('modal');
                modal.style.display = 'block';
                this.id = i;
            },

            closeModal(){
                let modal = document.getElementById('modal');
                modal.style.display = 'none';
                this.id = '';
            },

            closeModalVideo(){
                let modal = document.getElementById('modal-video');
                modal.style.display = 'none';
            },

            selectVideo(video){
                this.urlVideo = video.id_video
                this.setSelectedVideoModal(video);
                let modal = document.getElementById('modal-video');
                modal.style.display = 'block';
            },

            async eliminarVideo(){
                await this.deleteVideo(this.id);
                await this.getVideos();
                let modal = document.getElementById('modal');
                modal.style.display = 'none';
                this.id = '';
            }
        }
    }
</script>>

