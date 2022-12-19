<template>
  <tr>
    <td>{{ user.name }}</td>
    <td class="px-1">{{ user.phone }}</td>
    <td class="px-1">{{ user.email }}</td>
    <td class="px-1">{{ user.country }}</td>
    <td class="px-1">{{ user.age }}</td>
    <td class="flex gap-x-1 justify-center">

      <RouterLink :to="{name: 'profileEdit', params: {id: user.id}}"
                  className="bg-neutral-500 px-2 py-0.5 rounded text-white hover:opacity-75">
        <i class="fa-solid fa-pen-to-square"></i>
      </RouterLink>
      <button @click="deleteUser(user.id)" class="bg-neutral-700 px-2 py-0.5 rounded text-white hover:opacity-75">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  </tr>
</template>


<script>

import {mapActions} from "vuex";

export default {
  name: "TableRow",
  methods: {
    ...mapActions(['deleteUser'])
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>