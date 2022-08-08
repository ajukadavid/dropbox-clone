

<template>
 <Navbar class="hidden sm:flex"/>
<div class="">
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
      <div class="w-full  text-white h-20 mb-2 p-6 flex justify-between bg-blue-700">
        <span class="text-white">Get started</span>
        <span class="text-white"><i class="fa-solid fa-arrow-right"></i></span>

      </div>
    </div>
  </nav>


  <section class="bg-bodyColor relative w-full -top-3" :class="show ? 'hidden' : 'block'">
    <div class="wrapper w-full">
      <div class="p-9 sm:w-full">
        <div class=" sm:flex sm:items-center sm:flex-col">
          <p class="title-text text-xl sm:text-4xl font-extrabold text-white mb-4 mt-20">More inspiration, less <br class="sm:hidden"/><span class="ml-14 sm:ml-0">interruption</span>
        </p>

        <p class="text-white text-lg sm:text-base">Dropbox lets you simplify your workflow. <br class="sm:hidden"/> <span>So you can spend more time in your
          flow.</span></p>
        <div class="w-40 sm:w-52 text-white ml-20 sm:ml-2 mb-2 mt-6 p-5 flex justify-between bg-btnColor">
          <span class="text-black text-sm sm:text-xl">Find your plan</span>
          <span class="text-black font-bold"><i class="fa-solid fa-arrow-right"></i></span>

        </div>
        </div>
        <div class="w-80 sm:w-full">
          <img src="../assets/asset2.png" alt="image asset" class="mt-9 mb-5" />
        </div>

        <div class="sm:flex sm:mt-10">
          <div class="mb-5 sm:mr-8">
            <img src="../assets/pic1.png" alt="pdf picture" class=" mb-5" />
            <span class="font-bold text-white mt-8 mb-5">Protect everything, everywhere</span>
            <p class="text-white mt-5 font-light">All your videos, Photoshop files, PDFs, and Keynote decks, all
              securely backed up in one place.</p>
          </div>
          <div class="mb-5 sm:mr-8">
            <img src="../assets/pic2.png" alt="pdf picture" class=" mb-5" />
            <span class="font-bold text-white mt-8 mb-5">Streamline client feedback</span>
            <p class="text-white mt-5 font-light">Make creative review simpler for everyone, with comments and input
              clearly connected to your content.</p>
          </div>
          <div class="sm:mr-8">
            <img src="../assets/img.jpeg" alt="pdf picture" class=" mb-5" />
            <span class="font-bold text-white mt-8 mb-5">Deliver projects with ease</span>
            <p class="text-white mt-5 font-light mb-5">Hand off large files, confirm delivery, and control who has
              access with password protection and link expirations.</p>
          </div>
          <div class="mb-5">
            <img src="../assets/pic3.png" alt="pdf picture" class=" mb-5" />
            <span class="font-bold text-white mt-8 mb-5">Make complex contracts easy</span>
            <p class="text-white mt-5 font-light">Capture electronic signatures on NDAs, SOWs, licensing and copyright
              agreements, and more, fast.

            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="bg-navColor relative w-full -top-3" :class="show ? 'hidden' : 'block'">
    <div class="wrapper w-full">
      <div class="p-4">
        <p class="title-text mb-4 mt-20 sm:text-3xl font-bold sm:ml-20">What can Dropbox help
          <br class="sm:hidden"/><span class="ml-28 sm:ml-0">you do?</span>
        </p>
        <p class=" text-md ml-5 sm:ml-10 mb-8">Dropbox brings everything—traditional files, <br class="sm:hidden"/> cloud content, and web
          shortcuts—together in
          <br class="sm:hidden"/><span class="ml-24 sm:ml-0">one place.</span>
        </p>
      </div>
    </div>
  </section>

  <section class="mx-4" :class="show ? 'hidden' : 'block'">
  
    <div class="sm:hidden">
      <div class="flex justify-between border-y-2 border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="cloudDropdown">Get 2GB of cloud storage for free with
            Dropbox basic</span>

          <div v-if="cloud" class="mt-4">

            <p class="text-md">Save and access your files from any device, and share them with anyone. Discover what
              Dropbox can do for you—get a free account, no strings attached!</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-imgOneColor   py-16 px-7 mt-4">
              <img src="../assets/img1.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="cloudDropdown" v-if="!cloud"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="cloudDropdown" v-if="cloud"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="plusDropdown">Dropbox plus has has room for all your
            content with space to spare</span>

          <div v-if="plus" class="mt-4">

            <p class="text-md">Safeguard your photos, personal docs, work files, and much more. Save everything with
              2,000 GB of space—and get some handy tools to help you stay organized.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-imgTwoColor py-16 px-7 mt-4">
              <img src="../assets/file.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="plusDropdown" v-if="!plus"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="plusDropdown" v-if="plus"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="vacationDropdown">Dropbox Family is a place for everyone
            with space for everything</span>

          <div v-if="vacation" class="mt-4">

            <p class="text-md">Share 2,000 GB of storage between 6 people. Each family plan member gets their own
              private Dropbox account for less than the price of two Plus plans.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-yellow-400 py-16 px-7 mt-4">
              <img src="../assets/vacation.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="vacationDropdown" v-if="!vacation"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="vacationDropdown" v-if="vacation"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="lifeDropdown">Make life easier for you and your clients
            with Dropbox Professional</span>

          <div v-if="life" class="mt-4">

            <p class="text-md">Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space.
              Dropbox Professional makes it easier for you to work with colleagues and clients.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-lifeColor py-16 px-7 mt-4">
              <img src="../assets/pro_plank_02_ui@2x.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="lifeDropdown" v-if="!life"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="lifeDropdown" v-if="life"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="streamlineDropdown">Streamline your document workflow with
            HelloSign</span>

          <div v-if="streamline" class="mt-4">

            <p class="text-md">Save yourself time and hassle with HelloSign. You can sign legally-binding agreements
              with a few clicks. And it's just as easy to request a signature from someone else.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-orange-500 py-16 px-7 mt-4">
              <img src="../assets/sign.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="streamlineDropdown" v-if="!streamline"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="streamlineDropdown" v-if="streamline"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="centralDropdown">Centralize, secure, and easily access
            your work with Dropbox Standard</span>

          <div v-if="central" class="mt-4">

            <p class="text-md">Safeguard sensitive and confidential info. Automate time-consuming processes with
              powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum
              3 users per plan.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-green-500 py-16 px-7 mt-4">
              <img src="../assets/CollabBrowse_2@2x.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="centralDropdown" v-if="!central"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="centralDropdown" v-if="central"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="docSendDropdown">DocSend lets you track, analyze, and
            optimize your content</span>

          <div v-if="docSend" class="mt-4">

            <p class="text-md">Safely share business-critical documents and get real-time performance insights. DocSend
              helps you manage and optimize your company’s most important content.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-blue-400 py-16 px-7 mt-4">
              <img src="../assets/collaboration-diagram.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="docSendDropdown" v-if="!docSend"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="docSendDropdown" v-if="docSend"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="teamsDropdown">Proactively detect threats to your team’s
            content with Dropbox Advanced</span>

          <div v-if="teams" class="mt-4">

            <p class="text-md">Always-on security monitoring and alerts. Extended 1-year version history and file
              recovery. Plus all the storage space you need. Dropbox Advanced is a secure collaboration solution for
              your entire team. Minimum 3 users per plan.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
            <div class="bg-purple-400 py-16 px-7 mt-4">
              <img src="../assets/JTBD_UI_7@2x.png" alt="basic hero" />
            </div>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="teamsDropdown" v-if="!teams"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="teamsDropdown" v-if="teams"></i>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex sm:w-full">
      <div class="w-1/2">
        <div class="flex justify-between border-y-2 border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="cloudDropdown">Get 2GB of cloud storage for free with
            Dropbox basic</span>

          <div v-if="cloud" class="mt-4 sm:mt-0">

            <p class="text-md py-2">Save and access your files from any device, and share them with anyone. Discover what
              Dropbox can do for you—get a free account, no strings attached!</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
           
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="cloudDropdown" v-if="!cloud"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="cloudDropdown" v-if="cloud"></i>
        </div>
      </div>

      <div class="flex justify-between border-b-2  border-borderColor relative -top-3 p-6">
        <div>
          <span class="font-semibold text-md" @click.prevent="plusDropdown">Dropbox plus has has room for all your
            content with space to spare</span>

          <div v-if="plus" class="mt-4 sm:mt-0">

            <p class="text-md py-2">Safeguard your photos, personal docs, work files, and much more. Save everything with
              2,000 GB of space—and get some handy tools to help you stay organized.</p>
            <p class="underline underline-offset-1 font-semibold mt-4">Learn more</p>
          </div>
        </div>
        <div class="ml-3">
          <i class="fa-solid fa-chevron-down text-xs" @click.prevent="plusDropdown" v-if="!plus"></i>
          <i class="fa-solid fa-chevron-up text-xs" @click.prevent="plusDropdown" v-if="plus"></i>
        </div>
      </div>

      </div>
      <div class="w-1/2 mt-30">
         <div v-if="cloud" class="bg-imgOneColor w-full py-16 px-7 relative -top-3 left-4">
              <img src="../assets/img1.png" alt="basic hero" />
        </div>
        <div v-if="plus" class="bg-imgTwoColor py-16 px-7 mt-4">
              <img src="../assets/file.png" alt="basic hero" />
          </div>
      </div>
    </div>
  </section>

  <section class="-mt-3 bg-navColor" :class="show ? 'hidden' : 'block'">
    <div class="border-t-2 relative p-3">
      <div class="w-full wrapper">

        <p class="title-text mb-5 m-10 ">How will you use
          <br /><span class="ml-10">Dropbox?</span>
        </p>

      </div>
      <div class="max-w-sm  overflow-hidden shadow-sm">
        <img class="w-full b" src="../assets/Segmentation_1@2x.png" alt="Segmentation one">
        <div class="px-6 py-4 bg-white">
          <div class=" text-4xl mb-2 ">For work</div>
          <p class="text-gray-700 text-base">
            Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one
            place.
          </p>
          <div class="mt-8">
            <div class="w-full  text-white h-20 mb-2 p-6 flex justify-between bg-blue-700">
              <span class="text-white">Get Dropbox for work</span>
              <span class="text-white"><i class="fa-solid fa-arrow-right"></i></span>

            </div>
          </div>

        </div>
      </div>

      <div class="max-w-sm  overflow-hidden shadow-sm mt-5">
        <img class="w-full b" src="../assets/Segmentation_2@2x.png" alt="Segmentation two">
        <div class="px-6 py-4 bg-white">
          <div class=" text-4xl mb-2 ">For personal use</div>
          <p class="text-gray-700 text-base">
            Keep everything that’s important to you and your family shareable and safe in one place. Back up files in
            the cloud, share photos and videos, and more.
          </p>
          <div class="mt-8">
            <div class="w-full  text-white h-20 mb-2 p-6 flex justify-between bg-blue-700">
              <span class="text-white">Get Dropbox for personal use</span>
              <span class="text-white"><i class="fa-solid fa-arrow-right"></i></span>

            </div>
          </div>

        </div>
      </div>
      <p class="title-text mb-5 mt-4"><span class="ml-12">Get more out of</span>
        <br /><span class="ml-2">Dropbox by connecting</span>
        <br /><span class="ml-4"> with the tools you love</span>
      </p>
      <span class="underline underline-offset-1 ml-10 font-light">Learn more about partner integrations</span>
      <div class="p-3">
        <div class="mt-10">
          <img src="../assets/zoom.png" alt="zoom" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Zoom</p>
          <p>Enhance remote collaboration with Zoom instant meetings and video recordings.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/slack.png" alt="slack" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Slack</p>
          <p>Bring Slack conversations and Dropbox content together to keep teams in sync.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/adobe_cc.png" alt="adobe" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Adobe Creative Cloud</p>
          <p>Easily and securely send files to clients and vendors from within Adobe Photoshop.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/mic_office.png" alt="microsoft office" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Microsoft Office</p>
          <p> Easily access, edit, and share Office docs online in Dropbox.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/google_wrkspace.png" alt="Google Workspace" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Google Workspace</p>
          <p> Create, edit, and share Google Docs, Sheets, and Slides in Dropbox.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/trello.png" alt="Trello" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Trello</p>
          <p> Collaborate on team projects in Trello with Dropbox content.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/canvas.png" alt="Canvas" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Canvas</p>
          <p> Upload course files or assignments straight from Dropbox to Canvas.</p>
        </div>
        <div class="mt-8">
          <img src="../assets/asana.png" alt="Asana" class="w-12 mb-4" />
          <p class="font-bold text-md mb-4">Asana</p>
          <p> Track all of your team’s work with Asana while keeping Dropbox content alongside.</p>
        </div>
      </div>

    </div>
  </section>

  <section class="bg-bodyColor relative w-full" :class="show ? 'hidden' : 'block'">
    <div class="wrapper w-full">
      <div class="mb-5">
        <p class="title-text text-white mt-10">
          <span class="ml-8">Trusted by over 700</span> <br />
          <span class="">million registered users</span> <br />
          <span class="ml-10"> and 600,000 teams
          </span>
          
        </p>
<p class="underline underline-offset-1 text-white ml-20 mt-4 mb-20">View more customer stories</p>

      </div>
    </div>


  <Swiper :class="show ? 'hidden' : 'block'"/>

  <div class="p-10">
      <p class="text-white text-4xl mb-4 font-extralight">For all things worth <br /> <span class="">Sharing</span>
          </p>
        <div class="w-full border-red-500 text-white mb-2 mt-6 p-5 flex justify-between bg-btnColor">
          <span class="text-black text-md font-bold">Explore plans</span>
          <span class="text-black"><i class="fa-solid fa-arrow-right"></i></span>

        </div>
  </div>
  </section>
  <section :class="show ? 'hidden' : 'block'" class="bg-black relative w-full pb-5 p-3">
<div class="text-white flex flex-wrap">
<ul class="p-8">
  <li class="mb-6 font-bold text-lg">
    Dropbox
  </li>
   <li class="text-xs font-extralight my-2">
    Desktop app
  </li>
   <li class="text-xs font-extralight my-2">
    Mobile app
  </li>
   <li class="text-xs font-extralight my-2">
    Integrations
  </li>
   <li class="text-xs font-extralight my-2">
    Features
  </li>
   <li class="text-xs font-extralight my-2">
    Solutions
  </li>
   <li class="text-xs font-extralight my-2">
    Do more than store
  </li>
   <li class="text-xs font-extralight my-2">
    Security
  </li>
   <li class="text-xs font-extralight my-2">
    Advance access
  </li>
</ul>
<ul class="p-8">
  <li class="mb-6 font-bold text-lg">
    Products
  </li>
   <li class="text-xs font-extralight my-2">
Plus
</li>
   <li class="text-xs font-extralight my-2">
   Professional
  </li>
   <li class="text-xs font-extralight my-2">
    Business
  </li>
   <li class="text-xs font-extralight my-2">
    Enterprise
  </li>
   <li class="text-xs font-extralight my-2">
    HelloSign
  </li>
   <li class="text-xs font-extralight my-2">
    DocSend
  </li>
   <li class="text-xs font-extralight my-2">
    Plans
  </li>
   <li class="text-xs font-extralight my-2">
    Product updates
  </li>
</ul>
<ul class="p-8">
  <li class="mb-6 font-bold text-lg">
    Support
  </li>
   <li class="text-xs font-extralight my-2">
    Help Center
  </li>
   <li class="text-xs font-extralight my-2">
    Contact us
  </li>
   <li class="text-xs font-extralight my-2">
    Privacy & Terms
  </li>
   <li class="text-xs font-extralight my-2">
    Cookie policy
  </li>
   <li class="text-xs font-extralight my-2">
    Cookies & CCPA preferences
  </li>
   <li class="text-xs font-extralight my-2">
  Sitemap
  </li>
   <li class="text-xs font-extralight my-2">
    Learning resources
  </li>
   <li class="text-xs font-extralight my-2">
    Advance access
  </li>
</ul>
<ul class="mt-8 -ml-5">
  <li class="mb-6 font-bold text-lg">
    Community
  </li>
   <li class="text-xs font-extralight my-2">
    Blog
  </li>
   <li class="text-xs font-extralight my-2">
   Developers
  </li>
   <li class="text-xs font-extralight my-2">
    Community forums
  </li>
   <li class="text-xs font-extralight my-2">
    Refferals
  </li>
</ul>

<ul class="p-8">
  <li class="mb-6 font-bold text-lg">
    Company
  </li>
   <li class="text-xs font-extralight my-2">
    About us
  </li>
   <li class="text-xs font-extralight my-2">
    Jobs
  </li>
   <li class="text-xs font-extralight my-2">
    Investor relations
  </li>
   <li class="text-xs font-extralight my-2">
    ESG
  </li>
   <li class="text-xs font-extralight my-2">
   Partners
  </li>
</ul>


<hr/>

</div>

<div class="flex text-white ml-1">
<i class="fa-brands fa-twitter text-2xl mx-4"></i>
<i class="fa-brands fa-facebook text-2xl mx-4"></i>
<i class="fa-brands fa-youtube text-2xl mx-4"></i>
</div>
<hr  class="bg-white mt-10 w-40 ml-5 text-xs opacity-50"/>

<div class="flex text-white mt-8 ml-5">
  <i class="fa-solid fa-globe mr-2"></i>
       <p class="-mt-1">English (United States)</p> 
       <span><i class="fa-solid fa-arrow-right ml-2 -mt-5"></i></span>

</div>
  </section>
</div>
</template>


<script setup lang="ts">

import { ref } from 'vue'
import Swiper from './Swiper.vue';
import Navbar from './Navbar.vue';


const streamline = ref(false)
const streamlineDropdown = () => {
  streamline.value = !streamline.value
}

const central = ref(false)
const centralDropdown = () => central.value = !central.value

const teams = ref(false)
const teamsDropdown = () => teams.value = !teams.value
const docSend = ref(false)
const docSendDropdown = () => docSend.value = !docSend.value


const life = ref(false)
const lifeDropdown = () => life.value = !life.value

const vacation = ref(false)
const vacationDropdown = () => {
  vacation.value = !vacation.value
}

const plus = ref(false)
const plusDropdown = () => {
  if(cloud.value){
    cloud.value = false
    plus.value = true
  }
}

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

const cloud = ref(true)
const cloudDropdown = () => {
  console.log(cloud.value)
  if(cloud.value){
    return
  }else if(!cloud.value){
    cloud.value = true
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&display=swap');

.button-bottom {
  background-color: red;
}

.button-bottom-container{
  color: blue;
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
    
    font-family: 'BhuTuka Expanded One', cursive;
}



</style>