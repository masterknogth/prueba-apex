import { createApp } from 'vue'
import './style.css'
import store from './store/store'
import App from './App.vue'

/*import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'*/
import BootstrapVue3 from 'bootstrap-vue-3'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapVue from 'bootstrap-vue-3';




const app = createApp(App);
app.use(store)
.use(BootstrapVue3);

app.mount("#app");

