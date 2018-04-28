// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import VueSweetalert2 from 'vue-sweetalert2'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.use(VueSweetalert2)

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
