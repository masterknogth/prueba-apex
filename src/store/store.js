import { createStore } from 'vuex'

import videos from '../services/videos';


export default createStore({
    modules: {
     
      videos:videos,
     
    }
})