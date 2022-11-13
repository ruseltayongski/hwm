<script setup lang="ts">
    import { onMounted } from "vue"
    //import { tailwindDatepicker } from "@/style/assets/js/tailwind-datepicker"
    //import { initTwDatepicker } from "@/stores/tw_datepicker"

    // const props = defineProps({
    //     search_keyword: {
    //       type : String,
    //       default: ""
    //     }  
    // });

    onMounted(() => {
      //tailwindDatepicker()
      // import('tw-elements').then(m => {
         
      // })
        // initTwDatepicker().increaseCount()
        // if(initTwDatepicker().count === 1) {
        //     console.log(initTwDatepicker().count)
        //     import('tw-elements').then(m => {
        //         // use my library here or call a method that uses it
        //     })
        // } else {
        //     console.log("false")
        // }
    })
</script>
<template>
    <h1>about</h1>
    <div class="flex items-center justify-center">
      <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
        <input type="text"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Select a date" />
        <label for="floatingInput" class="text-gray-700">Select a date</label>
        <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
          <i class="fas fa-calendar datepicker-toggle-icon"></i>
        </button>
      </div>
    </div>
    
</template>