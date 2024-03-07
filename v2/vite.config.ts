import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import ssr from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('sodipodi')
      }
    }
  }), vike()]
  ,resolve: {
    alias: {
     "#root": __dirname,
    }
  }
  ,optimizeDeps: {
    disabled: false
  //   include: [
  //     "./assets/swagger-ui/swagger-ui-es-bundle.js",
  //     "./assets/swagger-ui/swagger-ui-standalone-preset.js"
  //   ]
  }
  ,build: {
    commonjsOptions: {
      include: []
  //       /.*js$/,
  //       /assets\/swagger-ui\/swagger-ui-es-bundle.js$/,
  //       /assets\/swagger-ui\/swagger-ui-standalone-preset.js$/,
  //       /node_modules\/@json-schema-tools\/reference-resolver\/build\/index-web.js$/
  //     ],
    },
  }
}

export default config
