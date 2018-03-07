getSongs("KraftyKuts",10);

whenSongsReadyDo(
	function(){
		var mySongs = getSongTitlesAndArtists();
		displaySongsList(mySongs);
		setupPlayer();
	}
)