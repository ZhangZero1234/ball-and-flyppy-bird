(function(){
	window.bird = Class.extend({
		init:function(params){
			this.w = 85;
			this.h = 60;
			this.x = 200;
			this.y = 200;
			this.image = params.image;
			this.changeY = 0;
			this.state = 0;
			this.fo = 0;
			this.status = 0;
		},
		update:function(){
			if(game.oFrames.currentNum%3==0)
			{
				this.status++;
				if(this.status>2)
				{
					this.status = 0;
				}
			}
			if(this.y>=382)
			{
				game.stop();
			}
			
			if(this.state==0){

				this.fo+=2;
				if(this.fo>=45)
				{
					this.fo=45;
				}
				if(game.oFrames.currentNum%5==0)
				{
					this.changeY+=0.1;
					this.y+=20+0.5*(this.changeY)*(this.changeY);
				}
			}
			else if(this.state==1)
			{
				if(game.oFrames.currentNum%5==0)
				{
					this.changeY+=0.1;
					this.y-=(20+0.5*(this.changeY)*(this.changeY));
				}
			}
			
			
			
		},
		render:function(){
			game.ctx.save();
			game.ctx.translate(this.x+this.w/2,this.y+this.h/2);
			game.ctx.rotate((Math.PI / 180) * this.fo);
			game.ctx.translate(-(this.x+this.w/2),-(this.y+this.h/2));
			game.ctx.drawImage(this.image,this.status*85,0,this.w,this.h,this.x,this.y,this.w,this.h);
			game.ctx.restore();
		},
		clickUp:function(){
			var self = this;
			// game.canvasId.addEventListener("touchstart",function(){
			// 	self.fo=-25;
			// 	self.state = 1;
			// 	self.changeY = 0;
			// 	console.log(game.oFrames.currentNum%5);
			// });
			// game.canvasId.addEventListener("touchend",function(){
			// 	self.fo=25;
			// 	self.state = 0;
			// 	self.changeY = 0;
			// });
			
			game.canvasId.addEventListener("mousedown",function(){
				self.fo=-25;
				self.state = 1;
				self.changeY = 0;
				// console.log(game.oFrames.currentNum%5);
			});
			game.canvasId.addEventListener("mouseup",function(){
				self.fo=25;
				self.state = 0;
				self.changeY = 0;
			});
		}
	});
})(window);