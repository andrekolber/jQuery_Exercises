$('form').on('submit', function(e) {
	e.preventDefault();
	let title = $('#movie-title').val();
	let rating = $('#movie-rating').val();
	let movieList = $('.movie-reviews');
	let newMovie = $('<li></li>');
	newMovie.text(title + ': ' + rating + '/10');
	let removeBtn = $('<button></button>');
	removeBtn.text('Remove Rating');
	movieList.append(newMovie);
	newMovie.append(removeBtn);

	removeBtn.on('click', function(e) {
		removeBtn.parent().remove();
	});
});
