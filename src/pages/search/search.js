import React, {
	Component
} from 'react';
import Xtops from '../../components/xtops/xtops.js';
import Xhotsearch from '../../components/xhotsearch/xhotsearch.js';
import Xhistory from '../../components/xhistory/xhistory.js';
import './search.css';
class Search extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {};
	}

	//template
	render() {
		return(
			<div className="search">
				<Xtops />
				<Xhistory />
				<Xhotsearch />
			</div>
		);
	}
}

export default Search;