import request from '@/utils/request'

export function personAuxiliaryMaintainInit(data) {
  return request({
    url: '/api/personinfo/personAuxiliaryMaintainInit',
    method: 'POST',
    data
  })
}

export function personAuxiliaryMaintain(data) {
  return request({
    url: '/api/personinfo/personAuxiliaryMaintain',
    method: 'POST',
    data
  })
}
