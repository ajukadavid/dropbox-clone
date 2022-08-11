<template>
    <swiper :pagination="{
        type: 'fraction',
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-hikeColor">
                <img class="w-full w-sm" src="../assets/hike.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">“Dropbox has been tremendously helpful for social
                        media. I can hop on anytime and pull whatever photo is inspiring me to post.”</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Mary Ashley Krogh (MAK), Illustrator and Graphic Designer
                    </span>

                </div>
            </div>
        </swiper-slide>


        <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-homeColor">
                <img class="w-full" src="../assets/home.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">“Dropbox increased our team’s collaboration while
                        working from home, which has increased our flexibility and could revolutionize our office
                        culture.</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Adam Montgomery, Senior Manager of Programming, Sundance Film Festival
                    </span>

                </div>
            </div>
        </swiper-slide>


        <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-artColor">
                <img class="w-full" src="../assets/art.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">
                        “We’re a grass-roots nonprofit. When we use a tool that the rest of the design world uses, it
                        helps professionalize our organization.”</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Ann Kappes, Director of Art Partnerships at Creativity Explored

                    </span>

                </div>
            </div>
        </swiper-slide>
            <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-officeColor">
                <img class="w-full" src="../assets/office.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">
                      “Dropbox easily allows me to transfer what’s in my mind to another person.”</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Murray Bell, Founder and Executive Creative Director of Semi Permanent

                    </span>

                </div>
            </div>
        </swiper-slide>


   <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-sophiaColor">
                <img class="w-full" src="../assets/SOPHIA_Still005.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">
                      “Our team is working remotely—everyone's in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.”</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Sophia Chang, Illustrator and Designer


                    </span>

                </div>
            </div>
        </swiper-slide>

         <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-glassColor">
                <img class="w-full" src="../assets/KingChildren.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">
                       “Dropbox version control is very important. You may want to go back to an earlier version because there's an idea in there that you really like.”</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Sahir Zaveri, CEO of King Children


                    </span>

                </div>
            </div>
        </swiper-slide>

          <swiper-slide>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-lastColor">
                <img class="w-full" src="../assets/hope_quote.png" alt="Hiking by the lake">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-white">
                       “Creative growth happens when you don’t have to worry about managing storage.”</div>
                    <p class="text-white text-base underline underline-offset-1 mt-8">
                        Read the full story
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 mt-8">
                    <span class="text-white">Andi Scull, Founder and Creative Director, HOPE Organization




                    </span>

                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const modules = [Pagination, Navigation]


</script>

<style scoped>
.mySwiper {
   
    padding: 40px;
}
</style>
