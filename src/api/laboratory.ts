import req from "./laboratory_req";

export function retrieveAllLabResults(params: {} = {}) {
  return req.get("/labresults", params);
}




