define(function(){
	return{
		data:function(){
			return{
				listArr:[]
			}
		},
		created:function(){
			var _this=this;
			$.ajax({
				url:"/json/buy.json",
				dataType:"json",
				success:function(json){
					_this.listArr=json.arrData;
				},
				error:function(xml,status,error){
					console.log(xml,status,error);
				}
			});
		}
	}
});