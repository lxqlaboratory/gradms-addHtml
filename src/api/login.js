import request from '@/utils/request'

export function Login(jsonForm) {
  return request({
    url: '/api/apiLogin',
    method: 'POST',
    data: jsonForm
  })
}

export function allCourseQueryInit(data) {
  return request({
    url: '/api/course/allCourseQueryDoQuery',
    method: 'POST',
    data
  })
}
// export function initMenu() {
//   return request({
//     url: '/web/initMenu',
//     method: 'POST',
//     data: {}
//   })
// }
