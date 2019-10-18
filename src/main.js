import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import store from '@/store' // Importamos nuestro store
Vue.config.productionTip = false
new Vue({
    router,
    store, // Instanciamos el store importado en nuestra aplicación
    vuetify,
    render: h => h(App)
}).$mount('#app')
