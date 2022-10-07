import { defineStore } from "pinia";
import { S } from "@/utils";

// const token =
//   "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5OGU2OTU0NjI0ZTA0NzdmYjMxYzE1OWY5OTRhNGQzYiIsImF1dGgiOiJzdHVkZW50Iiwic3ViIjoiMTI3In0.rBXZsSEu5WC2CAzql_xxh28fDQEcSozmYIbf3JAfxR5ulAeW-UIlfJVNUDiF9yDQMAMDF_aUfrGdVXDcSJdJEA";

const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    value: S.getAuthToken(),
  }),
  getters: {
    // doubleCount: (state) => state.value,
  },
  actions: {
    dispatch(value: string) {
      this.value = value;
      S.setAuthToken(value);
    },
  },
});

export default useTokenStore;
