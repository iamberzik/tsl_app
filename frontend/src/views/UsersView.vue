<template>

  <section class="w-full flex justify-end my-4">
    <RouterLink :to="{ name: 'profileCreate'}"
                class="bg-blue-600 font-medium px-2 py-0.5 rounded text-white hover:opacity-75">Создать
    </RouterLink>
  </section>
  <section class="w-full">
    <UsersTable/>
  </section>
</template>

<script>
import UsersTable from "@/components/UsersTable";

export default {
  name: "UsersView",
  components: {UsersTable}
}
</script>

<style scoped>

</style>