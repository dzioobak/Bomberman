var Config = {
	width: 400,
	height: 400,
	offset: 10
};

var Game = function(){

	this.x = 10;
	this.y = 10;
	this.spriteScale = 3;
	this.spritesCoordinates = {
		player:
		{
			sourceX: 2,
			sourceY: 2,
			sourceWidth: 16,
			sourceHeight: 18
		}
	};

	this.drawImage = function(spriteCoordinate, destX, destY){
		this.ctx.drawImage(
			this.sprites,
			spriteCoordinate.sourceX,
			spriteCoordinate.sourceY,
			spriteCoordinate.sourceWidth,
			spriteCoordinate.sourceHeight,
			destX,
			destY,
			spriteCoordinate.sourceWidth * this.spriteScale,
			spriteCoordinate.sourceHeight * this.spriteScale
		);
	}

	this.initialize =  function(){
		var canvas = document.getElementById("canvas");
		this.sprites = document.getElementById("sprites");
		canvas.width = Config.width;
		canvas.height = Config.height;
		this.ctx = canvas.getContext("2d");

		this.keyListener()
	},

	this.keyListener = function(){
		var self = this;
        document.addEventListener("keydown", function (event) {
            switch (event.keyCode) {
                case 38:
                	self.y -= Config.offset;
                    break;
                case 39:
                	self.x += Config.offset;
                    break;
                case 40:
                	self.y += Config.offset;
                    break;
                case 37:
                	self.x -= Config.offset;
                    break;
            }
        });
	};

	this.render = function(){
		this.ctx.fillRect(0,0,Config.width, Config.height);
		this.drawImage(this.spritesCoordinates['player'], this.x, this.y);
	}

	this.update = function(){
		this.render();
		var self = this;
		setTimeout(function(){self.update.call(self)}, 100);
	}

	Game = function(){
		
	}
};

document.addEventListener("DOMContentLoaded", function(){
	console.log('DOM loaded');

	var game = new Game();
	game.initialize();
	game.update();


});