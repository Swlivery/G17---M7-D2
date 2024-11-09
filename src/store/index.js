import { createStore } from 'vuex';
import gamesData from './games.json';

export default createStore({
  state: {
    games: gamesData
  },
  mutations: {
    UPDATE_STOCK(state, { id, quantity }) {
      const game = state.games.find(game => game.id === id);
      if (game) {
        game.stock -= quantity;
      }
    },
    ADD_STOCK(state, { id, quantity }) {
      const game = state.games.find(game => game.id === id);
      if (game) {
        game.stock += quantity;
      }
    }
  },
  actions: {
    updateStock({ commit }, { id, quantity }) {
      commit('UPDATE_STOCK', { id, quantity });
    },
    addStock({ commit }, { id, quantity }) {
      commit('ADD_STOCK', { id, quantity });
    }
  },
  getters: {
    getAllGames: state => state.games
  }
});