<template>
  <nav class="relative flex flex-wrap items-center justify-between bg-blue-900 mb-3">
    <div class="md:container mx-auto lg:w-1/2 w-full">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
            class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <RouterLink :to="{ name: 'users'}"
                      class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            Welcome,
            <span v-if="isUserAuth">{{ getUsername }}</span>
            <span v-else>Guest</span>

          </RouterLink>
          <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              @click="toggleNavbar"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="lg:flex items-center"
             :class="navbarOpen ? 'flex': 'hidden'"
        >
          <RouterLink v-show="!isUserAuth" :to="{ name: 'login'}"
                      class="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            Login
          </RouterLink>
          <button v-show="isUserAuth" class="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          @click="logout">
            Logout
          </button>

        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "NavbarComponent",
  computed: {
    ...mapGetters(["isUserAuth", "getUsername"])
  },
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    ...mapMutations(['logout']),
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    }
  }
}

</script>

<style scoped>

</style>