describe("Parse Duration Module", function(){

	it("can be required", function(){

		var parseDuration = require('parse-duration');

	});

	describe("Parsing", function(){

		var parse = require('parse-duration');

		it("can detect miliseconds passed as numbers", function(){

			expect(parse(1000)).toBe(1000);

		});

		it("can detect miliseconds passed as a string", function(){


			expect(parse('103ms')).toBe(103);

		});

		it("can detect seconds passed as a string", function(){


			expect(parse('5s')).toBe(5000);

		});

		it("can detect minutes passed as a string", function(){


			expect(parse('5m')).toBe(300000);

		});

		it("can detect hours passed as a string", function(){

			expect(parse('3h')).toBe(10800000);

		});

		it("can detect days passed as a string", function(){

			expect(parse('4d')).toBe(345600000);

		});

		it("can detect weeks passed as a string", function(){

			expect(parse('5w')).toBe(3024000000);

		});

	})

});