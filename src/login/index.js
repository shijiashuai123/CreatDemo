import React  from 'react';
import './index.css'
import { Button, Input, Checkbox} from 'element-react';
import qqImg from './img/QQ.png'
import wxImg from './img/wx.png'

class Login1 extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                {name: '登陆', id: 1},
                {name: '注册', id: 2},
            ],
            curId: 1
        }
    }
    changeReg(item) {
        this.setState({
            curId: item.id
        })
    }
    render() {
        var ele = null
        this.state.curId === 1 ? ele = <div>
            <div className="remember_ps">
                <Checkbox checked>记住密码</Checkbox>
                <span className="forget_ps">忘记密码</span>
            </div>
            <Button className="confirm_btn" type="primary">登  陆</Button>
            <div className="third_party">第三方登陆
                <p className="or_content">or</p>
                <ul className="third_party_item">
                    <li><img src={qqImg} alt=""/></li>
                    <li><img src={wxImg} alt=""/></li>
                </ul>
            </div>
        </div> : ele = <div>
            <div className="validCode_box">
                <Input type="text" className="set_input2" placeholder="手机号" />
                <Button className="send_validCode" type="primary">发送</Button>
            </div>
                <Input type="text" className="set_input1" placeholder="验证码" />

            <Button className="confirm_btn" type="primary">注  册</Button>
        </div>
        return (
            <div className="login_bg">
                <span className="login_tit">welcome to React</span>
                <span className="login_tit login_tit2">小嗨管理系统</span>
                <div className="login_box">
                    <ul className="login_top">
                        {
                            this.state.list.map( (item, index) =>
                                <li key={index} className="tab_item" style={{backgroundColor:(this.state.curId === item.id) ?  "#fff" : "", color: '#000'}} onClick={this.changeReg.bind(this, item)}>{item.name}</li>
                            )
                        }
                    </ul>
                    <div className="login_info">
                        <Input type="text" className="set_input" placeholder="账号" />
                        <Input type="password" className="set_input1" placeholder="密码" />
                        {ele}
                        {/*<div>*/}
                            {/*<div className="remember_ps">*/}
                                {/*<Checkbox checked>记住密码</Checkbox>*/}
                                {/*<span className="forget_ps">忘记密码</span>*/}
                            {/*</div>*/}
                            {/*<Button className="confirm_btn" type="primary">登  陆</Button>*/}
                            {/*<div className="third_party">第三方登陆*/}
                                {/*<p className="or_content">or</p>*/}
                                {/*<ul className="third_party_item">*/}
                                    {/*<li><img src={qqImg} alt=""/></li>*/}
                                    {/*<li><img src={wxImg} alt=""/></li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
export default Login1;
