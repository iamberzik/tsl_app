<template>
  <table class="table-auto w-full">
    <thead>
    <tr>
      <th>
        <button>Name</button>
      </th>
      <th>
        <button>Phone</button>
      </th>
      <th>
        <button>Email</button>
      </th>
      <th>
        <button>Country</button>
      </th>
      <th>
        <button>Age</button>
      </th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <table-row v-for="user in getAllUsers" :key="user.id" :user=user />
    </tbody>
  </table>
</template>


<script>

import TableRow from "@/components/TableRow";
import {mapGetters} from "vuex";

export default {
  name: "UsersTable",
  components: {TableRow},
  computed: {
    ...mapGetters(['getAllUsers'])
  },
  async mounted() {
    this.$store.dispatch("fetchUsers")
  },

}


</script>

<style scoped>

</style>