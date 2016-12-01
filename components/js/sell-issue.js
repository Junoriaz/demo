define(function(){
	return{
		data:function(){
			return{
			cartypeArr:[],
			cartype2Arr:[],
			handwrite:"配置 需要手动填写",
			}
		},
		created:function(){
			var _this=this;
			$.ajax({
				url:"/json/sellissue.json",
				dataType:"json",
				success:function(json){
					_this.cartypeArr=json.cartypeArr;
					_this.cartype2Arr=json.cartype2Arr;
				},
				error:function(xml,status,error){
					console.log(xml,status,error);
				}
			});
		}
	}
});