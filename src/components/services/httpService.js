import axios from "axios";
import config from "../../config";

axios.defaults.headers.get["Authorization"] = `Client-ID ${config.clientId}`;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
