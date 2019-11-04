const publicStore = {
  state: {
    asideCollapse: true, //true 收起 false展开
  },
  getters: {
    getAsideCollapse(state) {
      return state.asideCollapse
    }
  },
  actions: {
    getAsideCollapse: ({commit, state, dispatch}, config = {}) => {
      debugger
      return new Promise((resolve, reject) => {
        commit('setAsideCollapse', (state, config))
      })
    }
  },
  mutations: {
    setAsideCollapse(state, action) {
      debugger
      state.asideCollapse = action.isCollapse
    }
  }
}
export default publicStore
