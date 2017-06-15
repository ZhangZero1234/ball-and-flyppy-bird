(function(){
	window.fps = Class.extend({
		init:function(){
			this.currentNum = 0;
			this.t = new Date();
			this.realFps = 0;
			this.sFrame = 0;
		},
		update:function(){
			this.currentNum++;
			if(new Date() - this.t >=1000)
			{
				this.t = new Date();
				this.realFps = this.currentNum - this.sFrame;
				this.sFrame = this.currentNum;
			}
		}
	});
})(window);