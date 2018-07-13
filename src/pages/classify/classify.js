import React, {
	Component
} from 'react';
import Xtop from '../../components/xtop/xtop.js';
import Xcategory from '../../components/xcategory/xcategory.js';
import XcateList from '../../components/xcateList/xcateList.js';
import './classify.css';

class Classify extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {};
	}
	
	//template
	render() {
		return(

			<div className="classify">
				<Xtop />
				<Xcategory />
				<XcateList />
			</div>
		);
	}
}

export default Classify;