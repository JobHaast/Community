<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <div class="flex">
      <div
        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
      >
        <SearchIcon class="h-5 w-5 text-gray"></SearchIcon>
      </div>
      <input
        type="email"
        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
        placeholder="Search"
      />
      <div>
        <button
          class="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          @click="open = true"
        >
          Filter
        </button>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <Table :data="communities"></Table>
  </div>
</template>
<script>
import Table from "../../components/Table.vue";
import { SearchIcon } from "@heroicons/vue/solid";

export default {
  name: "Communities",
  components: {
    Table,
    SearchIcon,
  },
  data: () => ({
    communities: [{ name: "Wag" }, { name: "wan" }],
  }),
};
</script>
