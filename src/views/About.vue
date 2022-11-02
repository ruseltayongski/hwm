<script setup lang="ts">
    //import LabResultService from "@/api/LabResultDataService";
    import LabResultService from "@/api/laboratory_req";
    LabResultService.post("/labresults/",{
        "userId": "0454",
        "systole": 9999,
        "diastole": 9999,
        "rb_sugar": "ALEX AGAWN",
        "other_test": "ALEX AGAWN",
        "other_test_result": "WBC_result",
        "created": "10-28-2022",
        "updated": "10-28-2022"
    }
    ).then(() => {
    console.log("success")
    });
</script>
<template>
    <h1 class="home">This is About! ahahaha</h1>
</template>