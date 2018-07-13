import React, {
	Component
} from "react"

import Xbanner from '../banner';
import Xbaozheng from '../baozheng';
import XneedToSay from '../needToSay';
import XtabbarMiddle from '../tabbarMiddle';
import Xjingxuan from '../jingxuan';
import Xtuijian from '../tuijian';

export default class Panel extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div>
				<Xbanner/>
				<Xbaozheng/>
				<XneedToSay/>
				<XtabbarMiddle/>
				<Xjingxuan/>
				<Xtuijian/>
			</div>
		)

	}
}