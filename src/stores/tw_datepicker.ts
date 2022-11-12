import { defineStore } from "pinia";

export const initTwDatepicker = defineStore({
    id: 'int_tw_datepicker',
    state: () => ({
        count: 0
    }),
    actions: {
        increaseCount() {
            this.count++
        }
    }
})