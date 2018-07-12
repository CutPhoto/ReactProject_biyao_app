var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
//全部路由都使用
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	next();
})


//function Zajax(data, type, serverAddress, callback) {
//	data ? data : null;
//	var str = '';
//	for(var key in data) {
//		str += `${key} = ${data[key]}&`;
//	}
//	str = str.slice(0, str.length);
//	var xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function() {
//		if(xhr.readyState == 4) {
//			callback(xhr.responseText);
//		}
//	}
//	//get请求
//	if(type == 'get') {
//		xhr.open("get", serverAddress + str, true);
//		//4.向服务器发送请求
//		xhr.send(null);
//	}
//	//post请求
//	else if(type == 'post') {
//		xhr.open("post", serverAddress, true);
//		//用post请求必须加上这一句
//		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
//		//4.向服务器发送请求
//		xhr.send(str);
//	}
//
//}
//获取所有商品路由
app.get('/getGoodsList', function(req, res) {
	request.get('http://qxu1142150189.my3w.com/api/getList.php', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//获取购物车列表路由
app.get('/getCartList', function(req, res) {
	request.get('http://qxu1142150189.my3w.com/api/cart.php', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//获取商品详情路由(需要传入suid)
app.get('/getDetails', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/details.php', form:{suid:req.query.suid}},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//获取分类路由(需要传入分类classify)
app.get('/getClassify', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/getClassify.php', form:req.query},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//登陆路由(需要传入userPhone,passWord)
app.post('/login', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/login.php', form:req.body},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//注册路由(需要传入userPhone,passWord)
app.post('/signin', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/signin.php', form:req.body},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//添加购物车路由(需要传入suid,num)
app.get('/addToCart', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/add.php', form:req.body},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
});
//删除购物车其中一项(需要传入suid)
app.get('/removeToCart', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/remove.php', form:req.query},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
})
//减少购物车其中一项的数量(需要传入suid)
app.get('/jianshaoToCart', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/jianshao.php', form:req.body},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
})
//添加购物车其中一项的数量(需要传入suid)
app.get('/tianjiaToCart', function(req, res) {
	request.post({url:'http://qxu1142150189.my3w.com/api/tianjia.php', form:req.body},function(error, response, body) {
		if(!error && response.statusCode == 200) {
			res.send(body) // Show the HTML for the baidu homepage.
		}
	});
})




//设置监听端口
var server = app.listen(8081, function() {

	var host = server.address().address
	var port = server.address().port

	//console.log("应用实例，访问地址为 http://%s:%s", host, port)

})