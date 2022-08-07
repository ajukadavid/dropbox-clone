<script setup lang="ts">

</script>

<template>
<nav role="navigation">
  <ul>
    <li><a href="#">One</a></li>
    <li><a href="#">Two</a>
      <ul class="dropdown">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
    <li><a href="#">Three</a></li>
  </ul>
</nav>
 

</template>

<style  scoped>
a {
  text-decoration: none;
}

nav {
  font-family: monospace;
}

ul {
  background: darkorange;
  list-style: none;
  margin: 0;
  padding-left: 0;
}

li {
  color: #fff;
  background: darkorange;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}
  
li a {
  color: #fff;
}

li:hover {
  background: red;
  cursor: pointer;
}

ul li ul {
  background: orange;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
}
</style>


<!--  <ul class="flex">
<li>
        <button class="peer px-5 py-4 hover:bg-navColor text-black">Why dropbox?</button>

        
        <div class="hidden peer-hover:flex hover:flex
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
     
      </li>
      <li>
         <div class="flex">
      
      <div>
        <button class="peer px-5 py-4 hover:bg-navColor text-black">Products</button>

         the menu here 
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
      </li>
    </ul> -->