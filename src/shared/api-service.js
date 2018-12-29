import HTTP from "superagent";
const apiUrl = "/api/";

class ApiService {
  request(url) {
    return HTTP.get(`${apiUrl}${url}`);
  }

  post(url, data) {
    return HTTP.post(`${apiUrl}${url}`).send(data);
  }
}

export default ApiService;
