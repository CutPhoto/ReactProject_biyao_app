import React, {
	Component
} from "react"

import "./backTop.css"

export default class Xbacktop extends Component {
	constructor(prop) {
		super()
		this.state = {}
	}
	componentDidMount() {
		var backtop = document.querySelector('.backtop_box');


		window.onscroll = function() {
			var scrollY = window.scrollY;
			if(scrollY >= 250) {
				backtop.className = 'backtop_box backtop_active';
			} else {
				backtop.className = 'backtop_box';
			}
		}
	}
	Backtop() {
		document.documentElement.scrollTop = 0
	}
	render() {
		return(
			<div onClick={this.Backtop.bind(this)} className="backtop_box"><i className="iconfont icon-jiantou"></i></div>
		);
	}
}