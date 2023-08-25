import http from "../utils/http.js";
import API from "../config/index.js";

//获取七牛上传tokne
export let getUploadToken = () => {
  return http({
    url: `${API.BASE_API}/api/qiniu/getUploadToken`,
    method: "get",
  });
};