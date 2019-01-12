import fetch from '../util/fetch'
const api = 'https://asr.itinga.cn/'

// 获取问题分类
export function getQuestionTypeList() {
    return fetch({
        url: `${api}/dialogueCollection/getTopic`,
        method: 'get'
    })
}
// 查看问题列表
export function typeQuestoinList(tid, page, pageSize) {
    return fetch({
        url: `${api}/dialogueCollection/getTopicContent?tid=${tid}&page=${page}&pageSize=${pageSize}`,
        method: 'get'
    })
}
// 获取评论/回复列表
export function getAnswerList(form) {
    console.log(form)
    return fetch({
        url: `${api}/dialogueCollection/getTopicBack`,
        method: 'get',
        params: form
        // header: { 'content-type': 'application/x-www-form-urlencoded' },
    })
}
