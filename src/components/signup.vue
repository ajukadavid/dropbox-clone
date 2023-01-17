<template>
    <div class="sm:hidden">
        <div class="flex mt-5 ml-20 mb-3">
            <img src="../assets/loginLogo.png" class="img-logo mx-2" />
            <h2>Create a Dropbox account</h2>
        </div>
        <div class="mb-3 text-xs ml-10">
            <span>Get the best Dropbox experience on-the-go, for free!</span>
        </div>
        <div class="px-10 mx-5 p-4 bg-green-600">
            <span class="text-white ml-16">Download android app</span>
        </div>

        <form class="m-5 border">
            <input type="text" class="w-full p-4 rounded-lg" placeholder="First name" />
            <input type="text" class="w-full p-4 rounded-lg" placeholder="Last name" />
            <input type="text" class="w-full p-4 rounded-lg" v-model="email" placeholder="Email" />
            <input type="password" class="w-full p-4 rounded-lg" v-model="password" placeholder="Password" />
        </form>
        <p> <input type="checkbox" class="ml-5 p-2" />
            I agree to the <span class="underline underline-offset-1 text-blue-400">Dropbox Terms.</span> Learn about
            how we
        <p class="ml-12">use and protect your data in our <span
                class="underline underline-offset-1 text-blue-400">Privacy policy</span></p>

        </p>
        <div class="px-10 mx-5 p-4 mt-5 bg-blue-600" @click="register">
            <button class="text-white ml-16">Create an account</button>
        </div>
        <p class="text-blue-500 ml-28 mt-5">
             <router-link to="/" class="cursor-pointer">I already have an account</router-link>
            

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
                    <div class="flex justify-between w-80 ml-10 mb-5">
                        <span>Create an account</span>
                        <a href="/"><p>or <span class="text-blue-500">log in </span></p></a>
                    </div>
                    <form class="ml-10">
                        <div class="flex flex-col">
                            <label for="First Name" class="text-inputColor">First name</label>
                            <input type="text" class=" p-1 rounded-md border border-black w-80" /> <br />
                        </div>
                        <div class="flex flex-col">
                            <label for="Last name" class="text-inputColor">Last name</label>
                            <input type="text" class=" p-1 rounded-md border border-black w-80" /> <br />
                        </div>
                        <div class="flex flex-col">
                            <label for="Email" class="text-inputColor">Email</label>
                            <input type="text"  v-model="email"  class=" p-1 rounded-md border border-black w-80" /> <br />
                        </div>
                        <div class="flex flex-col">
                            <label for="Password" class="text-inputColor">Password</label>
                            <input type="password" v-model="password"  class=" p-1 rounded-md border border-black w-80" /> <br />
                        </div>
                        
                        <p class=" mb-4 text-red-500">{{errMsg}}</p>
                    </form>
                    <p> <input type="checkbox" class="ml-5 p-2" />
                        I agree to the <span class="underline underline-offset-1 text-blue-400">Dropbox Terms.</span>
                        Learn about
                        how we
                    <p class="ml-12">use and protect your data in our <span
                            class="underline underline-offset-1 text-blue-400">Privacy policy</span></p>

                    </p>
                    <div class="px-10 mx-5 p-1 cursor-pointer mt-5 bg-signUpBtnColor">
                        <button class="text-white ml-20 text-sm" @click.prevent="register">Create an account</button>
                    </div>
                     <div class="px-10 mx-5 p-1 cursor-pointer mt-8 bg-blue-500">
                        <span class="text-white mr-4  border-r-black"><i class="fa-brands fa-google"></i></span>
                        <span class="text-white ml-10 text-sm">Sign up with Google</span>
                    </div>
                </div>

    </div>
    
        </main>
        <footer>
            <div class="mx-40">
             <hr class="text-red-500 mb-20 w-full"/>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { auth } from '../firebase/firebase'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'


const router = useRouter();
const email = ref('')
const password = ref('')
const firstName = ref('')
const lastName = ref('')
const errMsg = ref('')

const register = async () => {
   await createUserWithEmailAndPassword(auth, email.value, password.value)
   .then((user) => {
    if(user){
        updateProfile(auth.currentUser!, {
            displayName: '',
            photoURL: ''
        })
        sendEmailVerification(auth.currentUser!)
        router.push('/home')
    }
   })
   .catch((error) =>{
                    console.log(error);
                    
                     switch (error.code) {
                        case 'auth/invalid-email':
                            errMsg.value = 'The email address is badly formatted.'
                            break
                        case 'auth/email-already-exists':
                            errMsg.value = 'The email address is already in use by another account.'
                            break
                        case 'auth/weak-password':
                            errMsg.value = 'The password must be 6 characters long or more.'
                            break
                        case 'auth/email-already-in-use':
                            errMsg.value = 'Email already in use.'
                            break
                        default:
                            errMsg.value = 'There was a problem creating the account.'
                            break
                    }
   })
}
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