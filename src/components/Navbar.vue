
<template>

    <div class="flex justify-between">
        <div class="bg-white  text-black">
            <ul class="main-ul">
                <li class="main-list-item">
                    <a href="#">
                        <img src="../assets/logo.png" alt="logo" class="logo-img -mt-4 -ml-2.5">
                    </a>
                </li>
                <li class="main-list-item"><a href="#">
                        <img src="../assets/logoText.png" alt="logo" class=" h-5 w-22 mt-4">
                    </a></li>
                <li class="main-list-item text-black mt-3 font-light text-md"><a href="#">Why dropbox</a>
                    <ul class=" why z-40 w-50">
                        <li class="m-2 text-xs items">

                            <div class="flex justify-between">
                                <div class="m-2">
                                    <p class="font-semibold m-2 text-xs">Overview</p>
                                    <p class="m-2 text-xs">Get inspired</p>
                                    <p class="m-2 text-xs">What customers say</p>
                                    <p class="m-2 text-xs">App integrations</p>
                                    <p class="m-2 text-xs">Resources</p>
                                </div>
                                <div class="">
                                    <p class="font-semibold m-2 text-xs">Better with Dropbox</p>
                                    <p class="m-2 text-xs">Share files</p>
                                    <p class="m-2 text-xs">Store and organize</p>
                                    <p class="m-2 text-xs">Sync your devices</p>
                                    <p class="m-2 text-xs">Protect and secure data</p>
                                    <p class="m-2 text-xs">Connect remote teams</p>
                                    <p class="m-2 text-xs">Keep work moving</p>

                                    <p class="m-2 text-xs">Always-on backup</p>

                                    <p class="m-2 text-xs">Sign a document</p>

                                    <p class="m-2 text-xs">Track document analytics</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </li>
                <li class="main-list-item font-light mt-3 text-md"><a href="#">Products</a>
                    <ul class="dropdown z-40 w-50">
                        <li class="m-2 text-xs items">

                            <div class="flex justify-between">
                                <div class="">
                                    <p class="mb-2 text-xs font-semibold">Do more than store with dropbox</p>

                                    <div class="flex">
                                        <img src="../assets/Dropbox-logo-nav.svg" alt="logo" class="">
                                        <div class="ml-3 mt-2">
                                            <p class="font-normal text-xs">Dropbox</p>
                                            <p class="font-extralight">Store, share and access files accross devices</p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <img src="../assets/Backup-logo-nav.svg" alt="logo" class="">
                                        <div class="ml-3 mt-2">
                                            <p class="font-normal text-xs">Backup</p>
                                            <p class="font-extralight">Automatically back up your devices</p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <img src="../assets/HelloSign-logo-nav.svg" alt="logo" class="">
                                        <div class="ml-3 mt-2">
                                            <p class="font-normal text-xs">HelloSign</p>
                                            <p class="font-extralight">Request and add signatures to documents</p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <img src="../assets/DocSend-logo-nav.svg" alt="logo" class="">
                                        <div class="ml-3 mt-2">
                                            <p class="font-normal text-xs">Docsend</p>
                                            <p class="font-extralight">Send documents securely and track activity</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </li>

                <li class="main-list-item mt-3 font-light text-md"><a href="#">Solutions</a>
                    <ul class="dropdown z-40 w-50 p-5">
                        <li class="mr-1 text-xs items">
                            <div class="">
                                <p class="mb-4 ml-5">Creatives</p>
                                <p class="mb-4 ml-5">Sales</p>
                                <p class="mb-4 ml-5">Marketing</p>
                                <p class="mb-4 ml-5">HR</p>
                                <p class="mb-4 ml-5">IT</p>
                                <p class="mb-4 ml-5">Team Lead</p>
                                <p class="mb-4 ml-5">Personal</p>
                            </div>
                        </li>

                    </ul>
                </li>
                <li class="main-list-item mt-3 font-light text-md"><a href="#">Pricing</a>
                </li>

            </ul>
        </div>

        <div class="bg-white  text-black">
            <ul class="main-ul-two m-8">
                <li class="main-list-item contact-text text-black mt-3"><a href="#">Contact</a>
                    <ul class="contact z-40 w-50">
                        <li class="m-2 text-xs items">
                            <div class="flex justify-between">
                                <div class="m-2">
                                    <p class="font-semibold m-2 text-xs">Support</p>
                                    <p class="m-2 text-xs">Help center</p>
                                    <p class="m-2 text-xs">Commmunity forums</p>
                                </div>
                                <div class="mr-32 mt-2">
                                    <p class="font-semibold m-2 text-xs">Contact sales</p>
                                    <p class="m-2 text-xs">Email</p>
                                    <p class="m-2 text-xs">+1 855-237-6726</p>

                                </div>
                            </div>
                        </li>

                    </ul>
                </li>
                <li class="main-list-item mt-3"><a href="#">Get app</a>
                    <ul class="app z-40 w-50">
                        <li class="m-2 text-xs items">

                            <div class="m-2">
                                <p class="m-2 text-xs">Desktop app</p>
                                <p class="m-2 text-xs">Mobile app</p>
                            </div>
                        </li>

                    </ul>
                </li>

                <li class="main-list-item mt-3"><a href="/signup">Sign up</a>

                </li>
                <li class="main-list-item mt-3" @click.prevent="handleSignOut">
                    <p>Sign Out</p>
                </li>
                <li class="main-list-item"><a href="#">
                        <div class="w-30 border-red-500 text-white px-5 py-3 mb-2 flex justify-between bg-blue-700">
                            <span class="text-white text-sm">Get started</span>
                            <span class="text-white ml-10"><i class="fa-solid fa-arrow-right"></i></span>

                        </div>
                    </a>

                </li>
            </ul>
        </div>
    </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";



const router = useRouter();
let auth = getAuth();


const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>

<style  scoped>
a {
    text-decoration: none;
}


ul {
    background: blue;
    list-style: none;
    margin: 0;
    padding-left: 0;
}

/* //.items */
li {
    display: block;
    float: left;
    position: relative;
    padding: 10px;
    text-decoration: none;
    transition-duration: 0.5s;
}

/* .items .links */
li a {
    color: rgb(4, 4, 4);
}

li:hover {
    cursor: pointer;
    background: #F2EEE8;

}

ul li>.dropdown {
    background: #F2EEE8;
    display: hidden;
    opacity: 0;
    min-width: 15rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
}

ul li>.app {
    background: #F2EEE8;
    display: hidden;
    opacity: 0;
    min-width: 15rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
    left: -160px;

}

ul li .why {
    background: #F2EEE8;
    visibility: hidden;
    opacity: 0;
    min-width: 30rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
}

ul li .contact {
    background: #F2EEE8;
    visibility: hidden;
    opacity: 0;
    width: 32rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: -433px;
    display: none;

}

ul li:hover>ul,
ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
}

ul li ul li {
    clear: both;
    width: 100%;
}

.logo-img {
    height: 70px;
    width: 70px;
}
</style>

