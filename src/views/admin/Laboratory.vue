<script setup lang="ts">
    import LabResultService from "@/api/LabResultDataService";
    /* Popper */
    import 'https://unpkg.com/@popperjs/core@2';
    // plugin for charts
    import '@/style/assets/js/plugins/chartjs.min.js'
    // plugin for scrollbar
    import '@/style/assets/js/plugins/perfect-scrollbar.min.js'
    // github button
    import 'https://buttons.github.io/buttons.js'
    // main script file
    import '@/style/assets/js/soft-ui-dashboard-tailwind.js'
    
    //component
    import SideBar from '@/layout/admin/SideBar.vue'
    import Nav from '@/layout/admin/Nav.vue'
    import Footer from '@/layout/admin/Footer.vue'

    import { ref, onMounted } from "vue"
    import { useTokenStore } from "@/stores"
    import { getAllActiveUser } from "@/api/auth"
    import { retrieveAllLabResults,createLaboratoryResult } from "@/api/laboratory"
    
    import { notify } from "notiwind"
    
    import moment from "moment"

    const tokenStore = useTokenStore();
    console.log(tokenStore.value)

    const get_all_active_user = ref([])
    const active_total_page = ref(0)
    const showModal = ref(false)
    const systole = ref("")
    const diastole = ref("")
    const rb_sugar = ref("")
    const other_test_result = ref("")
    const other_test = ref("")
    const userid_save = ref("")

    const props = defineProps({
        search_keyword: {
          type : String,
          default: ""
        }  
    });

    onMounted(() => {
      _getAllActiveUser({})
      _getAllLabResult()
    })

    const _getAllLabResult = async () => {
        await retrieveAllLabResults() 
    }

    const _getAllActiveUser = async (params: {}) => {
      const response = await getAllActiveUser(params)
      active_total_page.value = response.total
      get_all_active_user.value = response.data.map((item: any) => {
        let pis_pic_path = import.meta.env.VITE_API_BASE_URL_PIS_PIC
        let pis_pic_default = item.sex === 'Female' ? 'female1.png' : 'male1.png'
        pis_pic_default = pis_pic_path + '/assets_ace/images/avatars/' + pis_pic_default
        return {
          ...item,
          picture : item.picture ? pis_pic_path + '/upload_picture/picture/' + item.picture : pis_pic_default
        }
      })
    }

    const onClickHandler = (page: number) => {
        const params = {
          page : page
        }
        _getAllActiveUser(params)
    };

    const handleAddLaboratory = (userid:"") => {
        userid_save.value = userid
        showModal.value = true
    }

    const handleSearchEmployee = (get_search_keyword : String) => {
        _getAllActiveUser({ search_keyword : get_search_keyword })
    }

    const handleCloseModal = () => {
      showModal.value = false
    }

    const handleSaveLaboratory = async () => {
      notify({
        group: "foo",
        title: "Success",
        text: "Laboratory was successfully saved!"
      }, 1000)
      const params = {
        systole : systole.value,
        diastole : diastole.value,
        rb_sugar : rb_sugar.value,
        other_test_result : other_test_result.value,
        other_test : other_test.value,
        userId : userid_save.value,
        created_at : moment().format('MM-DD-YYYY HH:mm:ss'),
        updated_at : moment().format('MM-DD-YYYY HH:mm:ss')
      }
      await createLaboratoryResult(params)

      showModal.value = false
    }
</script>
<template>
    <SideBar></SideBar>

    <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
  
      <Nav @searchEmployee="handleSearchEmployee"></Nav>

      <div class="w-full px-6 py-6 mx-auto">
        <!-- table 1 -->

        <div class="flex flex-wrap -mx-3">
          <div class="flex-none w-full max-w-full px-3">
            <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6>Employee List</h6>
              </div>
              <div class="flex-auto px-0 pt-0 pb-2">
                <div class="p-0 overflow-x-auto">
                  <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead class="align-bottom">
                      <tr>
                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Name</th>
                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Office</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Last Laboratory</th>
                        <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      </tr>
                    </thead>
                    <tbody v-for="user in get_all_active_user" :key="user.id">
                      <tr>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div class="flex px-2 py-1">
                            <div>
                              <img :src="user.picture" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user2" />
                            </div>
                            <div class="flex flex-col justify-center">
                            <!--   <h6 class="mb-0 leading-normal text-sm">Alexa Liras</h6> -->
                              <h6 class="mb-0 leading-normal text-sm">{{ user.fname + " " + user.mname + " " + user.lname }}</h6>
                              <p class="mb-0 leading-tight text-xs text-slate-400">{{ user.designation }}</p>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p class="mb-0 font-semibold leading-tight text-xs">{{ user.division }}</p>
                          <p class="mb-0 leading-tight text-xs text-slate-400">{{ user.section }}</p>
                        </td>
                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                          <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">NEGATIVE</span>
                        </td>
                        <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="font-semibold leading-tight text-xs text-slate-400">11/01/19</span>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <button class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75" @click="handleAddLaboratory(user.userid)">Add Laboratory</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="pagination-padding">
                    <vue-awesome-paginate
                      :total-items="active_total_page"
                      :current-page="1"
                      :items-per-page="15"
                      :max-pages-shown="10"
                      :on-click="onClickHandler"
                      prev-button-content="<<<"
                      next-button-content=">>>"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer></Footer>

      </div>
    </main>
    
    <div>
      <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
        Open large modal
      </button>
      <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 class="text-3xl font-semibold">
                Add Laboratory
              </h3>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap mb-6 bg-green-200 pt-2">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Blood Pressure
                  </label>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Systole
                    </label>
                    <input v-model="systole" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" min="50" max="200" placeholder="Systole">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Diastole
                    </label>
                    <input v-model="diastole" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" min="50" max="200" type="number" placeholder="Diastole">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Random Blood Sugar
                    </label>
                    <input v-model="rb_sugar" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Random Blood Sugar">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                </div>
                <div class="flex flex-wrap mb-6 bg-green-200 pt-2">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Other Test
                  </label>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Laboratory Test
                    </label>
                    <input v-model="other_test_result" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="other_test_result">
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      {{ other_test_result }} Result
                    </label>
                    <input v-model="other_test" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="other_test">
                  </div>
                </div>
              </form>
            </div>
            <!--footer-->
            <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75 mr-4" type="button" @click="handleCloseModal">
                Close
              </button>
              <button class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75" type="button" @click="handleSaveLaboratory">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
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