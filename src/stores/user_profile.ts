import { defineStore } from "pinia";

export const initUserProfile = defineStore({
    id: 'init_user_profile',
    state: () => ({
        getProfile : {}
    }),
    actions: {
        setProfile(getProfile : {}) {
            this.getProfile = getProfile
        }
    }
})