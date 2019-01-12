import fetch from '../util/fetch'

// 本地歌单资源
export function getList(page, pageSize) {
    return fetch({
        url: `/api/hiting/sheetlist?page=${page}&pageSize=${pageSize}`
    })
}
// 获取本地歌手分类
export function getDevTypes () {
    return fetch({
        url: `/singers/getSingerSort`,
        method: 'get'
    })
}