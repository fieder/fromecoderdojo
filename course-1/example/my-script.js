
whenSongsReadyDo(loadSongsToPage)

 
function loadSongsToPage (){
 var mySongs = getSongTitlesAndArtists()
 displaySongsList(mySongs)
 setupPlayer()
 }

function putMusicOnThePage (query, songCount){
   getSongs(query, songCount)
   whenSongsReadyDo(loadSongsToPage)
 }

 putMusicOnThePage('Depeche', 10)