define([ "coreJS/adapt" ], function(Adapt) {

	Adapt.once("app:dataReady", function() {
		if (!Adapt.config.get("_forceLoad")) return;

		var originalTimeoutValue = $.fn.imageready.timeoutDuration;

		$("<div/>")
			.addClass("force-load")
			.text("Force Load enabled")
			.appendTo($("#wrapper"))
			.on("click", function() {
				$.fn.imageready.timeoutDuration = originalTimeoutValue;
				this.remove();
			});

		$.fn.imageready.timeoutDuration = 250;

	});

});
