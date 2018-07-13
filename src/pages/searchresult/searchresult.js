import React, {
	Component
} from 'react';

import Xtopss from '../../components/xtopss/xtopss.js';
import Xsearchnav from '../../components/xsearchnav/xsearchnav.js';
import Xproduct from '../../components/xproduct/xproduct.js';
class Searchresult extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {};
	}

	//template
	render() {
		return(
			<div className="searchresult">
				<Xtopss />
				<Xsearchnav />
				<Xproduct/>
				
			</div>
		);
	}
}

export default Searchresult;