function download(){
    x = 0;
    while (true){
        if (songName[x].toLowerCase() == (document.getElementById('songname').value).toLowerCase()){
            window.open("https://sherry65-code.github.io/muzix_lib/"+document.getElementById('songname').value +".mp3","_self");
            break;
        }
        else if (x==totalLength-1){
            alert("Song not avaliable");
            break;
        }
        else{
            x+=1;
        }
    }
}