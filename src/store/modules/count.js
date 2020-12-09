const state = {
  count: 2
}

const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3
}

const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number
  }
}

const actions = {
  increment({commit}, number) {
    commit('increment', number)
  },
  decrement(context, number) {
    context.commit('decrement', number)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}