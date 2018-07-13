import React, {
	Component
} from "react"

import XsearchHeader from '../components/search/searchHeader'

import XsearchPanel from '../components/search/searchPanel'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return(
			<div>
				<XsearchHeader/>
				<XsearchPanel/>
			</div>
		)

	}
}