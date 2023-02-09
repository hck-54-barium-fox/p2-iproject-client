<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["data"],
  computed: {
    ...mapState(useCounterStore, ["data"]),
  },
  created() {
    // console.log(this.data, "<<<<<<");
  },
};
</script>

<template>
  <div class="pl-20">
    <H1>Jadwal Sholat</H1>
  </div>
  <div class="pl-10">
    {{ this.data.jadwalSholat.kota }},

    {{ this.data.jadwalSholat.tanggal }}
  </div>
  <div class="relative shadow-md sm:rounded-lg p-2 pb-44">
    <table
      class="w-full text-sm text-left border-x border-y text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" class="bg-gray-50 dark:bg-gray-800">Adzan</th>
          <th scope="col" class="">Waktu</th>
        </tr>
      </thead>
      <tbody class="pb-10">
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            Imsak
          </th>
          <td class="">{{ this.data.jadwalSholat.imsak }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            subuh
          </th>
          <td class="">{{ this.data.jadwalSholat.subuh }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            terbit
          </th>
          <td class="">{{ this.data.jadwalSholat.terbit }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            dhuha
          </th>
          <td class="">{{ this.data.jadwalSholat.dhuha }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            dzuhur
          </th>
          <td class="">{{ this.data.jadwalSholat.dzuhur }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            ashar
          </th>
          <td class="">{{ this.data.jadwalSholat.ashar }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            maghrib
          </th>
          <td class="">{{ this.data.jadwalSholat.maghrib }}</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            isya
          </th>
          <td class="">{{ this.data.jadwalSholat.isya }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
