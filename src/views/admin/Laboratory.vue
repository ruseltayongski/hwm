<script setup lang="ts">
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
    import { retrieveAllLabResults } from "@/api/laboratory"

    const tokenStore = useTokenStore();
    console.log(tokenStore.value)

    const get_all_active_user = ref([])
    const active_total_page = ref(0)

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

    const handleSearchEmployee = (get_search_keyword : String) => {
        _getAllActiveUser({ search_keyword : get_search_keyword })
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
                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
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
                              <p class="mb-0 leading-tight text-xs text-slate-400">alexa@creative-tim.com</p>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p class="mb-0 font-semibold leading-tight text-xs">Programator</p>
                          <p class="mb-0 leading-tight text-xs text-slate-400">Developer</p>
                        </td>
                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                          <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                        </td>
                        <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="font-semibold leading-tight text-xs text-slate-400">11/01/19</span>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <a href="javascript:;" class="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
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
    
</template>

<style scoped>
    /* Fonts and icons */
    @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';
    /* Font Awesome Icons */
    @import 'https://kit.fontawesome.com/42d5adcbca.js';
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