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
      html: [ <i className="iconfont" >&#xe648;</i>,
              <i className="iconfont" >&#xe7f9;</i>,
              <i className="iconfont" >&#xe61b;</i>,
              <i className="iconfont" >&#xe638;</i>
            ],
      
    }
    this.navClick=this.navClick.bind(this);
  }
  navClick(i){
    for(let i = 0; i < this.state.pblist.length ;i++){
      this.state.pblist[i].tabcolorBool = false;
    }
    i.tabcolorBool = true;
    var pblist = this.state.pblist
    this.setState({
      pblist:pblist
    })
  }
  render(){
    return (
        <div className="PublicButtom">
            <ul>
            {
              (function(self){
                return self.state.pblist.map((item,index)=>{
                  return <li key={item.text} onClick={()=>self.navClick(item)} className={item.tabcolorBool?"tabcolor":""}>
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