import http from '../utils/https'
import IndexDB from '../utils/indexDB'

const airbnbDB = new IndexDB('airbnb')

/**
 * http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=6&cityCode=cd
 */
export function fetchRoomList () {
  return http.httpRequestGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=6&cityCode=cd', {})
}

// Mock接口
export async function fetchElephant () {
  await airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
  const result = await airbnbDB.getList('elephant').then(res => {
    return { code: '000000', message: '操作成功', result: res, success: true }
  })
  return result
}
