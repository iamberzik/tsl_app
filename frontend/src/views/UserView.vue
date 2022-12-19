<template>
  <form @submit.prevent class="flex flex-col gap-2 w-fit">
    <CustomInput v-model="user.name" input_type="string" label="Name"/>
    <CustomInput v-model="user.phone" input_type="string" label="Phone"/>
    <CustomInput v-model="user.email" input_type="string" label="E-mail"/>
    <CustomInputWithDatalist v-model="user.country" label="Country" id="countriesInput" :options="countries"/>
    <CustomInput v-model="user.age" input_type="number" label="Age"/>
    <div class="flex justify-end mr-2">
      <button v-if="this.$route.params.id" type="submit"
              class="w-[80px] bg-blue-600 font-medium text-white hover:opacity-75 rounded"
              @click="updateUser(this.user)">Save
      </button>
      <button v-else type="submit" class="w-[80px] bg-blue-600 font-medium text-white hover:opacity-75 rounded"
              @click="createUser(this.user)">Add
      </button>
    </div>
  </form>
</template>

<script>

import CustomInput from "@/components/ui/CustomInput";
import {API_ROOT} from "../../globals";
import CustomInputWithDatalist from "@/components/ui/CustomInputWithDatalist";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserView",
  components: {CustomInputWithDatalist, CustomInput},
  computed: {
    ...mapGetters(['getUserCredentials'])
  },
  data() {
    return {
      user: {
        name: "",
        phone: "",
        email: "",
        country: "",
        age: 0
      },
      countries: ["Russia", "USA", "Australia"]
    }
  },
  methods: {
    ...mapActions(["updateUser", "createUser"]),
    async getUser() {
      const {username, password,} = this.getUserCredentials
      let user_id = this.$route.params.id
      if (user_id) {
        const res = await fetch(API_ROOT + "users/" + user_id,
            {
              headers: new Headers({
                "Authorization": 'Basic ' + btoa(username + ":" + password)
              })
            })
            .catch(() => alert("Error during fetching"))

        this.user = await res.json()
      }
    },

  },
  mounted() {
    this.getUser()
  }
}
</script>

<style scoped>

</style>