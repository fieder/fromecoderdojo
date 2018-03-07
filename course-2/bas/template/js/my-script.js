getSongs('Monty Python',5);

whenSongsReadyDo(
	function(){
   		var mySongs = getSongTitlesAndArtists();
		displaySongsList(mySongs);
		setupPlayer();
	}
   )