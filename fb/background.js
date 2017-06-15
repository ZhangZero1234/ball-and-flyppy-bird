(function(){
	window.background = Class.extend({
		init:function(params){
			this.width = params.width;
			this.height = params.height;
			this.image = params.image;
			this.count = Math.ceil(game.canvasId.width/this.width);
			this.x = 0;
			this.speed = params.speed;
			this.y = params.y;
		},
		render:function(){
			for(var i = 0 ; i < this.count+1 ; i++)
			{
				game.ctx.drawImage(this.image,0,0,this.width,this.height,this.width*i+this.x,this.y,this.width,this.height);
			}
		},
		update:function(){
			this.x -=this.speed; 
			if(this.x<-this.width)
			{
				this.x=0;
			}
		}
	});
})(window);