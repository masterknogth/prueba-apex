import { defineConfig,loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
//import {BootstrapVue3Resolver} from 'unplugin-vue-components/resolvers'


export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
      plugins: [
        vue()
      ],

      base: process.env.VITE_SUBFOLDER,
      build: {
        chunkSizeWarningLimit: 2600,
      },
      /*server: {
        port: 8080,
      },*/
  });
}