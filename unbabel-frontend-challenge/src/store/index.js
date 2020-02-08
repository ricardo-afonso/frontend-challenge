import Vue from 'vue'
import Vuex from 'vuex'
import * as transcriptions from '@/store/modules/transcriptions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transcriptions
  }
})
