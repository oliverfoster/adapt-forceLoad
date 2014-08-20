/*
* Force Load
* License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
* Maintainers - Tom Greenfield
*/

define(function(require) {

	var Adapt = require("coreJS/adapt");

	Adapt.on("pageView:postRender", function(view) {
		if (Adapt.config.get("_forceLoad")) {
			console.log("Force Load: _forceLoad is set to true in config.json.");
			_.defer(function() {
				view.model.setOnChildren({ _isReady: true });
			});
		}
	});

});