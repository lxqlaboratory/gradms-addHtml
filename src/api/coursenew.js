import request from '@/utils/request'

export function teacherCourseTaskQueryInit(data) {
  return request({
    url: '/api/coursenew/teacherCourseTaskQuery',
    method: 'POST',
    data
  })
}
export function teacherCourseTaskQuerySelect(data) {
  return request({
    url: '/api/coursenew/teacherCourseTaskQuery',
    method: 'POST',
    data
  })
}
