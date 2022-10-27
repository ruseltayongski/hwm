<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { userLogin } from '@/api/auth'
  import { useTokenStore } from "@/stores"
  import { useRouter } from "vue-router"

  const tokenStore = useTokenStore()
  const router = useRouter();

  const ruleForm = reactive({
    username : "",
    password: "",
  })

  /**
  * 登录
  * */ 
  const handleClickLogin = async (e) => {
    e.preventDefault();
    if (!ruleForm.username && !ruleForm.password) {
      alert("Please enter your username and password!")
      return;
    } else if(!ruleForm.username) {
      alert("Please enter your username")
      return;
    } else if(!ruleForm.password) {
      alert("Please enter your password")
      return;
    }
    try {
      const response = await userLogin({
          username: ruleForm.username,
          password: ruleForm.password
      })
      /**
      * invalid credential
      * */
      if(response.message) {
          alert(response.message)
          return;
      }

      let token = response.access_token
      console.log("successfully login!")
      console.log(token)
      tokenStore.dispatch(token)

      router.push({
        path: "/admin",
      });
    } catch (err) {
      console.log(err)
    }
  }
</script>
<template>
  <section class="h-full  md:h-screen items-center ">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-">
      <div class="md:w-1/10">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-1/10 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="../assets/vue.svg"
                  />
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1 ">DOH HWM</h4>
                </div>
                <form v-on:submit="handleClickLogin">
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="username"
                      placeholder="Username"
                      v-model="ruleForm.username"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      placeholder="Password"
                      v-model="ruleForm.password"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="inline-block px-6 py-2.5 border-2 border-green-600 text-green-600 font-medium text-sm
                        leading-tight uppercase rounded shadow-md hover:bg-green-100 hover:shadow-lg  focus:outline-none focus:ring-0  transition duration-150 ease-in-out w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      SIGN IN
                    </button>
                    <a class="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>