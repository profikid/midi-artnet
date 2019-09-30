var is = require('gm-is');

var parseTime = function( time ){

	if(is.number(time)){

		return time;

	}else if(is.string(time)){

		var match;

		match = time.match(/([0-9]+)s/);

		if(match && match[1]){

			return parseInt(match[1], 10) * 1000;

		}

		match = time.match(/([0-9]+)ms/);

		if(match && match[1]){

			return parseInt(match[1], 10);

		}

		match = time.match(/([0-9]+)m/);

		if(match && match[1]){

			return parseInt(match[1], 10) * 1000 * 60;

		}

		match = time.match(/([0-9]+)h/);

		if(match && match[1]){

			return parseInt(match[1], 10) * 1000 * 60 * 60;

		}

		match = time.match(/([0-9]+)d/);

		if(match && match[1]){

			return parseInt(match[1], 10) * 1000 * 60 * 60 * 24;

		}

		match = time.match(/([0-9]+)w/);

		if(match && match[1]){

			return parseInt(match[1], 10) * 1000 * 60 * 60 * 24 * 7;

		}

		return 0;

	} else {

		throw new Error("Invalid duration");

	}

};


module.exports = function( duration ){

	return parseTime( duration );

}
