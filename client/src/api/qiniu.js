import http from "../utils/http";
import { api } from "../config/api";

//获取七牛上传tokne
export let getUploadToken = () => {
  return http({
    url: `${api.API_URL}/api/qiniu/getUploadToken`,
    method: "get",
  });
};