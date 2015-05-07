
Object.prototype.extend = function (extension) {
	var hasOwnProperty = Object.hasOwnProperty;
	var object = Object.create(this);

	for (var property in extension)
		if (hasOwnProperty.call(extension, property) ||
			typeof object[property] === "undefined")
				object[property] = extension[property];

	return object;
};

Object.prototype.add = function( extension ){
	for (var property in extension )
		this[ property ] = extension[ property ];
	return this;
};

(function(){
	var Fraction = {

		changeDen : function( newDen ){
			this.num *= newDen / this.den;
			this.den = newDen;
		},

		create:function( num , den ){
			return this.extend({
				num : num,
				den : den,
				changeDen : (function( newDen ){
					this.prototype.changeDen.apply( this,[ newDen ] );
				}).bind(this)
			});
		}

	};
	window.Fraction = Fraction;
})();

(function(){
	var isPrime = function isPrime( num ){}
})();


function test () {
}
