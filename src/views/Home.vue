<script setup lang="ts">
    import Nav from '../layout/Nav.vue'
    import { ref, onMounted } from "vue"
    import { useRoute, useRouter } from "vue-router";
    import { S } from "@/utils";
    import { useTokenStore } from "@/stores";
    import { getUserProfile } from "@/api/auth";

    const router = useRouter();
    const route = useRoute();
    const tokenStore = useTokenStore();

    const showState = ref(false)

    onMounted(() => {
        _getUserProfile()
    })

    const _getUserProfile = async () => {

        const { PostPreferences } = await getUserProfile() 

        // const { postPreferencesVo } = PostPreferences

        // userStore.dispatch({
        //     jobWantedState: postPreferencesVo.jobWantedState
        // })
    }

    // 退出
    const handleClickSignOut = () => {
        // S.delete('authToken')
        S.deleteAll(true);
        tokenStore.dispatch("");

        router.push({
            path: "/login",
        });
    };
</script>
<template>
    <Nav></Nav>
    
    <h1>This is Home!!!</h1>
</template>