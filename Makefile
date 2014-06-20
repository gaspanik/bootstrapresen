init:
	mkdir fonts less js
	cp bower/bootstrap/fonts/* ./fonts/
	cp bower/bootstrap/less/* ./less/
	cp bower/bootstrap/dist/js/bootstrap.min.js bower/jquery/dist/jquery.min.js bower/jquery/dist/jquery.min.map bower/onepage-scroll/jquery.onepage-scroll.min.js ./js
	cp bower/onepage-scroll/onepage-scroll.css ./css