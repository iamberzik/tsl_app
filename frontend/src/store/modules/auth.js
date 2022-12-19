import {API_ROOT} from "../../../globals";
import router from "@/router";

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
            router.push({name: "guest"})
        }
    },
    actions: {
        async loginUser(ctx, credentials) {
            if (!Object.values(credentials).every(el => el)) {
                return null
            }


            const res = await fetch(API_ROOT + 'login', {
                method: 'POST',
                headers: {
                    "Authorization": 'Basic ' + btoa(credentials.username + ":" + credentials.password)
                }
            })
                .catch(() => alert("Login error"))

            if (res.status === 200) {
                const user_data = await res.json()
                ctx.commit('setUser', {...credentials, ...user_data})
                router.push({name: "users"})
            }
        }
    },
}