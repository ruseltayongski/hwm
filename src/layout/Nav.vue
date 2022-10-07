<template>
    <!-- Navbar  -->
    <nav class="relative container mx-auto p-6"> 
        <!-- Flex Container -->
       <div class="flex items-center justify-between">
        <!-- Logo -->
            <div class="pt-2">
                <!-- <img src="img/doh_logo.png" alt=""/> -->
            </div>
        <!-- Menu Items -->
            <div class="hidden space-x-6 md:flex">
                <router-link class="hover:text-darkGrayishBlue" to="/">Home</router-link>
                <router-link class="hover:text-darkGrayishBlue" to="/About">About</router-link>
                <router-link class="hover:text-darkGrayishBlue" to="/Login">Login</router-link>
                <a href="#" class="hover:text-darkGrayishBlue">Contact Us</a>
            </div> 
            <!-- Button -->
            <a 
             href="login.html"
             class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight ">
                Sign In
            </a>
            <!-- MENU ICONS -->
            <button id="menu-btn" class="block menuicon md:hidden focus:outline:none">
                <span class="menuicon-top"></span>
                <span class="menuicon-middle"></span>
                <span class="menuicon-bottom"></span>
            </button>
       </div>
       <!-- Mobile Menu -->
       <div class="">
        <div id="menu" class="absolute  flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            
        </div>
       </div>
    </nav>
</template>