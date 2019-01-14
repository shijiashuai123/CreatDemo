import React from 'react'
import * as review from '../api/review'
import { Table, Button, Dialog, Form, Input, Message, Pagination} from 'element-react';
import './index.css'
const img = require('../img/loading.gif')

class AjaxTest extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '测试',
            typeList: [],
            eidtTypeObj: {},
            ediTypeListDialog: false,
            columns: [
                {label: "id", prop: "id", width: 100, align: 'center'},
                {label: "名字", prop: "title", align: 'center'},
                {label: "操作", align: 'center', width: 200, render:(row, column, index) => {
                    return (
                        <span>
                            <Button onClick={this.checkQList.bind(this, row.id, 'first')} size="small">查看</Button>
                            <Button onClick={this.editQType.bind(this, row)} plain={true} type="info" size="small">编辑</Button>
                            <Button type="danger" size="small">删除</Button>
                        </span>
                    )
                }}
            ],
            page: 1,
            pageSize: 20,
            total: null,
            checkQChrLoadState: false,
            qList: [],
            Qcolumns: [
                {label: "id", prop: 'id', width: 100, align: 'center'},
                {label: "问题", prop: 'content', width: 260, align: 'center'},
                {label: "操作", align: 'center', render: (row, column, index) => {
                    return (
                        <span>
                            <Button type="info" size="small" onClick={this.checkAnswerBtn.bind(this, row)}>查看回复</Button>
                            <Button type="danger" size="small">删除</Button>
                        </span>
                    )
                }}
            ],
            checkAnswerDialog: false,
            checkAnswerList: [],
            checkAnswerObj: {
                tid: null,
                pid: null,
                page: 1,
                pageSize: 20,
                type: 'Q'
            },
            Acolumns: [
                {label: "id", prop: 'id', width: 100, align: 'center'},
                {label: "回复", prop: 'content',  align: 'center'},
                {label: "操作", align: 'center', width: 280, render: (row, column, index) => {
                    return (
                        <span>
                            <Button type="info" size="small">查看回复</Button>
                            <Button type="danger" size="small">删除</Button>
                        </span>
                    )
                }}
            ]
        }
    }
    // 渲染前调用
    componentWillMount() {
        this.getQTypeList()
    }
    // 在组件接收到新的props或者state但还没有render时被调用 在初始化时不会被调用
    componentWillUpdate(nextProps, nextState) {

    }
    // 获取问题分类
    getQTypeList() {
        review.getQuestionTypeList().then( res => {
            console.log(res)
            this.setState({
                typeList: res.data.lists
            })
        })
    }
    // 编辑问题分类
    editQType(item) {
        this.setState({
            eidtTypeObj: item,
            ediTypeListDialog: true
        })
    }
    // 监听input的值
    handleChangeTitle(val){
        console.log(val)
        this.setState({
            eidtTypeObj: Object.assign({}, this.state.eidtTypeObj, { title: val }) // 改变对象中的值
        })
    }
    // 确定
    confirmBtn() {
        console.log('提交了')
        console.log(this.state.eidtTypeObj)
        this.setState({
            ediTypeListDialog: false
        })
    }
    // 查看问题列表
    checkQList(id, num, event) {
        console.log(id)
        if (num === 'first') {
            this.setState({
                page: 1
            })
        }
        this.setState({
            checkQChrLoadState: true,
            checkAnswerObj: Object.assign({}, this.state.checkAnswerObj, { tid: id }) // 改变对象中的值
        }, () => {
            review.typeQuestoinList(id, this.state.page, this.state.pageSize).then( res => {
                console.log(res)
                if (res.data.ret === 0) {
                    this.setState({
                        qList: res.data.lists,
                        total: res.data.total,
                        checkQChrLoadState: false,
                    })
                } else {
                    Message({
                        message: '请求失败',
                        type: 'error',
                        duration: 1 * 1000
                    })
                }
            })
        })
    }
    // 问题列表分页
    changeQListPageFun(val) {
        console.log(val)
        this.setState({
           page: val
        }, () => {
            this.checkQList(this.state.checkAnswerObj.tid)
        })
    }
    // 获取焦点
    getInputFocus() {
        this.refs.titleDom.focus()
        console.log(this.refs.titleDom)
        console.log(this.refs.titleDom.props.value)
    }
    // 查看回复
    checkAnswerBtn(item) {
        console.log(item.id)
        this.setState({
            checkAnswerObj: Object.assign({}, this.state.checkAnswerObj, { pid: item.id }) // 改变对象中的值
        }, () => {
            console.log(this.state.checkAnswerObj)
            review.getAnswerList(this.state.checkAnswerObj).then( res => {
                console.log(res)
                if (res.data.ret === 0) {
                    this.setState({
                        checkAnswerList: res.data.lists,
                        checkAnswerDialog: true,
                    })
                }
            })
        })
    }
    // 第一个渲染后调用
    componentDidMount() {
    }
    render() {
        var showQ = null
        !this.state.qList.length && this.state.page === 1 ? showQ = <div style={{margin: '30px auto'}}>
            {this.state.checkQChrLoadState ? <img style={{width: '40px', height: '40px'}} src={img} alt="" />: ''}
            {this.state.checkAnswerObj.tid ? <div>暂无数据</div> : ''}
        </div> : showQ = <div className="Type_item"><Table
            style={{width: '100%', align: 'center'}}
            columns={this.state.Qcolumns}
            data={this.state.qList}
            border={true}
        />
        <Pagination style={{float: 'right', marginTop: '20px'}} layout="prev, pager, next" total={50} onCurrentChange={this.changeQListPageFun.bind(this)} currentPage={this.state.page}/>
        </div>
        return (
            <div className="Type_box">
                {/*类型列表*/}
                <Table
                    style={{width: '31%', align: 'center'}}
                    columns={this.state.columns}
                    data={this.state.typeList}
                    border={true}
                />
                {/*编辑类型*/}
                <Dialog
                    title="编辑"
                    style={{width: '30%', textAlign: 'left'}}
                    size="tiny"
                    visible={ this.state.ediTypeListDialog }
                    onCancel={ () => this.setState({ ediTypeListDialog: false }) }
                    lockScroll={ true }
                >
                    <Dialog.Body>
                        <Form model={this.state.eidtTypeObj} labelWidth="80">
                            <Form.Item label="名字：">
                                <Input ref="titleDom" value={this.state.eidtTypeObj.title} onChange={this.handleChangeTitle.bind(this)}></Input>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={ () => this.setState({ ediTypeListDialog: false }) }>取消</Button>
                        <Button type="primary" onClick={this.confirmBtn.bind(this)}>确定</Button>
                        <Button type="primary" onClick={this.getInputFocus.bind(this)}>获取焦点</Button>
                    </Dialog.Footer>
                </Dialog>
                {/*问题列表*/}
                {showQ}
                {/*回复列表*/}
                <Dialog
                    title="编辑"
                    style={{width: '60%', textAlign: 'left'}}
                    size="tiny"
                    visible={ this.state.checkAnswerDialog }
                    onCancel={ () => this.setState({ checkAnswerDialog: false }) }
                    lockScroll={ true }
                >
                    <Dialog.Body>
                        <Table
                            className="Type_item"
                            style={{width: '100%', align: 'center'}}
                            columns={this.state.Acolumns}
                            data={this.state.checkAnswerList}
                            border={true}
                        />
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={ () => this.setState({ checkAnswerDialog: false }) }>取消</Button>
                        <Button type="primary" onClick={this.confirmBtn.bind(this)}>确定</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}
export default AjaxTest
