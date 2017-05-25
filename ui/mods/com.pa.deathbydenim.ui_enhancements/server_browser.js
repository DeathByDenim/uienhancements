(function() {
/*
	if(api.content.usingTitans())
	{
		// Add Product filter
		model.productFilter = ko.observable('any');
		$('.section_controls').append(
			'                    <div class="form-group">\n' +
			'                        <label for="product">\n' +
			'                            <loc>Product</loc>\n' +
			'                        </label>\n' +
			'                        <select class="selectpicker form-control" id="Select2" name="product" data-bind="selectPicker: productFilter">\n' +
			'\n' +
			'                            <option value="any">Any</option>\n' +
			'\n' +
			'                            <option value="classic">Classic</option>\n' +
			'\n' +
			'                            <option value="titans">Titans</option>\n' +
			'                        </select>\n' +
			'                    </div>\n'
		);

		// Insert the new filter in the filtering algorithm. The only way
		// this can be done without completely rewriting the filter
		// function, is to just filter the source.
		model.allGames = ko.computed(function () {
			var gamelist = model.gameList().concat(model.lanGameList());
			if(model.productFilter() === 'classic')
			{
				_.remove(gamelist, function (game) {
					return game.titans;
				});
			}
			else if(model.productFilter() === 'titans')
			{
				_.remove(gamelist, function (game) {
					return !game.titans;
				});
			}

			return gamelist;
		});
	}
*/
})();
