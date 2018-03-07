getSongs("Stranger Things",5);

whenSongsReadyDo(
function(){
	var mySongs = getSongTitlesAndArtists();
	displaySongsList(mySongs);
	setupPlayer();
}
)