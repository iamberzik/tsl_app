<template>
  <div class="flex flex-col justify-between h-screen">
  <navbar-component/>
  <main class="container px-4 mx-auto mx-auto lg:w-1/2 w-full content-center mb-auto">
    <router-view/>
  </main>
  <footer-component/>
  </div>
</template>

<style>

</style>
<script>
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  components: {FooterComponent, NavbarComponent}
}
</script>