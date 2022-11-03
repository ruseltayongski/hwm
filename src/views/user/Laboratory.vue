<script setup lang="ts">
    import '@/style/assets/js/plugins/perfect-scrollbar.min.js'
    // github button
    import 'https://buttons.github.io/buttons.js'
    // main script file
    import { softUiDashBoardTaildwind } from "@/style/assets/js/soft_ui_dashboard"

    //component
    import SideBar from '@/layout/admin/SideBar.vue'
    import Nav from '@/layout/admin/Nav.vue'
    import Footer from '@/layout/admin/Footer.vue'

    import { onMounted } from "vue"

    onMounted(() => {
      softUiDashBoardTaildwind()
    })
</script>
<template>
    <SideBar></SideBar>

    <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
  
      <Nav></Nav>

      <div class="w-full px-6 py-6 mx-auto">

        <color:div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div class="flex flex-wrap -mx-3">
              <div class="flex items-center flex-none w-1/2 max-w-full px-3">
                <h6 class="mb-0">Laboratory Result</h6>
              </div>
            </div>
          </div>
          <div class="flex-auto p-4 pb-0">
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                <div class="flex flex-col">
                  <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">March, 01, 2020</h6>
                  <span class="leading-tight text-xs">#MS-415646</span>
                </div>
                <div class="flex items-center leading-normal text-sm">
                  $180
                  <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg" aria-hidden="true"></i> PDF</button>
                </div>
              </li>
              <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                <div class="flex flex-col">
                  <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">February, 10, 2021</h6>
                  <span class="leading-tight text-xs">#RV-126749</span>
                </div>
                <div class="flex items-center leading-normal text-sm">
                  $250
                  <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg" aria-hidden="true"></i> PDF</button>
                </div>
              </li>
              <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                <div class="flex flex-col">
                  <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">April, 05, 2020</h6>
                  <span class="leading-tight text-xs">#FB-212562</span>
                </div>
                <div class="flex items-center leading-normal text-sm">
                  $560
                  <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg" aria-hidden="true"></i> PDF</button>
                </div>
              </li>
              <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                <div class="flex flex-col">
                  <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">June, 25, 2019</h6>
                  <span class="leading-tight text-xs">#QW-103578</span>
                </div>
                <div class="flex items-center leading-normal text-sm">
                  $120
                  <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg" aria-hidden="true"></i> PDF</button>
                </div>
              </li>
              <li class="relative flex justify-between px-4 py-2 pl-0 bg-white border-0 rounded-b-inherit rounded-xl text-inherit">
                <div class="flex flex-col">
                  <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">March, 01, 2019</h6>
                  <span class="leading-tight text-xs">#AR-803481</span>
                </div>
                <div class="flex items-center leading-normal text-sm">
                  $300
                  <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg" aria-hidden="true"></i> PDF</button>
                </div>
              </li>
            </ul>
          </div>
        </color:div>

      </div>

    </main>
    
</template>

<style scoped>
    /* Fonts and icons */
    @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';
    /* Nucleo Icons */
    @import '@/style/assets/css/nucleo-icons.css';
    @import '@/style/assets/css/nucleo-svg.css';
    /* Main Styling */
    @import '@/style/assets/css/soft-ui-dashboard-tailwind.css';
</style>

<style lang="scss">
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
  .pagination-padding {
    padding: 20px;
  }
</style>