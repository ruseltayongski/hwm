import req from "./laboratory_req";

export function retrieveAllLabResults(params: {} = {}) {
  return req.get("/labresults", params);
}

export function employeeLaborartoryResult(params: {} = {}) {
  return req.get(`/labresults/lab/${params.userid}`, params);
}

export function createLaboratoryResult(params: {} = {}) {
  return req.post("/labresults",params);
}
