import Vue from 'vue'
import App from './App.vue'

// import Amplify, { API } from 'aws-amplify';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
