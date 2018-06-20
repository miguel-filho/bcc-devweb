var move = new Array();
		move [0] = 'urso0.png';
		move [1] = 'urso1.png';
		move [2] = 'urso2.png';
		var anda = 0;
		function ursoandando()
		{
			document.getElementById('foto').src = move[ anda ];
			anda++;
			if( anda == (move.length) ) anda = 0;
		}
		window.setInterval(ursoandando, 200);