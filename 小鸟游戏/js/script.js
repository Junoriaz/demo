//var createObj={
//	gameNode:$('.game'),
//	birdNode:$('.bird'),
//	barrierFun:function(left,on,down){
//		var _this=this;
//		var html='';
//		html+='<div class="barrier" style="left:'+left+'px"><span class="on" style="top:'+on+'px"><img src="img/1.png"/></span><span class="down" style="bottom:'+down+'px"><img src="img/2.png"/></span></div>'
//		_this.gameNode.append(html);
//	},
//	init:function(){
//		var _this=this;
//		console.log(_this.birdNode.height());
//		var on=-Math.random()*$(window).height();
//		var down=-Math.random()*($(window).height+on-_this.birdNode.height());
//		_this.barrierFun(500,on,down);
//	}
//};
//createObj.init();

canvasObj={
	birdImgUrl:"img/3.gif",
	pipeImgTopUrl:"img/1.png",
	pipeImgBottomUrl:"img/2.png",
	canvasNode:null,
	cxtBird:{},
	cxtPipeTop:{},
	cxtPipeBottom:{},
	pipeData:{},
	birdMoveY:null,
	birdTime:0,
	moveX:0,
	pipeBetween:300,
	createCanvasFun:function(){
		var _this=this;
		var winW=$(window).width();
		var winH=$(window).height();
		if(!_this.canvasNode){
		_this.canvasNode=document.createElement('canvas');
		}
		$('body').append($(_this.canvasNode).attr({width:winW,height:winH}));
	},
	ctxFun:function(){
		var  _this=this;
		_this.ctx=_this.canvasNode.getContext('2d');
		var birdImgNode=new Image();
		birdImgNode.src=_this.birdImgUrl;
		var pipeTopNode=new Image();
		pipeTopNode.src=_this.pipeImgTopUrl;
		var pipeBottomNode=new Image();
		pipeBottomNode.src=_this.pipeImgBottomUrl;
		
		birdImgNode.onload=function(){
				_this.cxtBird={
					width:birdImgNode.width,
					height:birdImgNode.height,
					loadBool:true,
					birdImgNode:birdImgNode,
					y:null,
					x:null,
				};
		};
		pipeTopNode.onload=function(){
			_this.cxtPipeTop={
				width:pipeTopNode.width,
				height:pipeTopNode.height,
				loadBool:true,
				pipeTopNode:pipeTopNode
			};
		};
		pipeBottomNode.onload=function(){
			_this.cxtPipeBottom={
				width:pipeBottomNode.width,
				height:pipeBottomNode.height,
				loadBool:true,
				pipeBottomNode:pipeBottomNode
			};
		}
	},
	pipeFun:function(){
		var _this=this;
		if(_this.moveX%_this.pipeBetween!=0){
			return;
		}
		var num=_this.moveX/_this.pipeBetween;
		var canvasWidth=_this.canvasNode.width;
		var canvasHeight=_this.canvasNode.height;
		var pipeDistance=Math.round(_this.cxtBird.height*3+Math.random()*_this.cxtBird.height*3);
		var pipeTopLong=Math.round(Math.random()*(canvasHeight-pipeDistance));
		var pipeBottomLong=canvasHeight-pipeTopLong-pipeDistance;
		
		
		var pipeTopHeight=_this.cxtPipeTop.height;
		var pipeTopWidth=_this.cxtPipeTop.width;
		var pipeTopSy=pipeTopHeight-pipeTopLong;
		
		_this.pipeData[num]={};
		_this.pipeData[num].top={
			img:_this.cxtPipeTop.pipeTopNode,
			sx:0,
			sy:pipeTopSy,
	        swidth:_this.cxtPipeTop.width,
	        sheight:pipeTopLong,
	        x:canvasWidth-100,
	        y:0,
	        width:_this.cxtPipeTop.width,
	        height:pipeTopLong
		};
		_this.pipeData[num].bottom={
			img:_this.cxtPipeBottom.pipeBottomNode,
			sx:0,
			sy:0,
	        swidth:_this.cxtPipeBottom.width,
	        sheight:pipeBottomLong,
	        x:canvasWidth,
	        y:pipeTopLong+pipeDistance,
	        width:_this.cxtPipeBottom.width,
	        height:pipeBottomLong
		};
		
		
	},
	render:function(){
		var _this=this;
		if(_this.cxtBird.loadBool&&_this.cxtPipeTop.loadBool&&_this.cxtPipeBottom.loadBool){
			var canvasWidth=_this.canvasNode.width;
			var canvasHeight=_this.canvasNode.height;
			_this.ctx.clearRect(0,0,canvasWidth,canvasHeight);//清空画布
			//鸟
			var birdNode=_this.cxtBird.birdImgNode;
			_this.cxtBird.x=_this.canvasNode.width/4;
			_this.birdTime++;
			if(!_this.birdMoveY)
			_this.birdMoveY=_this.canvasNode.height/2-_this.cxtBird.height/2;
			else{
			_this.cxtBird.y=_this.birdMoveY+(_this.birdTime*_this.birdTime)/8;
			_this.ctx.drawImage(birdNode,_this.cxtBird.x,_this.cxtBird.y);
			}
			
			
			//管子
			_this.pipeFun();
			_this.moveX+=2;
			for( var num in _this.pipeData){
				
				if(_this.pipeData[num].top.x<=-_this.cxtPipeTop.width){
					delete _this.pipeData[num];
					continue;
				}
			_this.pipeData[num].top.x=canvasWidth-_this.moveX+_this.pipeBetween*num;
			var pipeTop=_this.pipeData[num].top;
			_this.ctx.drawImage(pipeTop.img,pipeTop.sx,pipeTop.sy,pipeTop.swidth,pipeTop.sheight,pipeTop.x,pipeTop.y,pipeTop.width,pipeTop.height);
			
			_this.pipeData[num].bottom.x=canvasWidth-_this.moveX+_this.pipeBetween*num;
			var pipeBottom=_this.pipeData[num].bottom;
			_this.ctx.drawImage(pipeBottom.img,pipeBottom.sx,pipeBottom.sy,pipeBottom.swidth,pipeBottom.sheight,pipeBottom.x,pipeBottom.y,pipeBottom.width,pipeBottom.height);
		}
			_this.dieOrLiveFun();
		}
	},
	dieOrLiveFun:function(){
		var _this=this;
		var birdX=_this.cxtBird.x;//鸟的x坐标
		var birdY=_this.cxtBird.y;
		var birdWidth=_this.cxtBird.width;//鸟的宽
		var birdHeight=_this.cxtBird.height;
		for(var num in _this.pipeData){
			var pipeWidth=_this.pipeData[num].top.width;
			var topX=_this.pipeData[num].top.x;
			var topHeight=_this.pipeData[num].top.height;
			var bottomY=_this.pipeData[num].bottom.y;
			var bottomHeight=_this.pipeData[num].bottom.height;
			if(birdX+birdWidth>=topX&&birdX<=topX+pipeWidth){
				if(birdY<=topHeight||birdY+birdHeight>=bottomY){
					alert('死了哦');
					window.location.reload();
				}
			}
		}
	},
	init:function(){
		var _this=this;
		_this.createCanvasFun();
		window.onresize=function(){
			_this.createCanvasFun();
		}
		_this.ctxFun();
		
		window.onkeydown=function(e){
			var event=window.event||e;
			var keyCode=event.which||event.keyCode;
			event.preventDefault();
			if(keyCode==32){
				_this.birdTime=0;
				_this.cxtBird.y-=10;
				_this.birdMoveY=_this.cxtBird.y;
			}
		}
	}
};
canvasObj.init();

window.requestAnimFrame = (function(){
		   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60);};})();

		//替代setInterval(render, 16)
		(function animloop(){ 
			requestAnimFrame(animloop); 
			canvasObj.render();
		})();