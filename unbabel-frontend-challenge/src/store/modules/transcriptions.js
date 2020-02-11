import TranscriptionService from '@/api/TranscriptionService.js'

export const namespaced = true

export const state = {
  transcriptions: [],
  //trascriptionError: [],
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
      transcription => transcription.id === id
    )
    updatedTranscription[field] = text
  },
  DELETE_TRANSCRIPTION(state, id) {
    state.transcriptions = state.transcriptions.filter(
      transcription => transcription.id !== id
    )
  },
  TOGGLE_LOADING(state) {
    state.loading = !state.loading
  }
}

export const actions = {
  fetchTranscriptions({ commit, dispatch }) {
    commit('TOGGLE_LOADING')
    TranscriptionService.getTranscriptions()
      .then(response => {
        commit('LOAD_TRANSCRIPTIONS', response.data)
        commit('TOGGLE_LOADING')
        dispatch(
          'notification/add',
          {
            type: 'success',
            message: 'Transcriptions succesfully loaded'
          },
          { root: true }
        )
      })
      .catch(error => {
        commit('TOGGLE_LOADING')
        dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'Problem loading transcriptions: ' + error.message
          },
          { root: true }
        )
      })
  },
  uploadTranscriptions({ dispatch }) {
    if (state.transcriptions.length < 1) {
      return dispatch(
        'notification/add',
        {
          type: 'error',
          message: 'Please add at least one transcription before uploading'
        },
        { root: true }
      )
    }

    let emptyValues = state.transcriptions.map(
      transcription => !Object.values(transcription).includes('')
    )

    if (emptyValues.includes(false)) {
      return dispatch(
        'notification/add',
        {
          type: 'error',
          message: 'There are empty or invalid fields.'
        },
        { root: true }
      )
    }

    TranscriptionService.postTranscriptions(state.transcriptions)
      .then(response => {
        dispatch(
          'notification/add',
          {
            type: 'success',
            message: 'Uploaded succesfully, Status: ' + response.statusText
          },
          { root: true }
        )
      })
      .catch(error => {
        dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'Problem loading transcriptions:' + error.message
          },
          { root: true }
        )
      })
  },
  addSingleTranscription({ commit }) {
    commit('ADD_SINGLE_TRANSCRIPTION')
  },
  editTranscription({ commit }, { field, id, text }) {
    commit('EDIT_TRANSCRIPTION', { field, id, text })
  },
  deleteTranscription({ commit }, id) {
    commit('DELETE_TRANSCRIPTION', id)
  }
}
