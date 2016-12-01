define(function(){
	return{
		data:function(){
			return{
			message:{}
			}
		},
		created:function(){
			console.log(2);
			var _this=this;
			$.ajax({
				url:"/json/selldetial1.json",
				dataType:"json",
				success:function(json){
					console.log(json);
					_this.message=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error);
				}
			});
		},
		updated:function(){
			console.log(this.message);
		},
		destroyed:function(){
			console.log(1);
			this.message=[];
		}
		
	}
});