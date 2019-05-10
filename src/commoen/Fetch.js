import _ from 'lodash'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import {DeviceEventEmitter} from 'react-native'
// interface ajaxOptions {
//   baseURL?
//   version?
//   headers?: object
//   method?
//   data?: object
// }

export const ajax = (url, options) => {
  let axiosOptions = {}
  axiosOptions.baseURL = 'http://172.20.10.9:80'
  axiosOptions.headers = {
//无请求头可忽略
    Authorization:'BasicAuth ' + '',
    ...options.headers
  }
//请求方式
  axiosOptions.method = options.method || 'get'
//超时时间
  axiosOptions.timeout = 30 * 1000

  if (options.data && _.includes(['get', 'delete'], options.method))
    axiosOptions.params = options.data
  else
    axiosOptions.data = options.data

  return new Promise((resolve, reject) => {
    axios(url, axiosOptions)
      .then(async (res) => {

        if(res.data.code === 0){
          resolve(res.data)
          return
          // @ts-ignore
        } else if (res.data.Status === 1) {
          resolve(res.data)
          return
        }

       alert(res.data.error)
        reject({
          ...res,
          handled:false
        })
      })
      .catch(async (err) => {
        console.warn(err)
        console.log(url,axiosOptions)
        if (!err.response) {
          alert('服务繁忙，稍候请重试')
          reject({ ...err, handled: true })
          return
        }

        if (err.response.status == 401) {
          reject({ handled: true })
          alert('登录状态失效，请重新登录')

          // DeviceEventEmitter.emit('LogoutEvent',null  )
        }
        else if (err.response.status == 400) {
          reject({
            data: err.response.data,
            message: _.get(err.response.data, 'msg'),
            handled: false
          })
        }
        else {
          reject({ ...err, handled: true })
          alert('服务繁忙，稍候请重试')
        }
      })
  })
}

export const GET = (url, options) => ajax(url, {
  ...options,
  method: 'get'
})
export const PUT = (url, options) => ajax(url, {
  ...options,
  method: 'put'
})
export const POST = (url, options) => ajax(url, {
  ...options,
  method: 'post'
})
export const DEL = (url, options) => ajax(url, {
  ...options,
  method: 'delete'
})
