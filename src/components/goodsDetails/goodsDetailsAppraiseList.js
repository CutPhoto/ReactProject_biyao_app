import React, {
	Component
} from 'react';
import './goodsDetailsAppraiseList.css'
//html
export default class GoodsDetailsAppraiseList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '评价'
		}
	}
	render() {
		return(
			<div className="goodsDetailsAppraiseList">
		      <div id="by_w">
					<div className="main-title">
						<div className="title-site"></div>
						<div className="title-fix">
							<a href="#">
								<i className="icon" aria-hidden="true">
									
								</i>
							</a>
							<p className="escp">评价(5471)</p>
						</div>
					</div>
					<div className="product-score">
						<span className="score-title">商品满意度</span>
						<span className="score-num">4.8</span>
					</div>
					<div className="comment-wrap">
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/2A/71/rBACVFpxYuKAVKqzAABaGGQDBBE012.png" />
										<span className="user-name">b***1</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
				
									</div>
								</div>
								<div className="comment-content">
									不错，值这钱
									<div className="comment-time">2018-07-12 09:53:56</div>
								</div>
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/29/65/rBACYVpYYHGATNFiAAAHE23FPwo925.png"/>
										<span className="user-name">桃***白</span>
									</div>
									<div className="comment-icon-wrap">
										
											
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
				
									</div>
								</div>
								<div className="comment-content">
									回购，面料很好
									<div className="comment-time">2018-07-12 07:42:33</div>
								</div>
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/33/D4/rBACYVrKNKaAcDN0AAchgBMe0nE460_150x150.jpg"/>
										<span className="user-name">4***L</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
									</div>
								</div>
								<div className="comment-content">
									爸爸很满意
									<div className="comment-time">2018-07-11 23:39:20</div>
								</div>
								
								
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/40/EA/rBACVFtDhkaAJQEhAASPRFJYD6w659_150x150.jpg"/>
										<span className="user-name">哩***咙</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
									</div>
								</div>
								<div className="comment-content">
									很棒的体验。把肩膀的接缝处理再圆润些就更完美了！
									<div className="comment-time">2018-07-11 21:26:43</div>
								</div>
								
								
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/0B/D9/rBACVFkYWoqAQfJHAAAR8LcmNXU857.jpg"/>
										<span className="user-name">b***0</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
									</div>
								</div>
								<div className="comment-content">
									合身，面料也挺舒服的
									<div className="comment-time">2018-07-11 18:23:24</div>
								</div>
												<div className="reply-add">
													<span className="reply-add-title">[2小时后追评]</span>
													下次还会再来买的
												</div>
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/2A/71/rBACVFpxYtiACdouAABOJ5Lvq7o663.png"/>
										<span className="user-name">德***哥</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
											
									</div>
								</div>
								<div className="comment-content">
									质量还不错
									<div className="comment-time">2018-07-11 18:01:07</div>
								</div>
								
								
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/40/1E/rBACVFs-1GaADUM7AAATEvSdEcE735.png" />
										<span className="user-name">策***风</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
									</div>
								</div>
								<div className="comment-content">
									质量很不错，会继续关注，售后也很好
									<div className="comment-time">2018-07-11 13:40:57</div>
								</div>
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/24/27/rBACW1ojXFaAGcFDAABaKwnVHF4409.png" />
										<span className="user-name">姜***人</span>
									</div>
									<div className="comment-icon-wrap">
										
											
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>	
									</div>
								</div>
								<div className="comment-content">
									很好，大牌品质工厂价格。
									<div className="comment-time">2018-07-11 12:31:15</div>
								</div>
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/37/D8/rBACVFsAXCuAd-LCAAAhW21nI6Y949.png" />
										<span className="user-name">b***s</span>
									</div>
									<div className="comment-icon-wrap">
												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
									</div>
								</div>
								<div className="comment-content">
									很合身，非常好。
									<div className="comment-time">2018-07-11 12:17:50</div>
								</div>
							</section>
						
							<section className="comment-item">
								<div className="commet-top">
									<div className="comment-user">
										
										<img className="user-img" src="https://bfs.biyao.com/group1/M00/2A/71/rBACVFpxYxOASesmAABGDyLOEDk665.png" />
										<span className="user-name">b***h</span>
									</div>
									<div className="comment-icon-wrap">

												<span className="comment-icon">
													<span className="good"></span>
												</span>
												<span className="comment-icon-text">好评</span>
									</div>
								</div>
								<div className="comment-content">
									很好
									<div className="comment-time">2018-07-11 12:07:12</div>
								</div>
							</section>
					</div>
				<div className="dropload-down"><div className="dropload-refresh">↑上拉加载更多</div></div></div>
		    </div>
		);
	}
}