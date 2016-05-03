let TextFactory = function () {
	var factory = {};

	var main = {
		"name" : "Antoine De Cacqueray",
		"function" : "Game Designer",
		"presentation" : {
			"FR" : "## Bienvenue",
	 		"EN" : "## Welcome"
		}
	}

	factory.getMain = () => {
		return main;
	};


  return factory;
};

export default TextFactory;