import React from 'react'
import { Layout, Menu } from 'element-react'
import './index.css'
//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
import { HashRouter as Router,Route} from 'react-router-dom'
import AjaxTest from '../ajax/index'
import Clock from '../clock/index'
import HookFun from '../hookFun/index'
import TestComApi from '../Component/api'
import NumberList from '../list/item'
import List from '../list/index'
import Term from '../term/index'
import Event from '../event/index'
import TestCom from '../Component/index'
import FunTest from '../fun/index'
import Frist from '../first/index'
import TestRedux from '../testRedux/index'

class Side extends React.Component {
    constructor() {
        super()
        this.state= {
            name: '/',
            menuName: '菜单1',
            routeNmae: '问题分类',
            // 路由列表
            routeList: [
                {url: '/', component: AjaxTest},
                {url: '/clock', component: Clock},
                {url: '/hookFun', component: HookFun},
                {url: '/testComApi', component: TestComApi},
                {url: '/numberList', component: NumberList},
                {url: '/list', component: List},
                {url: '/term', component: Term},
                {url: '/event', component: Event},
                {url: '/testCom', component: TestCom},
                {url: '/funTest', component: FunTest},
                {url: '/frist', component: Frist},
                {url: '/testRedux', component: TestRedux},
            ],
            // 导航菜单
            routeMenu: [
                {   index:'one',
                    name: '菜单1',
                    list: [
                        {curCom: '/', name: '问题分类'},
                        {curCom: '/clock', name: '定时器'},
                        {curCom: '/hookFun', name: '钩子测试'},
                        {curCom: '/testComApi', name: '组件测试'},
                        {curCom: '/numberList', name: '数组测试'},
                        {curCom: '/frist', name: 'demo'},
                    ]
                },
                { index:'two', name: '菜单2',
                    list: [
                        {curCom: '/list', name: '数组'},
                        {curCom: '/term', name: '循环'},
                        {curCom: '/event', name: '事件对象'},
                        {curCom: '/testCom', name: '测试组件'},
                        {curCom: '/funTest', name: '功能测试'},
                    ]
                },
                { index:'three', name: '菜单3',
                    list: [
                      {curCom: '/testRedux', name: 'redux功能'},
                    ]
                }
            ],
        }
    }
    // 在渲染前调用
    componentWillMount() {
        console.log(window.location.href)
        var url = window.location.href
        this.setState({
            name: url.slice(url.indexOf('#') + 1, url.length)
        })
    }
    onOpen(val) {
        console.log(val)
        this.state.routeMenu.forEach( item => {
            if (item.index === val) {
                this.setState({
                    menuName: item.name
                })
            }
        })
    }
    onClose() {

    }
    changeComponentBtn(item) {
        console.log(item.curCom)
        this.setState({
            name: item.curCom,
            routeNmae: item.name
        })
    }
    goHomePage() {
        this.setState({
            name: '/',
            menuName: '菜单1',
            routeNmae: '问题分类'
        })
    }
    render() {
        return (
            <div className="layout_box">
                <Layout.Col className="side_slide" style={{height: '100%', backgroundColor: '#304156', width: '180px', zIndex: '10'}}>
                    <Menu defaultActive={this.state.name || '/'} className="el-menu-vertical-demo" uniqueOpened={true} onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
                        {
                            this.state.routeMenu.map((val, ind) =>
                                <Menu.SubMenu index={val.index} key={ind} title={<span><i className="el-icon-menu"></i>{val.name}</span>}>
                                    {
                                        val.list.length ? val.list.map( (item, index) =>
                                            <Menu.Item style={{width: '100%', padding: '0px', margin: '0px'}} index={item.curCom} key={index}>
                                                <span className="menu_btn" onClick={this.changeComponentBtn.bind(this, item)} >
                                                    <a className={this.state.name === item.curCom ? "menu_btn_active" : "menu_btn"} href={'#' + item.curCom }>{item.name}</a>
                                                </span>
                                            </Menu.Item>
                                        ) : null
                                    }
                                </Menu.SubMenu>
                            )
                        }
                    </Menu>
                </Layout.Col>
                <div className="main">
                    <div className="sideTop">
                        <div className="top_box">
                            <p>
                                <span className="top_link" onClick={this.goHomePage.bind(this)}><a style={{color: "#000"}}  href={'#/'}>首页</a></span>
                                / <span className="top_link">{this.state.menuName}</span>
                                /<span className="top_link">{this.state.routeNmae}</span></p>
                        </div>
                        <div className="top_user">
                            <p><span>当前用户：<span>测试1</span></span></p>
                        </div>
                    </div>
                    <div className="main_box">
                        <Router>
                            <div>
                                {
                                    this.state.routeList.map((item, index) =>
                                        <Route key={index} path={item.url} exact component={item.component}></Route>
                                    )
                                }
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}
export default Side