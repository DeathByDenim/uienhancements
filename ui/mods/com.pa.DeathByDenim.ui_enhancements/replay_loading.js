(function() {

	// Increase the timeout from 5 seconds to 1 minute so to increase
	// the odds of the replay loading.
	model.heartbeat = function () {
		var heartbeatTimer = setTimeout(model.heartbeatFailed, 60000);
		model.send_message('heartbeat', {}, function (success, response) {
			if (success) {
				clearTimeout(heartbeatTimer);
			} else {
				model.heartbeatFailed();
			}
		});
	};


})();
