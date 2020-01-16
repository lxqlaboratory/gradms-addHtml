import request from '@/utils/request'

//教师课程任务
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
//监考人员库
export function newCultivateExamAffairPersonManageInit(data) {
  return request({
    url: '/api/coursenew/newCultivateExamAffairPersonManageInit',
    method: 'POST',
    data
  })
}

export function newCultivateExamAffairPersonDelete(data) {
  return request({
    url: '/api/coursenew/newCultivateExamAffairPersonDelete',
    method: 'POST',
    data
  })
}

export function newCultivateExamAffairPersonAdd(data) {
  return request({
    url: '/api/coursenew/newCultivateExamAffairPersonAdd',
    method: 'POST',
    data
  })
}


export function getPersonInfoListByPerNumName(data) {
  return request({
    url: '/api/personinfo/getPersonInfoListByPerNumName',
    method: 'POST',
    data
  })
}

export function getPersonInfoListByPerNumNameQuery(data) {
  return request({
    url: '/api/personinfo/getPersonInfoListByPerNumName',
    method: 'POST',
    data
  })
}

//考试安排管理
export function newCultivateExamexamInvigilaterArrangeInit(data) {
  return request({
    url: '/api/coursenew/newCultivateExamexamInvigilaterArrangeInit',
    method: 'POST',
    data
  })
}

export function newCultivateExamexamInvigilaterArrangeSubmit(data) {
  return request({
    url: '/api/coursenew/newCultivateExamexamInvigilaterArrangeSubmit',
    method: 'POST',
    data
  })
}
