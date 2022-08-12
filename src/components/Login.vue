<template>
    <div class="sm:hidden bg-mobileLogin">
        <div class="flex mt-5 ml-20 mb-3">
            <img src="../assets/loginLogo.png" class="img-logo mx-2" />
            <h2>Create a Dropbox account</h2>
        </div>
        <div class="mb-3 text-xs ml-14">
            <span>Get the best Dropbox experience on-the-go, for free!</span>
        </div>
        <div class="px-10 mx-5 p-4 bg-green-600">
            <span class="text-white ml-14 font-semibold">Download android app</span>
        </div>
        <div>
            <div class="px-10 mx-5 p-3 cursor-pointer mt-8 bg-white flex border-black border-4">
                <span class="text-black  border-r-black"><img class="w-5 h-5" src="../assets/google.png" /></span>
                <span class="text-black ml-14 text-md"  @click.prevent="loginGoogle">Sign in with Google</span>
            </div>
            <div class="px-10 mx-5 p-3 cursor-pointer mt-8 bg-white flex border-black border-4">
                <span class="text-black border-r-black"><img class="w-6 h-6" src="../assets/apple.png" /></span>
                <span class="text-black ml-14 text-md">Sign in with Apple</span>
            </div>
        </div>
        <div class="flex mx-6 mt-8 w-36">
            <div>
                <hr class="mr-8  w-36 border-black">
            </div>
            <div class="-mt-2 mr-2">
                <p class="pb-4 text-sm">or</p>
            </div>
            <div>
                <hr class=" mx-4 w-36 border-black">
            </div>
        </div>

        <form class="m-5 border">
            <input type="text" class="w-full p-4 rounded-lg mb-1" v-model="email" placeholder="Email" />
            <input type="text" class="w-full p-4 rounded-lg mb-1" v-model="password" placeholder="Password" />
        </form>
        <p class=" mb-4 ml-4 text-red-500">{{errMsg}}</p>
        <p> <input type="checkbox" class="ml-5 p-2" />
            <span class="p-2 text-sm">Remember me</span>
        </p>
        <div class="px-10 mx-5 p-4 mt-5 bg-blue-600" @click.prevent="login">
            <button class="text-white ml-28">Sign in</button>
        </div>
        <p class="text-blue-500 text-sm ml-5 mt-2">Forgot your password?</p>
        <p class=" text-sm ml-36 mt-2">(or <span class="text-blue-500"><a href="/signup">Create an account</a></span>)
        </p>
        <div class="border-t-2 flex justify-between mt-4 p-2">
            <div></div>
            <div>
                <i class="fa-solid fa-earth-africa text-blue-500 mx-1"></i>
                <span class="text-blue-500">English (United States)</span>
            </div>
        </div>
    </div>
    <div class="hidden sm:block">
        <header class="sticky top-0 z-50 p-3 shadow-md w-100 header bg-white">
            <div class="flex justify-between ">
                <div class="border-2 border-blue-400 px-3 mx-28 rounded-md">
                    <p class="text-xs text-blue-600 font-bold mt-5">Try Dropbox Business</p>
                </div>
                <div class="flex mr-36 m-3">
                    <img src="../assets/loginLogo.png" class="mr-3 desktop-logo" />
                    <p class="font-bold text-3xl">Dropbox</p>
                </div>
                <div class="mt-5 mx-28">
                    <h5 class="text-blue-600">Download the app</h5>
                </div>
            </div>
        </header>

        <main class="">
            <div class="flex mb-40">
                <div class="image-div ml-20 mt-28">
                    <img src="../assets/createAccount.png" class="" />
                </div>
                <div class="mt-20 ml-10">
                    <div class="flex justify-between w-80 ml-12">
                        <span class="text-xl">Sign in</span>
                        <p>or <router-link to="/signup" class="text-blue-500 cursor-pointer text-sm">create account</router-link></p>
                    </div>

                    <div class="ml-8">
                        <div class="px-10 mx-5 p-3 cursor-pointer mt-8 bg-white flex border-black border-4">
                            <span class="text-black  border-r-black"><img class="w-5 h-5"
                                    src="../assets/google.png" /></span>
                            <span class="text-black ml-14 text-md" @click.prevent="loginGoogle">Sign in with Google</span>
                        </div>
                        <div class="px-10 mx-5 p-3 cursor-pointer mt-8 bg-white flex border-black border-4">
                            <span class="text-black border-r-black"><img class="w-6 h-6"
                                    src="../assets/apple.png" /></span>
                            <span class="text-black ml-14 text-md">Sign in with Apple</span>
                        </div>
                    </div>
                    <div class="flex mx-6 mt-8 w-36">
                        <div>
                            <hr class="mr-8  w-36 border-black">
                        </div>
                        <div class="-mt-2 mr-2">
                            <p class="pb-4 text-sm">or</p>
                        </div>
                        <div>
                            <hr class=" mx-4 w-36 border-black">
                        </div>
                    </div>
                    <form class="ml-10">

                        <div class="flex flex-col">
                            <label for="Email" class="text-inputColor">Email</label>
                            <input type="text" v-model="email" class=" p-1 rounded-md border border-black w-80" /> <br />
                        </div>
                        <div class="flex flex-col">
                            <label for="Password" class="text-inputColor">Password</label>
                            <input type="password" v-model="password" class=" p-1 rounded-md border border-black w-80" /> <br />
                        </div>
                        <p class=" mb-4 text-red-500">{{errMsg}}</p>
                    </form>
                    <div class="flex justify-between ml-4">
                        <p> <input type="checkbox" class="ml-5 p-8" />
                            <span class="p-2 text-sm">Remember me</span>

                        </p>
                        <div class="mx-5 p-1 px-3 cursor-pointer bg-signUpBtnColor" @click.prevent="login">
                            <button class="text-white text-sm">Sign in</button>
                        </div>
                    </div>



                    <div class=" p-1 cursor-pointer ">
                        <span class="text-blue-500 ml-8 text-sm">Forgot your password</span>
                    </div>
                </div>


            </div>

        </main>
        <footer>
            <div class="mx-40">
                <hr class="text-red-500 mb-20 w-full" />
            </div>

            <section class="bg-white relative mx-40  p-3 ">
                <div class="text-inputColor flex flex-wrap sm:grid sm:grid-cols-5 sm:gap-3">
                    <ul class="p-8">
                        <li class="mb-2 font-bold text-xs sm:text-sm">
                            Dropbox
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Install
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Mobile
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Pricing
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Business
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Enterprise
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Features
                        </li>
                    </ul>
                    <ul class="p-8">
                        <li class="mb-2 font-bold text-xs sm:text-sm">
                            About us
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Dropbox Blog
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            About
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Branding
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            News
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Jobs
                        </li>
                    </ul>
                    <ul class="p-8">
                        <li class="mb-2 font-bold text-xs sm:text-sm">
                            Support
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Help Center
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Contact us
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Copyright
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Cookie Policy
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Cookies & CCPA preferences
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Privacy & Terms
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Sitemap
                        </li>
                    </ul>
                    <ul class="p-8">
                        <li class="mb-2 font-bold text-xs sm:text-sm">
                            Community
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Refferals
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Forum
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Twitter
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline">
                            Facebook
                        </li>
                        <li class="text-xs font-light sm:text-sm hover:underline ">
                            Developers
                        </li>
                    </ul>


                    <div class="flex text-inputColor ml-5 mt-8 w-56 font-semibold">
                        <i class="fa-solid mx-4 fa-earth-americas"></i>
                        <p class="-mt-1 hover:underline ">English (United States)</p>
                    </div>
                </div>
            </section>
        </footer>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


const auth = getAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
const errMsg = ref("");

const login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((user) => {
      router.push("/home");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};


const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then(() => {
    console.log("User signed in");
    router.push("/home");
  }).catch((error) => {
      console.log(error);
      switch (error.code) {
        default:
          errMsg.value = "There was a problem loggin in";
          break;
      }
    });
};

</script>


<style scoped>
.image-div {
    width: 33rem;
}

.img-logo {
    width: 26px;
    height: 26px;
}

.header {
    width: 100%;
}

.desktop-logo {
    width: 40px;
    height: 40px;
}
</style>