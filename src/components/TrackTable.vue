<script></script>

<template>
  <table class="w-full">
    <thead >
      <tr class="border">
        <td class="p-2 border">#</td>
        <td class="p-2 border">Track Name</td>
        <td class="p-2 border">Artist</td>
        <td class="p-2 border">Album Cover</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 10">
        <td class="p-2 border">#1</td>
        <td class="p-2 border">Gold</td>
        <td class="p-2 border">James Marriot</td>
        <td class="p-2 border w-[120px] self-center">
          <img src="https://i.scdn.co/image/ab67616d00001e02fa9192aa1de0cdbd78d1351d" class="h-[100px] w-[100px] rounded-2xl"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>