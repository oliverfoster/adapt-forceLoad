define([ "coreJS/adapt" ], function(Adapt) {

	Adapt.on("app:dataReady", function() {
		if (!Adapt.config.get("_forceLoad")) return;

		$("<div/>")
			.addClass("force-load")
			.text("Force Load enabled")
			.appendTo($("#wrapper"));

		Adapt.on("menuView:postRender pageView:postRender", function(view) {
			_.defer(function() { view.model.setOnChildren({ _isReady: true }); });
		});
	});

});