<script setup lang="ts">
    import Nav from '../layout/Nav.vue'
</script>
<template>
    <Nav></Nav>
    <!-- Hero Section -->
    <section id="hero">
        <!-- Flex Container -->
        <div class="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row animate-fade-in-down">
            <!-- Left item -->
            <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 class="max-w-md text-4xl font-bold text-center  md:text-5xl md:text-left">
                   Financial Management Information System
                </h1>
                <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    A financial management information system (FMIS) accumulates and analyzes financial data used for optimal financial planning and forecasting decisions and outcome.
                </p>
                <div class="flex justify-left md-justify-start">
                    <a 
                        href="#"
                        class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                     Get Started
                   </a>
                </div>   
            </div>
            <!-- Image -->
            <div class="md:w-1/2">
                <img src="img/illustration-intro.png" alt="">
            </div>
        </div> 
    </section>

    <!-- Features Section -->
    <section id="features">
        <!-- Flex container -->
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <!-- What's Different -->
            <div class="flex flex-col space-y-12 md:w-1/2 ">
                <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
                    What's our services?
                </h2>
                <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    The system is used by budget, accounting, cashier, supply, and planning.
                    A budget is an estimation of revenue and expenses over a specified future period of time and is utilized by governments, businesses, and individuals.
                    A budget is basically a financial plan for a defined period, normally a year that is known to greatly enhance the success of any financial undertaking.
                    Accounting is the process of recording financial transactions pertaining to a business. 
                    The accounting process includes summarizing, analyzing, and reporting these transactions to oversight agencies, regulators, and tax collection entities.
                    Cashier Supervises accounts and is responsible for the receipt, custody, and disbursement of funds; Signs endorses, and approves the cashing and acceptance of commercial checks, 
                    Distributes to disbursing officers' funds or cash advances for the payment of salaries and other expenses.
                </p>
            </div>

            <!-- Numbered List -->
            <div class="flex flex-col space-y-8 md:w-1/2">
                <!-- List Item -->
             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <!-- Heading -->
                <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div class="flex items-center space-x-2">
                        <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            01
                        </div>
                        <h3 class="text-base font-bold md:mb-4 md:hidden">
                           Budget
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 class="hidden mb-4 text-lg font-bold md:block">
                       Budget
                    </h3>
                    <p class="text-darkGrayishBlue">
                        A budget is an estimation of revenue and expenses over a specified future period of time
                        and is utilized by governments, businesses, and individuals. A budget is basically a
                        financial plan for a defined period, normally a year that is known to greatly enhance 
                        the success of any financial undertaking.
                    </p>
                </div>
             </div>

             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <!-- Heading -->
                <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div class="flex items-center space-x-2">
                        <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            02
                        </div>
                        <h3 class="text-base font-bold md:mb-4 md:hidden">
                           Accounting
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 class="hidden mb-4 text-lg font-bold md:block">
                        Accounting
                    </h3>
                    <p class="text-darkGrayishBlue">
                        Accounting is the process of recording financial transactions pertaining to a business. 
                        The accounting process includes summarizing, analyzing and reporting these transactions
                        to oversight agencies, regulators and tax collection entities.
                    </p>
                </div>
             </div>

             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <!-- Heading -->
                <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div class="flex items-center space-x-2">
                        <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            03
                        </div>
                        <h3 class="text-base font-bold md:mb-4 md:hidden">
                            Cashier
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 class="hidden mb-4 text-lg font-bold md:block">
                        Cashier
                    </h3>
                    <p class="text-darkGrayishBlue">
                        Supervises accounts and is responsible for the receipt, custody and disbursement of funds; Signs, 
                        endorses and approves the cashing and acceptance of commercial checks, 
                        Distributes to disbursing officers funds or cash advances for the payment 
                        of salaries and other expenses.
                    </p>
                </div>
             </div>

             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <!-- Heading -->
                <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div class="flex items-center space-x-2">
                        <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            04
                        </div>
                        <h3 class="text-base font-bold md:mb-4 md:hidden">
                            Planning
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 class="hidden mb-4 text-lg font-bold md:block">
                        Planning
                    </h3>
                    <p class="text-darkGrayishBlue">
                        Planning is the process of thinking about the activities required to achieve a desired goal.It is the 
                        first and foremost activity to achieve desired results. It involves the creation and maintenance
                        of a plan, such as psychological aspects that require conceptual skills.
                    </p>
                </div>
             </div>

             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <!-- Heading -->
                <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div class="flex items-center space-x-2">
                        <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            05
                        </div>
                        <h3 class="text-base font-bold md:mb-4 md:hidden">
                           Supply
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 class="hidden mb-4 text-lg font-bold md:block">
                        Supply
                    </h3>
                    <p class="text-darkGrayishBlue">
                        Supply is a fundamental economic concept that describes the total amount
                         of a specific good or service that is available to consumers. Supply can relate 
                         to the amount available at a specific price or the amount available across a range of prices if displayed on a graph.
                    </p>
                </div>
             </div>
            </div>
        </div>
     </section>

     <!-- Testimonials -->
     <section id="testimonial">
        <!-- Container to heading and testm blocks -->
        <div class="max-w-6-xl px-5 mxx-auto mt-32 text-center">
            <!-- Heading -->
            <h2 class="text-4xl font-bold text-center">
               About Us
            </h2>
            <!-- Testimonials Container -->
            <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
                <!-- Testimonial 1 -->
                <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="img/avatar-rt.png" class="w-16 -mt-14" alt="">
                    <h5 class="text-lg font-bold">Rusel T. Tayong</h5>
                    <p class="text-sm text-darkGrayishBlue">
                        Computer Programmer III
                    </p>
                </div>

                  <!-- Testimonial 2 -->
                  <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                    <img src="img/avatar-ja.png" class="w-16 -mt-14" alt="">
                    <h5 class="text-lg font-bold">John L. Ardiente</h5>
                    <p class="text-sm text-darkGrayishBlue">
                        Computer Programmer I
                    </p>
                </div>

                  <!-- Testimonial 3 -->
                  <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                    <img src="img/avatar-cb.png" class="w-16 -mt-14" alt="">
                    <h5 class="text-lg font-bold">Carlo R. Bolante</h5>
                    <p class="text-sm text-darkGrayishBlue">
                        Computer Programmer I
                    </p>
                </div>

            <!-- Testimonial 4 -->
            <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img src="img/avatar-ap.png" class="w-16 -mt-14" alt="">
                <h5 class="text-lg font-bold">Arnell Silver T. Plaza</h5>
                <p class="text-sm text-darkGrayishBlue">
                    Computer Programmer I
                </p>
                </div>
            </div>
            <!-- Button -->
            <div class="my-16">
                <a 
                href="#"
                class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                 Get Started
                 </a>
            </div>
        </div>
     </section>


     <!-- CTA Section -->
     <section id="cta" class="bg-brightRed">
        <!-- Flex Container -->
        <div class="container flex flex-col items-ceter justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <!-- Heading -->
            <h2 class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                Feel free to message us!
            </h2>
            <h2 class="text-2xl font-bold leading-tight text-center text-white md:text-2xl ">
                doh7.it@gmail.com
            </h2>
     
        </div>
     </section>
     <!-- Footer -->
  
    <footer class="bg-veryDarkBlue">
        <!-- Flex Container -->
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <!-- Logo ang social links container -->
            <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
               <div class="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy;  Department Of Health Central Visayas for CHD 2022
               </div>
                <!-- Logo -->
                <div>
                    <img src="img/doh_logo_white.png" class="h-15" alt="">
                </div>
                <!-- Social Links Container -->
           
            </div>
            <!-- List Container -->
            <div class="flex justify-around space-x-32">
                <div class="flex flex-col space-y-3 text-white">
                    <a href="" class="hover:text-brightRed">Home</a>
                    <a href="" class="hover:text-brightRed">Services</a>
                    <a href="" class="hover:text-brightRed">About Us</a>
                    <a href="" class="hover:text-brightRed">Contact Us</a>
                </div>
                
            </div>
            <!-- Input Container -->
            <div class="flex flex-col justify-between">
                <form action="">
                    <div class="flex space-x-3">
                        <input type="text" class="flex-1 px-4 rounded-full focus:outline-none"
                         placeholder="Message here..."/>
                         <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                            Submit
                         </button>
                    </div>
                </form>
                <div class="hidden text-white md:block">
                    Copyright &copy;  Department Of Health Central Visayas for CHD 2022
                </div>
            </div>
        </div>
    </footer>
</template>