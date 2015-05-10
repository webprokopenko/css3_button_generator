(function(){

	var app = {
		initialize: function(){
			this.setUpListenners();
			this.updateResult();
		},
		setUpListenners: function(){
			$('#increase-radius').on('click', $.proxy(this.increaseRadius, this));
			$('#reduce-radius').on('click', $.proxy(this.reduceRadius, this));

			$('#bg-color').on('change', $.proxy(this.bgChangeColor, this));
			$('#border-color').on('change', $.proxy(this.brChangeColor, this));


		},
		bgChangeColor: function(){
			var newColor = $('#bg-color').val();
			this.create.css({
				'background-color' :  '#' + newColor
			});
			this.updateResult();
		},
		brChangeColor: function(){
			var newColor = $('#border-color').val();
			this.create.css({
				'border-color' :  '#' + newColor
			});
			this.updateResult();
		},

		create : $('.crate'),
		increaseRad : $('#increase-radius'),
		reduseRad : $('#reduce-radius'),
		MAXRADIUS : 20,
		MINRADIUS : 0,

		increaseRadius: function(){
			var currentRadius = this.create.css('border-radius'),
			step = $('#step').val(),
			newRadius = (parseInt(currentRadius) + parseInt(step));

			if(newRadius > this.MAXRADIUS){
				newRadius=this.MAXRADIUS;
				this.increaseRad.addClass('disabled');
			}
			if (newRadius > this.MINRADIUS) {
				this.reduseRad.removeClass('disabled');
			};

			this.create.css({
				'border-radius' : newRadius
			})
			this.updateResult();
		},
		reduceRadius: function(){
			var currentRadius = this.create.css('border-radius'),
			step = $('#step').val(),
			newRadius = (parseInt(currentRadius) - parseInt(step));

			if(newRadius < this.MINRADIUS){
				newRadius=this.MINRADIUS;
				this.reduseRad.addClass('disabled');
			}
			if (newRadius < this.MAXRADIUS) {
				this.increaseRad.removeClass('disabled');
			};

			this.create.css({
				'border-radius' : newRadius
			})
			this.updateResult();
		},
		updateResult : function(){
			var borderRad = this.create.css('border-radius'),
			bgcolor = this.create.css('background-color'),
			brcolor = this.create.css('border-color'),
			codeResultArea = $('#code-result');

		codeResultArea.text(
			'-moz-border-radius :'+ borderRad + ";\n" +
			'-webkit-border-radius :'+ borderRad + ";\n" +
			'border-radius :'+ borderRad + ";\n" +
			'border-color :'+ brcolor + ";\n" +
			'background-color :' +bgcolor + ";"
			)
		}

	}

	app.initialize();

}());
