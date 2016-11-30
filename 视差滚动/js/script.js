var zhuJl={
		barNode:$('.bar'),
		floorNode:$('.floor'),
		hillNode:$('.hill'),
		cloudNode:$('.cloud'),
		treeNode:$('.tree'),
		sunNode:$('.sun'),
		moonNode:$('.moon'),
		leftFeetNode:$('.yellow-person-feet .left'),
		rightFeetNode:$('.yellow-person-feet .right'),
		flowerNode:$('.flower'),
		wordNode:$('.flower-main .word'),
		butterflyNode:$('.butterfly'),
		rainbowNode:$('.rainbow'),
		startNode:$('#block'),
		manNode:$('.yellow-person'),
		floorFun:function(num){//num表示我的动画长度，单位是px；
			var _this=this;
			var html='';
			var lilength=num/100;
			var mountainlength=num/1000;
			var winW=$(window).width();//页面可视宽度 
			var winH=$(window).height();
			for(var i=0;i<lilength;i++){
				html+='<li>';
				html+='<span></span><span></span>';
				html+='<div class="arrow">';
				html+='<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>';
				html+='</div></li>';
			}
			_this.floorNode.css('width',num+"px");
			_this.floorNode.children('ul').append(html);
			
		},
		hillFun:function(num){
			var _this=this;
			var html='';
			html+='<div class="mountain" style="left:'+num+'px"></div>';
			_this.hillNode.append(html);
			
		},
		cloudFun:function(top,left,cloudNum){
			var _this=this;
			var html='';
			html+='<div class="'+cloudNum+'" style="top:'+top+'px;left:'+left+'px"><span class="cloud-main"><span class="rain-main"></span><i class="cercle1"></i><i class="cercle2"></i><i class="cercle3"></i></span></div>';
			_this.cloudNode.append(html);
		},
		rainFun:function(top){
			html='';
			html+='<span class="rain" style="top:'+top+'px"><em class="rain1"></em><em class="rain2"></em><em class="rain3"></em><em class="rain4"></em><em class="rain5"></em><span/>'
			$('.cloud3 .rain-main').append(html);
		},
		treeFun:function(left,treeNum){
			var _this=this;
			var html='';
			html='<span class="'+treeNum+'" style="left:'+left+'px"><i class="leaf"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></i></span>';
			_this.treeNode.append(html);
		},
		flowerFun:function(left,word){
			var _this=this;
			var html='';
			html+='<span class="stem" style="left:'+left+'px"><div class="flower-main"><span class="word">'+word+'</span><i class="petal1"></i><i class="petal2"></i><i class="petal3"></i><i class="petal4"></i><i class="petal5"></i><i class="flower-middle"></i></div></span>';
			_this.flowerNode.append(html);
			
		},
		startFun:function(num){
			var _this=this;
			_this.barNode.css("height",(num-$(window).width()+$(window).height())+"px");
			$('.block').hide();
//			if(window.screen.height>350){
			_this.manNode.animate({bottom:'141px'},'fast',function(){
				_this.manNode.animate({bottom:'200px'},200,'swing',function(){
					_this.manNode.animate({bottom:'141px'},100,'linear');
					});
					});
//			}
//			else
//			{_this.manNode.animate({bottom:'64px'},'fast',function(){
//				_this.manNode.animate({bottom:'120px'},200,'swing',function(){
//					_this.manNode.animate({bottom:'64px'},100,'linear');
//				});
//			});}
			
			
		},
		init:function(){
			var _this=this;
			var flag=false;
			var rainbowflag=false;
			var sweattimer;
			_this.startNode.click(function(){
				_this.startFun(20000);
			});
			window.onload=function(){
				setInterval(function(){
			$('.rain-main').animate({marginTop:'50px'},500,function(){
			$('.cloud3 .rain-main').prepend($('.rain-main .rain:last'));
			$('.rain-main').css('marginTop',0);
			});}
			,1000);
			
			};
			$(window).scroll(function(){
				if(parseInt(_this.leftFeetNode.css("top"))==100){
				_this.leftFeetNode.css('top',90+'px');
				_this.rightFeetNode.css('top',100+'px');
				}
				else{
				_this.leftFeetNode.css('top',100+'px');
				_this.rightFeetNode.css('top',90+'px');
				}
				var time=false;
				var timer=setTimeout(function(){
					if(time)
					clearTimeout(timer);
				_this.leftFeetNode.css('top',100+'px');
				_this.rightFeetNode.css('top',100+'px');
				time=true;
				},100);
			});
			_this.floorFun(20000);//创建地板
            _this.hillFun(500);
            _this.hillFun(1500);
            _this.hillFun(3000);
            
            _this.cloudFun(197,150,'cloud1');
            _this.cloudFun(197,500,'cloud2');
            _this.cloudFun(197,1000,'cloud1');
            _this.cloudFun(100,1300,'cloud2');
            _this.cloudFun(100,1700,'cloud2');
            _this.cloudFun(150,2000,'cloud3');
            _this.cloudFun(170,2200,'cloud3');
            _this.cloudFun(150,2400,'cloud3');
            _this.rainFun(-50);
            _this.rainFun(0);
            _this.rainFun(50);
            _this.rainFun(100);
            _this.rainFun(150);
            _this.rainFun(200);
            _this.rainFun(250);
            _this.rainFun(300);
            _this.rainFun(350);
            _this.rainFun(400);
            
            
            _this.treeFun(200,'tree2');
            _this.treeFun(250,'tree3');
            _this.treeFun(300,'tree1');
            _this.treeFun(1000,'tree2');
            _this.treeFun(1050,'tree3');
            _this.treeFun(1100,'tree1');
            _this.treeFun(3600,'tree2');
            _this.treeFun(3650,'tree3');
            _this.treeFun(3700,'tree2');
            _this.treeFun(3750,'tree3');
            _this.treeFun(3800,'tree2');
            _this.treeFun(3850,'tree3');
            _this.treeFun(7000,'tree3');
            _this.treeFun(7050,'tree1');
            _this.treeFun(9000,'tree3');
            _this.treeFun(9050,'tree1');
            
            _this.flowerFun(18500,'HTML+CSS');
            _this.flowerFun(18650,'HTML5+CSS3');
            _this.flowerFun(18800,'JavaScript');
            _this.flowerFun(18950,'Jquery');
            _this.flowerFun(19100,'NODEJS');
			$(window).scroll(function(){
				var scrollLeft=$('html').scrollTop()+$('body').scrollTop();
				_this.floorNode.css('left',-scrollLeft+"px");
				_this.hillNode.css('left',-scrollLeft/5+"px");
				_this.cloudNode.css('left',-scrollLeft/10+"px");
				_this.treeNode.css('left',-scrollLeft/2+"px");
				_this.flowerNode.css('left',-scrollLeft+'px');
				_this.butterflyNode.css('left',-scrollLeft+'px');
				_this.rainbowNode.css('left',-scrollLeft+'px');
				var scrollLeftHalf=(20000-$(window).width()-$(window).height())/2;
				
//				if(window.screen.height>350){
				if(scrollLeft<=scrollLeftHalf){
				_this.sunNode.css('right',scrollLeft/((10000-$(window).width())/($(window).width()-$('.sun-main').width()))+"px");
				_this.moonNode.css({'bottom':'90px','right':0});
				}
				else{
				_this.moonNode.css('right',(scrollLeft-scrollLeftHalf)/((10000-$(window).width())/($(window).width()-$('.sun-main').width()))+"px");
				_this.sunNode.css({'bottom':'90px','right':0});
				}
//				}
//				else{
//					if(scrollLeft<=scrollLeftHalf){
//				_this.sunNode.css('right',scrollLeft/((10000-$(window).width())/($(window).width()-$('.sun-main').width()))+"px");
//				_this.moonNode.css({'bottom':'30px','right':0});
//				}
//				else{
//				_this.moonNode.css('right',(scrollLeft-scrollLeftHalf)/((10000-$(window).width())/($(window).width()-$('.sun-main').width()))+"px");
//				_this.sunNode.css({'bottom':'30px','right':0});
//				}
//				}
				
				
				
				if(scrollLeft<=scrollLeftHalf/2)
				_this.sunNode.css('bottom',(90+((scrollLeft*2)/(20000/$(window).height())*2))+'px');
				else if(scrollLeft>scrollLeftHalf/2&&scrollLeft<=scrollLeftHalf)
				_this.sunNode.css('bottom',(90+((scrollLeftHalf)/(20000/$(window).height())*2)-(((scrollLeft-(scrollLeftHalf/2))*2)/(20000/$(window).height())*2))+'px');
				else if(scrollLeft>scrollLeftHalf&&scrollLeft<=scrollLeftHalf*1.5)
				_this.moonNode.css('bottom',(90+((scrollLeft-scrollLeftHalf)*2/(20000/$(window).height())*2))+'px');
				else
				_this.moonNode.css('bottom',(90+((scrollLeftHalf)/(20000/$(window).height())*2)-(((scrollLeft-(scrollLeftHalf*1.5))*2)/(20000/$(window).height())*2))+'px');
				if(scrollLeft<(scrollLeftHalf/2)*1.5){
				$('body').css('background','#00bff3');
				$('.moon-main i').css('background','#00bff3');
				$('.rainbow8').css('background','#00bff3');
				}
				else if((-parseInt(_this.floorNode.css('left'))+$(window).width()/2)>parseInt($('.stem').eq(2).css('left'))){
				$('body').css('background','#fbb444');
				$('.moon-main i').css('background','#fbb444');
				$('.rainbow8').css('background','#fbb444');
				}
				else
				{
				$('body').css('background','#0e1542');
				$('.moon-main i').css('background','#0e1542');
				$('.rainbow8').css('background','#0e1542');
				}
				console.log(window.screen.height);
				for(var i=0;i<$('.stem').length;i++)
				if((-parseInt(_this.floorNode.css('left'))+$(window).width()/2)>parseInt($('.stem').eq(i).css('left'))){
				if(window.screen.height>=864){
				switch(i)
				{case 0:
					$('.stem').eq(0).css('top',-550+'px');
				break;
				case 1:
					$('.stem').eq(1).css('top',-500+'px');
				break;
				case 2:
					$('.stem').eq(2).css('top',-450+'px');
				break;
				case 3:
					$('.stem').eq(3).css('top',-440+'px');
				break;
				case 4:
					$('.stem').eq(4).css('top',-350+'px');
				break;}
				}
				else{
					switch(i)
				{case 0:
					$('.stem').eq(0).css('top',-275+'px');
				break;
				case 1:
					$('.stem').eq(1).css('top',-250+'px');
				break;
				case 2:
					$('.stem').eq(2).css('top',-225+'px');
				break;
				case 3:
					$('.stem').eq(3).css('top',-220+'px');
				break;
				case 4:
					$('.stem').eq(4).css('top',-175+'px');
				break;}
				}
				}
				if(scrollLeft<scrollLeftHalf){
				if(flag==false){
					flag=true;
				sweattimer=setInterval(function(){
					$('.sweat').show();
					setTimeout(function(){
						$('.sweat').hide();
					},500);
				},1000);
				}}
				else{
				flag=false;
				clearInterval(sweattimer);
				$('.sweat').hide();
				}
				if((-parseInt(_this.floorNode.css('left'))+$(window).width()/2)>parseInt($('.stem').eq(2).css('left'))){
				$('.cloud3').fadeOut(3000);
				if(rainbowflag==false){
				rainbowflag=true;
				setTimeout(function(){
					_this.rainbowNode.fadeIn(5000);
				},1000);
				}}
				if(scrollLeft<=scrollLeftHalf/2){
				$('.shadow').fadeIn(1000);
				var deg=-70+70*(scrollLeft/(scrollLeftHalf/2));
				$('.shadow').css('transform','skewX('+deg+'deg)');
				}
				else if(scrollLeft>scrollLeftHalf/2&&scrollLeft<=scrollLeftHalf){
				var deg=70*((scrollLeft-scrollLeftHalf/2)/(scrollLeftHalf/2));
				$('.shadow').css('transform','skewX('+deg+'deg)');
				}
				else if(scrollLeft>scrollLeftHalf&&scrollLeft<=scrollLeftHalf*1.5){
				var deg=-70+70*((scrollLeft-scrollLeftHalf)/(scrollLeftHalf/2));
				$('.shadow').css('transform','skewX('+deg+'deg)');
				}
				else{
				var deg=70*((scrollLeft-scrollLeftHalf*1.5)/(scrollLeftHalf/2));
				$('.shadow').css('transform','skewX('+deg+'deg)');
				}
				
			});
		}
	};

	zhuJl.init();