<template>
   
    <div class="container-fluid" ref ="">
    <!-- <img src="../images/doh_header.jpg" alt="doh logo" style = "width: 100%; padding-bottom:2px"> -->
      <table class="table-striped"  style = "width:100%;align-self:center" id="table">
        <thead style = "color:white; background-color: #006442">

          <tr style = "border: 1px solid black;">
              <th rowspan="2" style="vertical-align:middle;">Date Tested</th>
              <th colspan="2">Blood Pressure</th>
              <th rowspan="2" style = "vertical-align: middle;">Random Blood Sugar</th>
              <th colspan="2">Other Test</th>
              <th rowspan="2" colspan="2" style="vertical-align:middle;">Action</th>

          </tr>

          <tr style = "border: 1px solid black;">
              <th>Systole</th>
              <th>Diastole</th>
              <th>Laboratory Test</th>
              <th>Result</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="labresult in labresults" v-bind:key="labresult.id">

            <td>{{ labresult.date }}</td>
            <td>{{ labresult.systole }} mm Hg</td>
            <td>{{ labresult.diastole }} mm Hg</td>
            <td>{{ labresult.rb_sugar }} mg/dL</td>
            <td>{{ labresult.other_test }}</td>
            <td>{{ labresult.other_test_result }}</td>
            <td>
              <button class="btn btn-secondary" v-on:click="updateLabResult(labresult.id)">
                Update
              </button>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteLabResult(labresult.id)">
                Delete
              </button>

            </td>
          </tr>
          <tr ><td style = "border: 1px solid white">
              <button class="btn btn-success" v-on:click="addLabResult()" id="addbutton">Add New Lab Result</button>
          </td></tr>
        </tbody>
      </table>
 
    </div>

</template>

  <script>
    import LabResultDataService from '@/api/LabResultDataService'
    export default {

    name: "LabResults",
    data() {
        return {
            labresults: []
        };
    },
    methods: {
        refreshLabResults() {
            LabResultDataService.retrieveAllLabResults().then((res) => {
                this.labresults = res.data;
            });
        },
        addLabResult() {
            this.$router.push(`/labresult/-1`);
        },
        updateLabResult(id) {
            this.$router.push(`/labresult/${id}`);
        },
        deleteLabResult(id) {
            LabResultDataService.deleteLabResult(id).then(() => {
                this.refreshLabResults();
            });
        },
        },
        created() {
            this.refreshLabResults();
        },
  
    };

</script>

    <style>
    
        td,th{border:1px solid black;padding: 5px;}
        th,tr{text-align: center;}
    </style>







