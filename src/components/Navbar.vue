<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const showMenu = () => {
  show.value = !show.value
  console.log(show.value)
}

</script>

<template>
  <nav class="hidden sm:flex">
    <a href="#">
      <img src="../assets/logo.png" alt="logo" class="w-12">
    </a>
    <a href="#">
      <img src="../assets/logoText.png" alt="logo" class=" h-5 m-5 w-22">
    </a>
    <div class="">
      <div>
        <button class="peer px-5 py-4 hover:bg-navColor text-black">Why dropbox?</button>

        <!-- the menu here -->
        <div class="hidden peer-hover:flex hover:flex flex
         flex-col bg-navColor">
          <div class="flex">
            <ul class="m-5">
              <li class="font-semibold m-2 text-xs">Overview</li>
              <li class="m-2 text-xs">Get inspired</li>
              <li class="m-2 text-xs">What customers say</li>
              <li class="m-2 text-xs">App integrations</li>
              <li class="m-2 text-xs">Resources</li>
            </ul>

            <ul class="m-5 mb-7 mr-12">
              <li class="font-semibold m-2 text-xs">Better with Dropbox</li>
              <li class="m-2 text-xs">Share files</li>
              <li class="m-2 text-xs">Store and organize</li>
              <li class="m-2 text-xs">Sync your devices</li>
              <li class="m-2 text-xs">Protect and secure data</li>
              <li class="m-2 text-xs">Connect remote teams</li>
              <li class="m-2 text-xs">Keep work moving</li>

              <li class="m-2 text-xs">Always-on backup</li>

              <li class="m-2 text-xs">Sign a document</li>

              <li class="m-2 text-xs">Track document analytics</li>

            </ul>
          </div>
        </div>
      </div>
      <div>
        <button class="peer px-5 py-4 hover:bg-navColor text-black">Products</button>

        <!-- the menu here -->
        <div class=" hidden peer-hover:flex hover:flex flex
        max-w-2xl
         flex-col bg-navColor">
          <div class="flex">
            <ul class="m-5">
              <li class="font-semibold m-2 text-xs">Overview</li>
              <li class="m-2 text-xs">Get inspired</li>
              <li class="m-2 text-xs">What customers say</li>
              <li class="m-2 text-xs">App integrations</li>
              <li class="m-2 text-xs">Resources</li>
            </ul>

          </div>
        </div>
      </div>
    </div>

  </nav>

  <nav class="sm:hidden">
    <div class="flex justify-between">
      <div class="flex">
        <a href="#">
          <img src="../assets/logo.png" alt="logo" class="w-12">
        </a>
        <a href="#">
          <img src="../assets/logoText.png" alt="logo" class=" h-5 m-5 w-22">
        </a>
      </div>
      <div class="flex justify-center">
        <span class="mt-4 mx-2">Sign in</span>

         <div @click.prevent="showMenu" class="flex md:hidden mx-2">
            <button
              type="button"
              class="
                text-gray-800
                p-2
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
      </div>
    </div>


  <div :class="show ? 'flex' : 'hidden'">
    <div class="flex justify-between">
<div>
  <span>Why Dropbox</span>
</div>
<div>
  
</div>
    </div>
  </div>
  </nav>

</template>

<style scoped>
</style>
