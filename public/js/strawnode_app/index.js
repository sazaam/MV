

(function(){

// trace(module)
var express = require('Express') ;

// var router = require('./router') ;
var routes = require('./routes') ;

// var sazz = caca.id ;

var app = express() ;

app
	.set('view engine', 'jade')
	.set('views', '/js/jade/')
	.set('address', {
		home: '',
		base: location.protocol + '//' + location.host + location.pathname,
		// base: 'undefined' !== typeof __parameters ? __parameters.base : location.protocol + '//' + location.host + location.pathname,
		useLocale:true,
		defaultLocale:document.documentElement.getAttribute('lang')
}) ;

app
	.listen('JSAddress', function(e){
		
		// trace("DATA : ", window.Data) ;		

		app
			.createClient()
			// .get('/', router(window.Data))
			.get('/', routes)
			.initJSAddress() ;
			
	})
	.listen('load', function(e){
		// PAGE LOAD
		app.discard('load', arguments.callee) ;
		
		trace('window Fully Loaded') ;
	}) ;

})()

