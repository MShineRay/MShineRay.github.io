/**
 * axios 二次封装
 */
import axios from 'axios'
import feConfig from './feConfig'

axios.defaults.withCredentials = true
axios.defaults.timeout = feConfig['timeout']

function localMockSet(response) {
  if (feConfig['environment'] === 'nodeT') {
    let url =
      '/fe-local-setpost/?path=' +
      response.config.url.split('?')[0].replace(/:/g, '') +
      '&feLog=not-log'
    let content = JSON.stringify(response.data) /**/
    let request = new window.XMLHttpRequest()
    request.open('POST', url, true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.onreadystatechange = function () {}
    request.send(content)
  }
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    localMockSet(response)
    try {
      response.request.axiosFELog = {
        config: response.config,
        data: response.data,
        headers: response.headers,
      }
    } catch (error) {
      console.log(error)
    }
    return response
  },
  error => {
    try {
      error.response.request.axiosFELog = {
        config: error.response.config,
        data: error.response.data,
        headers: error.response.headers,
      }
    } catch (e) {
      if (error && error.config) {
        typeof window.feLog === 'function' && window.feLog('ajaxError', error.config)
      }
    }
    return Promise.reject(error)
  }
)

let locationOnLineCacheTime = new Date().getTime()
export default {
  post(url, ...params) {
    if (new Date().getTime() - locationOnLineCacheTime > 5000) {
      if (window.navigator.onLine) {
        locationOnLineCacheTime = new Date().getTime()
      } else {
        // axiosFun.showError('网络异常，请重试', 'error')
        return Promise.reject(new Error('网络异常，请重试'))
      }
    }

    let closeLoading = false
    if (Array.isArray(params) && params.length === 2) {
      closeLoading = params[1].closeLoading
    }
    if (!closeLoading) {
      // Loading.startLoading()
    }

    return new Promise((resolve, reject) => {
      axios
        .post(url, ...params)
        .then(response => {
          // Loading.closeLoading()
          resolve(response.data)
        })
        .catch(error => {
          // Loading.closeLoading()
          // axiosFun.errorHandle(error, url)
          reject(error)
        })
    })
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      let _params = ''
      if (!!params && !!params.params) {
        _params = params
      } else {
        _params = { params }
      }
      axios
        .get(url, _params)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          // axiosFun.errorHandle(error, url)
          reject(error)
        })
    })
  },
}
