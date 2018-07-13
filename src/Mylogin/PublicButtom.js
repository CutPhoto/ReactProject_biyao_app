import React, { Component } from 'react';
import './PublicButtom.css'
class PublicButtom extends Component{
  constructor() {
    super()
    this.state = {
      pblist:[{text:'首页',tabcolorBool:true},
              {text:'分类',tabcolorBool:false},
              {text:'购物车',tabcolorBool:false},
              {text:'我的',tabcolorBool:false}
            ],
      html: [ <a href="/home"><i className="iconfont" >&#xe648;</i></a>,
              <a href="/classify"><i className="iconfont" >&#xe7f9;</i></a>,
              <a href="/shoppingcar"><i className="iconfont" >&#xe61b;</i></a>,
              <a href="/Myorder"><i className="iconfont" >&#xe638;</i></a>
            ],
      
    }

  }
  componentDidMount() {
    for(let i = 0; i < this.state.pblist.length ;i++){
      this.state.pblist[i].tabcolorBool = false;
    }
    switch(window.location.pathname){
      case '/home':
      this.state.pblist[0].tabcolorBool = true
      break;
      case '/classify':
      this.state.pblist[1].tabcolorBool = true
      break;
      case '/shoppingcar':
      this.state.pblist[2].tabcolorBool = true
      break;
      case '/Myorder':
      this.state.pblist[3].tabcolorBool = true
      break;
    }
    var arr = [...this.state.pblist];
    this.setState({
      pblist:arr
    })
  }
  render(){
    return (
        <div className="PublicButtom">
            <ul>
            {
              (function(self){
                return self.state.pblist.map((item,index)=>{
                  return <li key={item.text} className={item.tabcolorBool?"tabcolor":""}>
                        {self.state.html[index]}
                        <p>{item.text}</p>
                  </li>
                })
              })(this)
            }
            </ul>   
        </div>   
      )
  }
};
export default PublicButtom;