// import axios from "axios";
// axios.defaults.baseURL = import.meta.env.LABRESULT_API_URL;

// class LabResultDataService{
//     retrieveAllLabResults() {
//         return axios.get("/labresults");
//     }
//     retrieveLabResult(id:string) {
//         return axios.get(`/labresults/${id}`);
//     }
//     deleteLabResult(id:string) {
//         if (confirm("Do you really want to delete this record?")) {
//             return axios.delete(`/labresults/${id}`);
//         }
       
//     }
//     updateLabResult(id:string, labresult:any) {
//         if (confirm("Do you want to save changes?")) {
//             return axios.put(`/labresults/${id}`,labresult)
//         }
        
//     }
//     createLabResult(labresult:any) {
//         return axios.post(`/labresults`,labresult);
//     }

// }
// export default new LabResultDataService();