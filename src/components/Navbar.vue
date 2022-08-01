<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const showMenu = () => {
  show.value = !show.value
  
}
const drop = ref(false)
const dropBoxDropdown = () => {
  drop.value = !drop.value
}

const prod = ref(false)
const prodDropdown = () => {
  prod.value = !prod.value
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
          <button type="button"  v-if="!show" class="
                text-gray-800
                p-2
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
          <i class="fa-solid fa-xmark mt-5 mx-2 h-5" v-else></i>
        </div>
      </div>
    </div>
    <div :class="show ? 'block' : 'hidden'" class="bg-navColor mt-0 p-6">
      <div class="flex justify-between w-full m-3">
        <div>
          <span class="text-sm">Why Dropbox</span>

             <div>
          <ul v-if="drop" class="mt-5">
          <li class="font-bold text-sm">Overview</li>
          <li class="mt-4 text-xs">Get inspired</li>
          <li class="mt-4 text-xs">What customers say</li>
          <li class="mt-4 text-xs">App integrations</li>
          <li class="mt-4 text-xs">Resources</li>

          <li class="font-semibold mt-9 text-sm">Better with dropbox</li>
          <li class="mt-4 text-xs">Share files</li>
          <li class="mt-4 text-xs">Store and organize</li>
          <li class="mt-4 text-xs">Sync your devices</li>
          <li class="mt-4 text-xs">Protect and secure data</li>
          <li class="mt-4 text-xs">Connect remote teams</li>
          <li class="mt-4 text-xs">Keep work moving</li>
          <li class="mt-4 text-xs">Always-on backup</li>
          <li class="mt-4 text-xs">Sign a document</li>
          <li class="mt-4 text-xs">Track document analytics</li>

        </ul>
      </div>
        </div>
        
        <div>
            <i class="fa-solid fa-chevron-down" @click.prevent="dropBoxDropdown" v-if="!drop"></i>
            <i class="fa-solid fa-chevron-up" @click.prevent="dropBoxDropdown" v-if="drop"></i>

        </div>
       
      </div>
   

    <div class="flex justify-between w-full m-3 mt-7">
        <div>
          <span class="text-sm">Products</span>

             <div>
          <ul v-if="prod" class="mt-5">
          <li class="font-bold text-xs mt-10">Do more than store with Dropbox</li>
          <li class="mt-4 text-xs">
            <div>
              
            </div>

          </li>
          <li class="mt-4 text-xs">What customers say</li>
          <li class="mt-4 text-xs">App integrations</li>
          <li class="mt-4 text-xs">Resources</li>
        </ul>
      </div>
        </div>
        
        <div>
            <i class="fa-solid fa-chevron-down" @click.prevent="prodDropdown" v-if="!prod"></i>
            <i class="fa-solid fa-chevron-up" @click.prevent="prodDropdown" v-if="prod"></i>

        </div>
       
      </div>
    </div>
  </nav>

</template>

<style scoped>
</style>
