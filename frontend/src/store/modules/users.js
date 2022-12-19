import {API_ROOT} from "../../../globals";
import userFormValidator from "@/validator";
import router from "@/router";

export default {
    state: {
        users: []
    },
    getters: {
        getAllUsers(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        }
    },
    actions: {
        async fetchUsers(ctx) {
            const {username, password,} = ctx.getters.getUserCredentials
            const res = await fetch(API_ROOT + "users/", {
                headers: {
                    "Authorization": 'Basic ' + btoa(username + ":" + password)
                }
            })
                .catch(() => alert("Error during fetching"))

            const users = await res.json()

            ctx.commit('setUsers', users)
        },

        async deleteUser(ctx, user_id) {
            const {username, password,} = ctx.getters.getUserCredentials
            await fetch(API_ROOT + "users/" + user_id, {
                method: 'DELETE',
                headers: {
                    "Authorization": 'Basic ' + btoa(username + ":" + password)
                }
            })
                .catch(() => alert('Error during deleting'))
            ctx.dispatch('fetchUsers')
        },

        async updateUser(ctx, user) {
            if (!userFormValidator(user)) {
                return null
            }

            const user_id = user.id
            delete user.id
            const {username, password,} = ctx.getters.getUserCredentials
            await fetch(API_ROOT + "users/" + user_id, {
                method: 'PUT',
                headers: {
                    "Authorization": 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then(() => alert("User updated"))
                .catch(() => alert("Error during updating"))
            ctx.dispatch('fetchUsers')
        },

        async createUser(ctx, user) {
            if (!userFormValidator(user)) {
                return null
            }

            const {username, password,} = ctx.getters.getUserCredentials
            await fetch(API_ROOT + "users/", {
                method: 'POST',
                headers: {
                    "Authorization": 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then(() => alert("User created"))
                .catch(() => alert("Error during creating"))
            ctx.dispatch('fetchUsers')
            router.push({name: "users"})
        },
    },
}