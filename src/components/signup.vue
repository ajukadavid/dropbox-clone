<template>
    <div class="sm:hidden">
        <div class="flex mt-5 ml-20 mb-3">
            <img src="../assets/loginLogo.png" class="img-logo mx-2" />
            <h2>Create a Dropbox account</h2>
        </div>
        <div class="mb-3 text-xs ml-14">
            <span>Get the best Dropbox experience on-the-go, for free!</span>
        </div>
        <div class="px-10 mx-5 p-4 bg-green-600">
            <span class="text-white ml-16">Download android app</span>
        </div>

        <form class="m-5 border">
            <input type="text" class="w-full p-4 rounded-lg" placeholder="First name" />
            <input type="text" class="w-full p-4 rounded-lg" placeholder="Last name" />
            <input type="text" class="w-full p-4 rounded-lg" placeholder="Email" />
            <input type="text" class="w-full p-4 rounded-lg" placeholder="Password" />
        </form>
        <p> <input type="checkbox" class="ml-5 p-8" />
            I agree to the <span class="underline underline-offset-1 text-blue-400">Dropbox Terms.</span> Learn about
            how we
        <p class="ml-12">use and protect your data in our <span
                class="underline underline-offset-1 text-blue-400">Privacy policy</span></p>

        </p>
        <div class="px-10 mx-5 p-4 mt-5 bg-blue-600">
            <button class="text-white ml-16">Create an account</button>
        </div>
        <p class="text-blue-500 ml-28 mt-5">I already have an account</p>

        <div class="border-t-2 flex justify-between mt-4 p-2">
            <div></div>
            <div>
                <i class="fa-solid fa-earth-africa text-blue-500 mx-1"></i>
                <span class="text-blue-500">English (United States)</span>
            </div>
        </div>
    </div>
    <div class="hidden sm:flex">
        <header class="sticky top-0 z-50 p-3 shadow-md w-100 header">
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

        <main class="relative">
            <div class="flex">
                <div>
                    <img src="../assets/createAccount.png" class="img-logo" />
                </div>
                <div>

                </div>
            </div>

        </main>
        <footer></footer>
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped>
.img-logo {
    width: 26px;
    height: 26px;
}
.header {
    width: 100%;
}
.desktop-logo{
    width: 40px;
    height: 40px;
}
</style>