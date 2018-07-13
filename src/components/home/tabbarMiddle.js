import React, {
	Component
} from "react"

import "./tabbarMiddle.css"

export default class XtabbarMiddle extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return(
			<div className="tabbarmiddle_box">
                <a className="weui-tabbar__item">
                    <span style={{
                    	display: 'inline-block',
                    	position: 'relative'
                    }}>
                        <img src={require('../../static/img/new.png')} alt="" className="weui-tabbar__icon"/>
                    </span>
                    <p className="weui-tabbar__label">每日上新</p>
                </a>
                <a href="javascript:;" className="weui-tabbar__item">
                    <img src={require('../../static/img/rexiao.png')} alt="" className="weui-tabbar__icon"/>
                    <p className="weui-tabbar__label">热销榜单</p>
                </a>
                <a href="javascript:;" className="weui-tabbar__item">
                    <span style={{
                    	display: 'inline-block',
                    	position: 'relative',
                    }}>
                        <img src={require('../../static/img/huayang.png')} alt="" className="weui-tabbar__icon"/>
                    </span>
                    <p className="weui-tabbar__label">花漾女神</p>
                </a>
                <a href="javascript:;" className="weui-tabbar__item">
                    <img src={require('../../static/img/mengwa.png')} alt="" className="weui-tabbar__icon"/>
                    <p className="weui-tabbar__label">家有萌娃</p>
                </a>
                <a href="javascript:;" className="weui-tabbar__item">
                    <span style={{
                    	display: 'inline-block',
                    	position: 'relative',
                    }}>
                        <img src={require('../../static/img/sports.png')} alt="" className="weui-tabbar__icon"/>
                    </span>
                    <p className="weui-tabbar__label">运动日常</p>
                </a>
            </div>
		);
	}
}