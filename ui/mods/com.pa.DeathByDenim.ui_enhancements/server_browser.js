(function() {

	// Restore filter settings.
	if(!_.isUndefined(localStorage.uienhancements_serverbrowsersettings))
	{
		var filtersettings = decode(localStorage.uienhancements_serverbrowsersettings);
		console.log(filtersettings);
		model.gameStateFilter(filtersettings['gameStateFilter']);
		model.gameStatusFilter(filtersettings['gameStatusFilter']);
		model.gameModeFilter(filtersettings['gameModeFilter']);

		model.planetCountMinFilter(filtersettings['planetCountMinFilter']);
		model.planetCountMaxFilter(filtersettings['planetCountMaxFilter']);
		model.playerCountMinFilter(filtersettings['playerCountMinFilter']);
		model.playerCountMaxFilter(filtersettings['playerCountMaxFilter']);
		model.regionFilter(filtersettings['regionFilter']);
		model.gameTagFilter(filtersettings['gameTagFilter']);
		model.lockedFilter(filtersettings['lockedFilter']);
	}


	// Remember filter settings.
	$(window).unload(function() {
		console.log("Saving settings");
		var filtersettings = {
			'gameStateFilter': model.gameStateFilter(),
			'gameStatusFilter': model.gameStatusFilter(),
			'gameModeFilter': model.gameModeFilter(),

			'planetCountMinFilter': model.planetCountMinFilter(),
			'planetCountMaxFilter': model.planetCountMaxFilter(),
			'playerCountMinFilter': model.playerCountMinFilter(),
			'playerCountMaxFilter': model.playerCountMaxFilter(),
			'regionFilter': model.regionFilter(),
			'gameTagFilter': model.gameTagFilter(),
			'lockedFilter': model.lockedFilter()
		};

		localStorage.uienhancements_serverbrowsersettings = encode(filtersettings);
	});

})();
