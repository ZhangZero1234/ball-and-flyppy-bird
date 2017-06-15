(function(){
	window.pipe = Class.extend({
		init:function(params){
			this.imageObj = params.imageObj;
			this.state = _.random(0,1);
			this.h = _.random(150,game.canvasId.height/2);
			this.speed = 3;
			this.x = 800;
		},
		update:function(){
				this.x-=this.speed;
		},
		render:function(){
			var self = this;
			console.log(this.state);
			if(this.state == 0)
			{
				game.ctx.drawImage(self.imageObj.pipe0,0,0,148,self.h,self.x,452-self.h,148,self.h);
			}
			else{
				game.ctx.drawImage(self.imageObj.pipe1,0,1664-self.h,148,self.h,self.x,0,148,self.h);
			}
			
		}	
	});
})(window);