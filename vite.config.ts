import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
  plugins: [vue(), ssr()],
  resolve: {
    alias: {
      '/~': resolve(__dirname, './'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/~/variables.scss";`
      }
    }
  }
};

export default config;
