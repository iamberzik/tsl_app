<template>
  <form @submit.prevent class="flex flex-col gap-2 w-fit">
    <CustomInput v-model="credentials.username" input_type="string" label="Login"/>
    <CustomInput v-model="credentials.password" input_type="password" label="Password"/>
    <div class="flex justify-end mr-2">
      <button type="submit" class="w-[80px] bg-blue-600 font-medium text-white hover:opacity-75 rounded"
              @click="loginUser(this.credentials)">
        Sign In
      </button>
    </div>
  </form>
</template>

<script>
import CustomInput from "@/components/ui/CustomInput";
import {mapActions} from "vuex";

export default {
  name: "LoginView",
  components: {CustomInput},
  methods: {
    ...mapActions(['loginUser'])
  },
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    }
  }
}
</script>

<style scoped>

</style>