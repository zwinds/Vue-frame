function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//1.取当前的值
		var icur = 0;
		if(attr == 'opacity'){              
			icur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}
		else{
			icur = parseInt(getStyle(obj,attr));
		}

		//2.算速度
		var speed = (iTarget-icur)/8;
		speed = speed > 0?Math.ceil(speed):Math.floor(speed);

		//3.检测停止
		if(icur == iTarget){
			clearInterval(obj.timer);
			//回调函数
			if(fn){
				fn();
			}
		}else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha:(opacity:'+(icur + speed)+')';
				obj.style.opacity = (icur + speed)/100;
			}
			else{
				obj.style[attr] = icur + speed + 'px'; 
			}
			
		}
	},30)
};
// 页面加载事件
window.onload = function () {
	//链式动画的js
	var Li = document.getElementById('li1');
	Li.onmouseover = function () {
	  startMove(Li, 'width', 400, function () { //先变宽
		startMove(Li, 'height', 200, function () { //再变高
		  startMove(Li, 'opacity', 100); //最后改变透明度
		});
	  });
	}
	Li.onmouseout = function () {
	  startMove(Li, 'opacity', 30, function () {
		startMove(Li, 'height', 100, function () {
		  startMove(Li, 'width', 200);
		})
	  })
	};
	//缓冲动画js
	var oDiv = document.getElementById('div1');
		  oDiv.onmouseover = function(){
			  startMove1(0);
		  }
		  oDiv.onmouseout = function(){
			  startMove1(-200);
	  }
	  var timer = null;
	  function startMove1(iTarget){
		  clearInterval(timer);
		  var oDiv = document.getElementById('div1');
		  timer = setInterval(function(){
			  var speed = (iTarget-oDiv.offsetLeft)/20;
			  speed = speed >0?Math.ceil(speed):Math.floor(speed);
			  if(oDiv.offsetLeft == iTarget){
				  clearInterval(timer);
			  }
			  else{
			  oDiv.style.left = oDiv.offsetLeft + speed + 'px';
			  }
		  },30)
	};
	//速度动画
	var oDiv = document.getElementById('div2');
		  oDiv.onmouseover = function(){
			  startMove2(0);
		  }
		  oDiv.onmouseout = function(){
			  startMove2(-200);
	  }
	  var timer = null;
	  function startMove2(iTarget){
		  clearInterval(timer);
		  var oDiv = document.getElementById('div2');
		  timer = setInterval(function(){
			  var speed = 0;
			  if(oDiv.offsetLeft > iTarget)
			  {
				  speed = -10;
			  }else{
				  speed = 10;
			  }
			  if(oDiv.offsetLeft == iTarget){
				  clearInterval(timer);
			  }
			  else{
			  oDiv.style.left = oDiv.offsetLeft + speed + 'px';
			  }
		  },30)
	  }
  };