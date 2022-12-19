import {API_ROOT} from "../../../globals";

export default {
    state: {
        user: null
    },
    getters: {
        getUsername(state) {
            if (!state.user) {
                return false
            }

            return state.user.name
        },
        isUserAuth(state) {
            return state.user !== null
        },
        getUserCredentials(state) {
            return {username: state.user.username, password: state.user.password}
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = {...data}
        },
        logout(state) {
            state.user = null
        }
    },
    actions: {
        async loginUser(ctx, credentials) {
            const res = await fetch(API_ROOT + 'login', {
                method: 'POST',
                headers: {
                    "Authorization": 'Basic ' + btoa(credentials.username + ":" + credentials.password)
                }
            })
                .catch(() => alert("Login error"))

            const user_data = await res.json()
            ctx.commit('setUser', {...credentials, ...user_data})
        }
    },
}