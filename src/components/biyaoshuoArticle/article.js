import React, {
	Component
} from "react"

import './article.css'

export default class Article extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sousuoStyle: false
		}
	}

	render() {
		return(
			<div className="page article js_show article_box">
					<div className="article_header"><a href="/home" className="iconfont icon-shouye" style={{fontSize:'25px'}}></a><span className="article_header_c">是在下输了，我的朋友比我买得欢|每周一送礼</span><i></i></div>
				    <div className="page__hd" style={{padding:'0 10px'}}>
				        <h1 className="page__title" style={{fontSize:'20px'}}>是在下输了，我的朋友比我买得欢|每周一送礼</h1>
				        <span className="author">小必姐</span>
						<span className="time">2018-07-09</span>
				    </div>
				    <div className="page__bd">
				        <article className="weui-article">
				            <section>
				                <section>
				                    <p>
				                        购物是个永恒的话题。自从大家结束了购物1.0时代（逛街）进入了购物2.0时代（网购），购物在我们生活中占据的比重就越来越大。
				                    </p>
				                    <p>
				                        	<strong>购物是有快感的。</strong><span>科学的解释告诉我们：多巴胺是一种由大脑分泌出来的，能让我们感受到快乐和愉悦感的物质。在食物、性以及购物等令人愉悦的事物的作用下，多巴胺的分泌会增多,从而启动大脑内部的奖赏回路，给人带来强烈的快感。</span>
				                    </p>
				                    <p>
				                        	有一种说法是<strong>购物类似于原始人类“挑选成熟的好果子”的过程</strong><span>，所以会愉悦兴奋。并且由于主要是原始人女性负责采摘果子，所以女性购物快感会比男性强烈很多。</span>
				                    </p>
				                    <p>
				                        	（广大男性内心：所以这就是你剁手的理由？）
				                    </p>
				                    <p>
				                        	而随着大家愉快的买买买，我们越来越发现，就购物能力而言，的确是人外有人天外有天。
				                    </p>
				                    <p>
				                        	听说天猫上可以买阿斯顿马丁游艇，还能买飞机……
				                    </p>
				                    <p>
				                        <img src="https://bfs.biyao.com/group1/M00/42/7A/rBACW1tDIpKAIk9YAAEt3ofLV6c432.jpg" alt=""/>
				                    </p>
				                    <p>
				                        	错了是这个图↓↓↓
				                    </p>
				                    <p>
				                        	这笔订单真是隔着屏幕都能感受到扑面而来的金钱的气息，简直是购物届的泰斗……
				                    </p>
				                    <p>
				                        <img src="https://bfs.biyao.com/group1/M00/42/74/rBACYVtDIrKAH8epAAGcZA8Edmk340.jpg" alt=""/>
				                    </p>
				                    <p>
				                        	小红买了一只MAC口红，售价300-，她的男朋友小明买了一个Mac笔记本，售价10000+。
				                    </p>
				                    <p>
				                        	果然男孩子一买起来就没有女孩子什么事了哎~就拿买衣服来说吧：
				                    </p>
				                    <p>
				                        <img src="https://bfs.biyao.com/group1/M00/42/7A/rBACW1tDIsOAJkzkAAEehWPCqUY072.jpg" alt=""/>
				                    </p>
				                    <p>
				                        	生活中不乏这种胖友：买完某样东西或者发现了什么购物平台，安利给周围的人之后，周围的人从此一发不可收拾，在买买买的道路上一去不复返，独留你内心OS：说好一起到白头，你却偷偷焗了油。
				                    </p>
				                    <p>
				                    	<span>有多少人与必要不期而遇，<strong>始于价格，陷于价值，忠于品质</strong>。于是你兴高采烈地分享给身边的人：给你推荐个App……</span>
				                    </p>
				                    <p>
				                    	<strong><span>再然后，被推荐的人沉迷必要无法自拔，买买买得比你还欢。</span></strong>
				                    </p>
				                    <p>
				                    	<span>这感觉……我在必要面前失宠了吗……</span>
				                    </p>
				                    <p>
				                    	<span>上期的《每周一送礼》活动的幸运名单也新鲜出炉啦，这是两位被翻牌的幸运用户哦↓↓↓</span>
				                    </p>
				                    <p>
				                        <img src="https://bfs.biyao.com/group1/M00/40/C4/rBACVFtDIvuAe74eAAALXXvDK6A929.png" alt=""/>
				                    </p>
				                    <p>
				                    	<span>请以上幸运的朋友将<strong>姓名（包括实名和必要昵称）+电话+收货地址</strong>，最晚请于<strong>2018年7月11日18:00</strong>之前发送至邮箱：ibiyao@idstaff.com。邮件主题为【每周一送礼】，逾期和未标邮件主题者，将被视作弃权。收到相关信息后，小必姐会尽快寄出礼品。</span>
				                    </p>
				                    <p>
				                    	<span>没能中奖的小伙伴不用捉急，本期小必姐依然准备了精美礼品，只要你在评论区留言【<strong>讲一讲你的同伴从你这里接触到必要之后开启买买买模式的故事</strong>】，晒出你们对必要浓浓的爱，拿走本期精美福利的可能就是你们哦~</span>
				                    </p>
				                    <div>
										<div><p>必要商城，是一家致力于打掉暴利的电商平台，我们也致力于传播健康价值观、倡导美好生活。</p></div>
										<div>
											<p>扫描二维码，关注必要APP，更多高性价比，高质量商品在等着您！</p>
											<p><img src="https://static.biyao.com/m/img/ar/app.png?v=biyao_42175f7" width="160px"/></p>
										</div>
									</div>
				                </section>
				            </section>
				        </article>
				    </div>
				    <div className="page__ft">
				        <a href="javascript:home()"><img src=""/></a>
				    </div>
				</div>
		)

	}
}