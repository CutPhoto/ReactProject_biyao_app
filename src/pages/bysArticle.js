import React, {
	Component
} from "react"

import Article from '../components/biyaoshuoArticle/article'

export default class BysArticle extends Component {
	constructor(prop) {
		super()
		this.state = {

		}
	}
	render() {
		return(
			<div>
				<Article/>
			</div>
		);
	}
}