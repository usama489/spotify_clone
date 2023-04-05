const music = new Audio('./audio/1.mp3');
// music.play();


// making object of all songs 
const songs = [
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
 
    {
        id:"3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
]
// making array of all songs using className songItem
// i fetch value of songItem like index no. 0,1,2,3,4 and so on...
/* e fetch full <li> of class "songitem" like  
               <li class="songItem">
                <span>07</span>
                <img src="./img/1.jpg" alt="">
                <h5>On My Way <br> <div class="subtitle">Alan Waler</div></h5>
                <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
               </li>
*/
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
});

//masterplay (bottom box icons ->  play button only(music play) and wave  )
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }

    
});
// make background blur of menu side songs when we click on that song
 const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105, .0)';
    })
 };
 // change all song play button to pause button after clicking for play
  const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
       // console.log("makeallplay")
      //  console.log(element.id)
        element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
 }; 
 




// changing music src and poster img and masterplay titles according to user click on song with the help of detecting id
/* els is ana array in which like thesse all object available which is present in 
song variable -> {id: '1', songName: ' On My Way <br>
<div class="subtitle">Alan Walker</div>', poster: 'img/1.jpg'} */
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        let index = el.target.id;
         music.src = `./audio/${index}.mp3`;
        poster_master_play.src = `./img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
/* songs.filter keep an object of all songs as an array in same manner like it available in songs
 variable and then it return info of particular song in songTitles , userclick on particular songs matched id with song varible id
 indirectly it check whether user clicked on song and id gernerated of that song is available or not in song variable that it can take info from song obj like title, songsName  
  */
        let songTitles = songs.filter((els)=>{
            
            return els.id == index;

        });
        songTitles.forEach(elss =>{
          console.log(elss);
            let {songName} = elss;
            title.innerHTML = songName;

        });
       
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105,105,105, .1)';
        makeAllPlays();
        //  console.log("after makeplay runs")
          el.target.classList.remove('bi-play-circle-fill');
          el.target.classList.add('bi-pause-circle-fill');
          wave.classList.add('active1');

       

    })
});
// workking on currenrtStart and currentEnd and Seekbar

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
  
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);  
    let sec = Math.floor(music_dur%60);   

    if (sec<10) {      // seconds less then show two  digit
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})






























/* popular song left and right scroll button */
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click', ()=>{
    
    pop_song.scrollLeft += 330;

});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

/* popular Artist left and right scroll button */

let pop_art_left = document.getElementById('pop_artist_left');
let pop_art_right = document.getElementById('pop_artist_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;

})

















