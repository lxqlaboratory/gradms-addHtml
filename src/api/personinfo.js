import request from '@/utils/request'

export function personAuxiliary(data) {
  return request({
    url: '/api/personinfo/personAuxiliary',
    method: 'POST',
    data
  })
}
