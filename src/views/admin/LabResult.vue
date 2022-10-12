<template>
   <div>
   
     <h3>Add Lab Test Result</h3>
     <div class="container">
       <form @submit="validateAndSubmit">
         <div v-if="errors.length">
           <div class="alert alert-danger" v-bind:key="index" v-for="(error, index) in errors">
             {{ error }}
           </div>
         </div>
         <fieldset class="form-group">
           Date
           <input type="date" class="form-control" v-model="date" required />
         </fieldset>
         <fieldset class="form-group">
           Systole
           <input type="number" class="form-control" v-model="systole" min=60 max=200 required/>
         </fieldset>
         <fieldset class="form-group">
          Diastole
           <input type="number" class="form-control" v-model="diastole" min=60 max=200 required/>
         </fieldset>
 
          <fieldset class="form-group">
              RB Sugar
               <input type="text" class="form-control" v-model="rb_sugar"/>
         </fieldset>
         <fieldset class="form-group">
           Other Test
           <input type="text" class="form-control" v-model="other_test" />
         </fieldset>
         <fieldset class="form-group">
          Other Test Result
           <input type="text" class="form-control" v-model="other_test_result" />
         </fieldset>
 
         <button class="btn btn-success" type="submit">Save</button>
         <div class="btn btn-primary lg" style="float:right;"><a href="http://localhost:3005/labresults"
           style="color:white">Get Back</a></div>
       </form>
     </div>
   </div>
 </template>
 <script>
 import LabResultService from "../services/LabResultService";
 
 export default {
   name: "LabResult",
   data() {
     return {
      date: "",
      systole: "",
      diastole: "",
      rb_sugar: "",
      other_test: "",
      other_test_result: "",
      errors: [],
     };
   },
   computed: {
     id() {
       return this.$route.params.id;
     },
   },
   methods: {
     refreshLabResultDetails() {
       LabResultService.retrieveLabResult(this.id).then((res) => {
         this.date = res.data.date;
         this.systole = res.data.systole;
         this.diastole = res.data.diastole;
          this.rb_sugar = res.data.rb_sugar;
         this.other_test = res.data.other_test;
         this.other_test_result = res.data.other_test_result;
       });
     },
     validateAndSubmit(e) {
       e.preventDefault();
       this.errors = [];
       if (!this.date) {
         this.errors.push("Enter valid date values");
       } else if (this.date.length < 1) {
         this.errors.push("Enter atleast 1 characters in Date");
       }
       if (!this.systole) {
         this.errors.push("Enter valid systole values");
       } else if (this.systole.length < 2) {
         this.errors.push("Enter atleast 2 characters in systole");
       }
 
        else if (this.diastole.length < 2) {
               this.errors.push("Enter atleast 2 characters in diastole");
             }
 
              else if (this.rb_sugar.length < 2) {
                           this.errors.push("Enter atleast 2 characters in rb_sugar");
                         }
              else if (this.other_test.length < 2) {
                           this.errors.push("Enter atleast 2 characters in other_test");
                         }
              else if (this.other_test_result.length < 2) {
                           this.errors.push("Enter atleast 2 characters in other_test_result");
                         }
 
       if (this.errors.length === 0) {
         if (this.id == -1) {
           LabResultService.createLabResult({
             date: this.date,
             systole: this.systole,
             diastole: this.diastole,
             rb_sugar: this.rb_sugar,
             other_test: this.other_test,
             other_test_result: this.other_test_result
           }).then(() => {
             this.$router.push("/labresults");
           });
         } else {
           LabResultService.updateLabResult(this.id, {
               id: this.id,
               date: this.date,
               systole: this.systole,
               diastole: this.diastole,
               rb_sugar: this.rb_sugar,
               other_test: this.other_test,
               other_test_result: this.other_test_result
           }).then(() => {
             this.$router.push("/labresults");
           });
         }
       }
     },
   },
   created() {
     this.refreshLabResultDetails();
   },
 };
 </script>
 