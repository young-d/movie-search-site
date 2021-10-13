import { API_END_POINT } from '~/utils/constant'

export default {
    namespaced: true,
    state() {
        return {
            movies: [],
            selectedMovie: {}
        }
    },
    mutations: {
        assignState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        assignKeyword(state, input) {
            state.keyword = input
        },
        cleanKeyword(state) {
            state.keyword = ''
        },
        selectedMovie(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async readSearchMovies({ commit }, keyword) {
            const movies = await fetch(`${API_END_POINT}&s=${keyword}&page=1`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => res.json())

            commit('assignState', {
                movies: movies.Search
            })
        },
        async readSelectedMovie({ commit }, id) {
            const selectedMovie = await fetch(`${API_END_POINT}&i=${id}&plot=full`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => res.json())

            commit('assignState', {
                selectedMovie
            })
        }
    }
}
    