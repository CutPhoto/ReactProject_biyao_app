import React, {
	Component
} from "react"

import Xheader from '../components/home/header';
import Xbanner from '../components/home/banner';
import Xbaozheng from '../components/home/baozheng';
import XneedToSay from '../components/home/needToSay';
import XtabbarMiddle from '../components/home/tabbarMiddle';
import Xjingxuan from '../components/home/jingxuan';
import Xtuijian from '../components/home/tuijian';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return(
			<div style={{
				backgroundColor:'#f2f2f2'
				}}>
				<Xheader/>
				<div>
					<Xbanner/>
					<Xbaozheng/>
					<XneedToSay/>
					<XtabbarMiddle/>
					<Xjingxuan/>
					<Xtuijian/>
				</div>
			</div>
		)

	}
}
export default Home