import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

export default {
  hasAccessToken: () => {
    return Vue.$cookies.isKey('accessToken');
  },
  getAccessToken: () => {
    const accessToken = Vue.$cookies.get('accessToken');
    return `Bearer ${accessToken}`;
  },
  setAccessToken: (token, expiresIn) => {
    Vue.$cookies.set('accessToken', token, expiresIn)
  },
  removeAccessToken: () => {
    Vue.$cookies.remove('accessToken')
  },
}
