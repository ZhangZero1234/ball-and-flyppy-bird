(function(){
	window.game = Class.extend({
		init:function(params){
			var self = this;
			this.canvasId = document.getElementById(params.canvasId);
			this.ctx = this.canvasId.getContext("2d");
			this.fps = params.fps;
			this.oTimer=null;
			this.oFrames = new fps();
			this.loadInmage = new loadsource();
			this.images = null;
			this.loadInmage.loadImage("r.json",function(readydata,alldata,imageObject,object){
				// console.log(data);
				self.ctx.clearRect(0,0,self.canvasId.width,self.canvasId.height);
				self.ctx.font="20px 黑体";
				self.ctx.fillText("数据加载中"+readydata+"/"+alldata,40,80);
				if(readydata==alldata)
				{
					self.images=imageObject;
					self.fangzi = new background({
					width:300,
					height:256,
					image:self.images.fangzi,
					speed:5,
					y:134
					});

					self.shu = new background({
					width:300,
					height:216,
					image:self.images.shu,
					speed:4,
					y:234
					});

					self.diban = new background({
					width:48,
					height:48,
					image:self.images.diban,
					speed:3,
					y:452
					});

					self.bird = new bird({
						image:self.images.bird
					});

					self.arr = [new pipe({imageObj:self.images})];

					self.run();
				}
			});
		},
		run:function(){
			this.mainloop();
			this.bird.clickUp();
		},
		mainloop:function(){
			var self = this;
			this.oTimer=setInterval(function(){
				self.ctx.clearRect(0,0,self.canvasId.width,self.canvasId.height);
				self.oFrames.update();
				self.ctx.font="20px 黑体";
				self.ctx.fillText("fps:"+self.oFrames.realFps,10,40);
				self.ctx.fillText("fpsno:"+self.oFrames.currentNum,10,60);

				self.fangzi.update();
				self.fangzi.render();

				self.shu.update();
				self.shu.render();

				self.diban.update();
				self.diban.render();

				self.bird.update();
				self.bird.render();

				if(self.oFrames.currentNum%120==0)
				{
					self.arr.push(new pipe({imageObj:self.images}));
				}
				
				for(var i = 0 ; i < self.arr.length ; i++)
				{
					self.arr[i].update();
					self.arr[i].render();
				}
				
			},1000/this.fps);
		},
		stop:function(){
			clearInterval(this.oTimer);
		}
	});
})(window);