//引用
import { POST, GET, PUT, DEL } from "./Fetch";

// 获取验证码
export  function requestForValidCode() {
  return GET('/api/User/GetValidateNumKey', {})
}
// 登录
export function requestForlogin(params) {
  return POST('/login/mobile', {
    data: {
      ...params
    }
  })
}