(function(){
	var increaseRad = $('#increase-radius'),
		reduseRad = $('#reduce-radius'),
		create = $('.crate'),
		maxRadius = 20,
		minRadius = 0,
		bgColorInput = $('#bg-color');
		brColorInput = $('#border-color'),
		codeResultArea = $('#code-result');

	increaseRad.on('click', function(){
		var currentRadius = create.css('border-radius'),
			step = $('#step').val(),
			newRadius = (parseInt(currentRadius) + parseInt(step));

		if(newRadius > maxRadius){
			newRadius=maxRadius;
			$(this).addClass('disabled');
		}
		if (newRadius > minRadius) {
			reduseRad.removeClass('disabled');
		};

		create.css({
			'border-radius' : newRadius
		})
		updateResult();
	});

	reduseRad.on('click', function(){
		var currentRadius = create.css('border-radius'),
			step = $('#step').val(),
			newRadius = (parseInt(currentRadius) - parseInt(step));

		if(newRadius < minRadius){
			newRadius=minRadius;
			$(this).addClass('disabled');
		}
		if (newRadius < maxRadius) {
			increaseRad.removeClass('disabled');
		};

		create.css({
			'border-radius' : newRadius
		})
		updateResult();
	});

	bgColorInput.on('change', function(){
		var newColor = $(this).val();
		create.css({
			'background-color' :  '#' + newColor
		});
		updateResult();
	});

	brColorInput.on('change', function(){
		var newColor = $(this).val();
		create.css({
			'border-color' :  '#' + newColor
		});
		updateResult();
	});

	var updateResult = function(){
		var borderRad = create.css('border-radius'),
			bgcolor = create.css('background-color'),
			brcolor = create.css('border-color');
			
		codeResultArea.text(
			'-moz-border-radius :'+ borderRad + ";\n" +
			'-webkit-border-radius :'+ borderRad + ";\n" +
			'border-radius :'+ borderRad + ";\n" +
			'border-color :'+ brcolor + ";\n" +
			'background-color :' +bgcolor + ";"
		)
	}

	updateResult();

}());
