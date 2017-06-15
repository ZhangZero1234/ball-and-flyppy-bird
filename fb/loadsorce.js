(function(){
	window.loadsource = Class.extend({
		init:function(){
			this.readyimage = 0;
			this.images = {};
		},
		loadImage:function(jsonUrl,callback){
			var self = this;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4)
				{
					if(xhr.status>=200||xhr.status<300||xhr.status==304)
					{
						var Object =JSON.parse(xhr.responseText);
						for(var i = 0 ; i < Object.images.length;i++)
						{
							var image = new Image();
							image.i = i;							
							image.src = Object.images[image.i].src;
							image.onload = function(){
								// console.log(this.i);
								self.readyimage++;
								self.images[Object.images[this.i].name] = this;

								callback(self.readyimage,Object.images.length,self.images,Object.images);
								// callback = function(self.readyimage,Object.images.length,self.images,Object.images){
									
								// }
							}
						}
						

					}
				}
			}
			xhr.open("get",jsonUrl,true);
			xhr.send(null);
		}

	});
})(window);