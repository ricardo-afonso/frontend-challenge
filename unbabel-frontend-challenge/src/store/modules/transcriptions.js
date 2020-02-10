import TranscriptionService from '@/api/TranscriptionService.js'

export const namespaced = true

export const state = {
  transcriptions: [],
  loading: false
}

export const mutations = {
  LOAD_TRANSCRIPTIONS(state, data) {
    state.transcriptions = data
  },
  ADD_SINGLE_TRANSCRIPTION(state) {
    state.transcriptions.push({
      id: Math.floor(100 + Math.random() * 10000000), //TODO: Fetch last item's ID and ++
      voice: '',
      text: ''
    })
  },
  EDIT_TRANSCRIPTION(state, { field, id, text }) {
    let updatedTranscription = state.transcriptions.find(
      transcription => transcription.id == id
    )
    console.log('U', updatedTranscription)
    console.log('T', text)
    updatedTranscription[field] = text
  },
  // DELETE_TRANSCRIPTION (state, {index}) {
  //   state.transcriptions.filter(index thing)
  // },
  TOGGLE_LOADING(state) {
    state.loading = !state.loading
  }
}

export const actions = {
  fetchTranscriptions({ commit }) {
    commit('TOGGLE_LOADING')
    TranscriptionService.getTranscriptions()
      .then(response => {
        commit('LOAD_TRANSCRIPTIONS', response.data)
        commit('TOGGLE_LOADING')
      })
      .catch(error => {
        console.log(error)
        commit('TOGGLE_LOADING')
      })
  },
  uploadTranscriptions() {
    TranscriptionService.postTranscriptions(state.transcriptions)
  },
  addSingleTranscription({ commit }) {
    commit('ADD_SINGLE_TRANSCRIPTION')
  },
  editTranscription({ commit }, { field, id, text }) {
    commit('EDIT_TRANSCRIPTION', { field, id, text })
  }
}
