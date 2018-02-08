 getSongs('Depeche', 15)

 whenSongsReadyDo(
   function(){
     var mySongs = getSongTitlesAndArtists()
     displaySongsList(mySongs)
     setupPlayer()
   }
 )