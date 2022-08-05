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

const solution = ref(false)
const solutionDropdown = () => {
  solution.value = !solution.value
}

const contact = ref(false)
const contactDropdown = () => {
  contact.value = !contact.value
}
const getApp = ref(false)
const getAppDropdown = () => {
  getApp.value = !getApp.value
}


</script>

<template>

 <nav class="hidden sm:flex">
    <a href="#">
      <img src="../assets/logo.png" alt="logo" class="w-10">
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
          <img src="../assets/logo.png" alt="logo" class="w-14 h-19">
        </a>
        <a href="#">
          <img src="../assets/logoText.png" alt="logo" class=" h-5 m-5 w-22">
        </a>
      </div>
      <div class="flex justify-center">
        <span class="mt-4 mx-2">Sign in</span>

        <div @click.prevent="showMenu" class="flex md:hidden mx-2">
          <button type="button" v-if="!show" class="
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
    <div :class="show ? 'block' : 'hidden'" class="bg-navColor mt-0 p-4 -top-5">
      <div class="flex justify-between w-full ml-3 ">
        <div class="mt-3">
          <span class="text-sm ">Why Dropbox</span>

          <div>
            <ul v-if="drop" class="mt-5">
              <li class="font-bold text-xs">Overview</li>
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

        <div class="m-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="dropBoxDropdown" v-if="!drop"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="dropBoxDropdown" v-if="drop"></i>

        </div>

      </div>
      <div class="flex justify-between w-full ml-3">
        <div class="mt-3">
          <span class="text-sm">Products</span>

          <div>
            <ul v-if="prod" class="mt-5">
              <li class="font-bold text-xs mt-10">Do more than store with Dropbox</li>
              <li class="mt-4 text-xs">
                <div>

                </div>

              </li>
              <li class="mt-4 text-xs">
                <div class="flex">
                  <div class="mt-2">
                    <img src="../assets/Dropbox-logo-nav.svg" />
                  </div>
                  <div class="m-2">
                    <p>Dropbox</p>
                    <p class="font-light">Store, share and access files accross devices</p>
                  </div>
                </div>
              </li>
              <li class="mt-4 text-xs">
                <div class="flex">
                  <div class="mt-2">
                    <img src="../assets/Backup-logo-nav.svg" />
                  </div>
                  <div class="m-2">
                    <p>Backup</p>
                    <p class="font-light">Automatically back up your files</p>
                  </div>
                </div>
              </li>
              <li class="mt-4 text-xs">
                <div class="flex">
                  <img src="../assets/HelloSign-logo-nav.svg" />
                  <div class="m-2">
                    <p>HelloSign</p>
                    <p class="font-light">Request and add signatures to documents</p>
                  </div>
                </div>
              </li>
              <li class="mt-4 text-xs">
                <div class="flex">
                  <img src="../assets/DocSend-logo-nav.svg" />
                  <div class="m-2">
                    <p>DocSend</p>
                    <p class="font-light">Send documents securely and track activity</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="m-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="prodDropdown" v-if="!prod"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="prodDropdown" v-if="prod"></i>

        </div>

      </div>
      <div class="flex justify-between w-full ml-3">
        <div class="mt-3">
          <span class="text-sm">Solutions</span>

          <div>
            <ul v-if="solution" class="mt-5">
              <li class="text-xs mt-4">Creatives</li>
              <li class="text-xs mt-4">Sales</li>
              <li class="text-xs mt-4">Marketing</li>
              <li class="text-xs mt-4">HR</li>
              <li class="text-xs mt-4">IT</li>
              <li class="text-xs mt-4">Team Lead</li>
              <li class="text-xs mt-4">Personal</li>
            </ul>
          </div>
        </div>
        <div class="m-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="solutionDropdown" v-if="!solution"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="solutionDropdown" v-if="solution"></i>
        </div>
      </div>
      
      <div class="flex justify-between w-full ml-3">
        <div class="mt-3">
          <span class="text-sm">Pricing</span>
        </div>
        <div class="m-3"></div>
      </div>

      <div class="flex justify-between w-full ml-3 mt-3">
        <div class="mt-3">
          <span class="text-sm">Contact</span>

          <div>
            <ul v-if="contact" class="mt-5">
              <li class="font-bold text-xs">Support</li>
              <li class="mt-4 text-xs">Help center</li>
              <li class="mt-4 text-xs">Community forums</li>
            </ul>
          </div>
        </div>
        <div class="m-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="contactDropdown" v-if="!contact"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="contactDropdown" v-if="contact"></i>
        </div>
      </div>


      <div class="flex justify-between w-full ml-3 ">
        <div class="mt-3">
          <span class="text-sm">Get app</span>

          <div>
            <ul v-if="getApp" class="mt-5">
              <li class="text-xs mt-4">Desktop app</li>
              <li class="text-xs mt-4">Mobile app</li>
            </ul>
          </div>
        </div>
        <div class="m-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="getAppDropdown" v-if="!getApp"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="getAppDropdown" v-if="getApp"></i>
        </div>
      </div>

       <div class="flex justify-between w-full ml-3 mb-12">
        <div class="mt-3">
          <span class="text-sm">Sign up</span>
        </div>
        <div class="m-3"></div>
      </div>
      <div class="w-full border-red-500 text-white h-20 mb-2 p-6 flex justify-between button-bottom-container">
            <span class="text-white">Get started</span>
            <span class="text-white"><i class="fa-solid fa-arrow-right"></i></span>

      </div>
    </div>   
  </nav>


<section class="bg-bodyColor relative w-full -top-3" :class="show ? 'hidden' : 'block'">
<div class="wrapper w-full">
    <div class="p-9">
        <p class="title-text text-white mb-4 mt-20">More inspiration, less <br /><span class="ml-14">interruption</span></p>

        <p class="text-white text-lg">Dropbox lets you simplify your workflow. <br /> So you can spend more time in your flow.</p>
        <div class="w-40 border-red-500 text-white ml-20 mb-2 mt-6 p-5 flex justify-between bg-btnColor">
            <span class="text-black text-sm">Find your plan</span>
            <span class="text-black"><i class="fa-solid fa-arrow-right"></i></span>

      </div>
      <div class="w-80">
        <img src="../assets/asset2.png" alt="image asset" class="mt-9 mb-5" />
      </div>

      <div>
        <div class="mb-5">
            <img src="../assets/pic1.png" alt="pdf picture" class=" mb-5"/>
            <span class="font-bold text-white mt-8 mb-5">Protect everything, everywhere</span>
            <p class="text-white mt-5 font-light">All your videos, Photoshop files, PDFs, and Keynote decks, all securely backed up in one place.</p>
        </div>
          <div class="mb-5">
            <img src="../assets/pic2.png" alt="pdf picture" class=" mb-5"/>
            <span class="font-bold text-white mt-8 mb-5">Streamline client feedback</span>
            <p class="text-white mt-5 font-light">Make creative review simpler for everyone, with comments and input clearly connected to your content.</p>
        </div>
         <div>
            <img src="../assets/img.jpeg" alt="pdf picture" class=" mb-5"/>
            <span class="font-bold text-white mt-8 mb-5">Deliver projects with ease</span>
            <p class="text-white mt-5 font-light mb-5">Hand off large files, confirm delivery, and control who has access with password protection and link expirations.</p>
        </div>
          <div class="mb-5">
            <img src="../assets/img.jpeg" alt="pdf picture" class=" mb-5"/>
            <span class="font-bold text-white mt-8 mb-5">Make complex contracts easy</span>
            <p class="text-white mt-5 font-light">Capture electronic signatures on NDAs, SOWs, licensing and copyright agreements, and more, fast.

</p>
        </div>
      </div>
   </div>
   
</div>
</section>

<section class="bg-navColor relative w-full -top-3" :class="show ? 'hidden' : 'block'">
<div class="wrapper w-full">
<div class="">
    <p class="title-text mb-4 mt-20">What can Dropbox help 
 <br /><span class="ml-28">you do?</span></p>
         <p class=" text-md ml-5 mb-8">Dropbox brings everything—traditional files, <br /> cloud content, and web shortcuts—together in 
         <br /><span class="ml-24">one place.</span>
         </p>
</div>
</div>
</section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&display=swap');

.button-bottom {
  background-color: red;
}

.button-bottom-container{
  
}
.button-bottom-container > span{
 color: black;
 font-weight: 500;
 font-size: 14px;
}
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.title-text {
    font-size: 22px;
    font-weight: 500;
    
    font-family: 'BhuTuka Expanded One', cursive;
}
</style>