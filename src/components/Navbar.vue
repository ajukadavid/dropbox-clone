<script setup lang="ts">

</script>

<template>
  <nav class="flex">
    <a href="#">
      <img src="../assets/logo.png" alt="logo" class="w-12">
    </a>
    <a href="#">
      <img src="../assets/logoText.png" alt="logo" class=" h-4 m-5 w-20">
    </a>
    <div>
      <a>
        <span class="dropdown">Why dropbox?</span>
      </a>
      <div class="hidden dropdown-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a class="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
