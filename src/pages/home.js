import React, {
	Component
} from "react"

import Xheader from '../components/home/header';

class Home extends Component {
	constructor(prop) {
		super()
		this.state = {
		}
	}
	render() {
		return(
			<div>
				<Xheader/>
			</div>
		)
		
	}
}
export default Home