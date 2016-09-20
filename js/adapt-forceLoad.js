define([ "coreJS/adapt" ], function(Adapt) {

	Adapt.once("app:dataReady", function() {
		if (!Adapt.config.get("_forceLoad")) return;

		$("<div/>")
			.addClass("force-load")
			.text("Force Load enabled")
			.appendTo($("#wrapper"));

		$.fn.imageready.timeoutDuration = 250;

	});

});
