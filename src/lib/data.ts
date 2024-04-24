import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [

  {
    id: '1',
    albumId: 1,
    title: "Encava Mix",
    color: colors.orange,
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845f44a1dd16ce01d85f7eda8d",
    artists: ["Grupo Niche", "Frankie Ruíz", "Willie Colón y Héctor Lavoe", "Oscar D'León"],
  },


  {
    id: '2',
    albumId: 2,
    title: "DATA",
    color: colors.rose,
    cover:
      "https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4",
    artists: ["Tainy", "Jhayco", "Young Miko", "Arcángel", "Myke Towers", "Bad Bunny", "Alvaro Diaz", "Daddy Yankee"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Pure Rock & Roll",
    color: colors.gray,
    cover:
      "https://i.scdn.co/image/ab67706c0000da84ca966977380ba83ad20f968e",
    artists: ["Red Hot Chill Peppers", "Nirvana", "Guns N' Roses", "Deftones", "Slipknot"],
  },

  {
    id: '4',
    albumId: 4,
    title: "This is Eladio Carrión",
    color: colors.yellow,
    cover:
      "https://i1.sndcdn.com/artworks-l0JJMQNzg0X4w5Kv-1KhkFA-t500x500.jpg",
    artists: ["Eladio Carrión", "Bad Bunny", "Milo J", "50 Cent"],
  },


  {
    id: '5',
    albumId: 5,
    title: "This is Travis Scott",
    color: colors.red,
    cover:
      "https://images.hdqwalls.com/wallpapers/travis-scott-gq-mu.jpg",
    artists: ["Travis Scott", "21 Savage", "Playboi Carti", "Metro Boomin"],
  },
  {
    id: '6',
    albumId: 6,
    title: "This is Danny Ocean",
    color: colors.purple,
    cover:
      "https://i.pinimg.com/originals/c6/7b/86/c67b86b6db106471d7a786ed1d8fffb4.jpg",
    artists: ["Danny Ocean"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 4,
    "title": "Kemba Walker",
    "image": `https://i.scdn.co/image/ab67616d0000b27339ba283f4e6f92bd3e278d45`,
    "artists": ["Eladio Carrión y Bad Bunny"],
    "album": "Kemba Walker",
    "duration": "2:33"
  },

  {
    "id": 2,
    "albumId": 4,
    "title": "Si Salimos",
    "image": `https://i.scdn.co/image/ab67616d0000b273fc8563c0dc75d79e73c2dca0`,
    "artists": ["Eladio Carrión y 50 Cent"],
    "album": "3MEN2 KBRN",
    "duration": "3:21"
  },


  {
    "id": 3,
    "albumId": 4,
    "title": "Mbappe",
    "image": `https://i.scdn.co/image/ab67616d0000b273dce7a3fb14f5e841c0befbbf`,
    "artists": ["Eladio Carrión"],
    "album": "SEN2 KBRN2 V.2",
    "duration": "3:29"
  },

  {
    "id": 4,
    "albumId": 4,
    "title": "La Canción Feliz Del Disco",
    "image": `https://i.scdn.co/image/ab67616d0000b273ec105eaf625391e95540ba97`,
    "artists": ["Eladio Carrión y Milo J"],
    "album": "SOL MARIA",
    "duration": "3:04"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "Hp Freestyle",
    "image": `https://i.scdn.co/image/ab67616d0000b273dce7a3fb14f5e841c0befbbf`,
    "artists": ["Eladio Carrión"],
    "album": "SEN2 KBRN V.2",
    "duration": "2:03"
  },


  {
    "id": 1,
    "albumId": 2,
    "title": "PA SIEMPRE",
    "image": `https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4`,
    "artists": ["Tainy", "Arcángel", "Jhayco", "Myke Towers"],
    "album": "DATA",
    "duration": "5:57"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "FANTASMA | AVC",
    "image": `https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4`,
    "artists": ["Tainy y Jhayco"],
    "album": "DATA",
    "duration": "5:03"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "MOJABI GHOST",
    "image": `https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4`,
    "artists": ["Tainy y Bad Bunny"],
    "album": "DATA",
    "duration": "3:54"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "PARANORMAL",
    "image": `https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4`,
    "artists": ["Tainy y Alvaro Diaz"],
    "album": "DATA",
    "duration": "3:18"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "MAÑANA",
    "image": `https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4`,
    "artists": ["Tainiy", "Daddy Yankee", "Young Miko y Feid"],
    "album": "DATA",
    "duration": "2:57"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Welcome To The Jungle",
    "image": `https://i.scdn.co/image/ab67616d0000b27321ebf49b3292c3f0f575f0f5`,
    "artists": ["Guns N' Roses"],
    "album": "Appetite For Destruction",
    "duration": "4:34"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Otherside",
    "image": `https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595`,
    "artists": ["Red Hot Chill Peppers"],
    "album": "Californication",
    "duration": "4:15"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Come As You Are",
    "image": `https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf`,
    "artists": ["Nirvana"],
    "album": "Nevermind",
    "duration": "3:39"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "Lhabia",
    "image": `https://i.scdn.co/image/ab67616d00001e020b1129853982ea17845d4eb6`,
    "artists": ["Deftones"],
    "album": "Around the Fur",
    "duration": "4:11"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Psychosocial",
    "image": `https://i.scdn.co/image/ab67616d0000b273da77dba76fb945fcad684b68`,
    "artists": ["Slipknot"],
    "album": "Antennas to Hell",
    "duration": "4:44"
  },
  {
    "id": 1,
    "albumId": 1,
    "title": "Busca Por Dentro",
    "image": "https://i.scdn.co/image/ab67616d0000b27351c9409f7962e3aee55c74c6",
    "artists": ["Grupo Niche"],
    "album": "The Best",
    "duration": "5:54"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Deseándote",
    "image": "https://i.scdn.co/image/ab67616d0000b273680b3e53091edfb7aa56e52b",
    "artists": ["Frankie Ruíz"],
    "album": "Show",
    "duration": "4:43"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "El Día De Mi Suerte",
    "image": "https://i.scdn.co/image/ab67616d0000b273d401ded855f7fd747f0de19f",
    "artists": ["Willie Colón y Héctor Lavoe"],
    "album": "Lo Mato",
    "duration": "5:28"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Lloraras",
    "image": "https://i.scdn.co/image/ab67616d0000b2738e674cd720ca829ed385d76c",
    "artists": ["Oscar D'León"],
    "album": "Traicionera",
    "duration": "3:42"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Tú Con El",
    "image": "https://i.scdn.co/image/ab67616d0000b273680b3e53091edfb7aa56e52b",
    "artists": ["Frankie Ruíz"],
    "album": "Tú Con El",
    "duration": "5:01"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "FE!N",
    "image": "https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44",
    "artists": ["Travis Scott", "Playboi Carti"],
    "album": "Utopia",
    "duration": "3:11"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "goosebumps",
    "image": "https://upload.wikimedia.org/wikipedia/en/6/61/Travis_Scott_-_Birds_in_the_Trap_Sing_McKnight.png",
    "artists": ["Travis Scott"],
    "album": "Birds in The Trap Sing McKnight",
    "duration": "4:03"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "MY EYES",
    "image": "https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44",
    "artists": ["Travis Scott"],
    "album": "Utopia",
    "duration": "4:11"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "née nah",
    "image": "https://i.scdn.co/image/ab67616d0000b273bbdceba2bf1867d4966d0347",
    "artists": ["21 Savage", "Travis Scott"],
    "album": "American Dream",
    "duration": "3:40"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Trance",
    "image": "https://images.hungama.com/c/1/036/973/97016618/97016618_300x300.jpg",
    "artists": ["Metro Boomin", "Travis Scott"],
    "album": "HEROES & VILLAINS",
    "duration": "3:14"
  },


  {
    "id": 1,
    "albumId": 6,
    "title": "Me Rehuso",
    "image": "https://i.scdn.co/image/ab67616d0000b273d8243a13e6f41310a5fa7b96",
    "artists": ["Danny Ocean"],
    "album": "54+1",
    "duration": "3:25"
  },

  {
    "id": 2,
    "albumId": 6,
    "title": "Vuelve",
    "image": "https://i.scdn.co/image/ab67616d0000b273ce591c6a4ecad6ac5bae64d1",
    "artists": ["Danny Ocean"],
    "album": "54+1",
    "duration": "3:14"
  },

  {
    "id": 3,
    "albumId": 6,
    "title": "Dembow",
    "image": "https://i.scdn.co/image/ab67616d0000b273d8243a13e6f41310a5fa7b96",
    "artists": ["Danny Ocean"],
    "album": "54+1",
    "duration": "3:34"
  },

  {
    "id": 4,
    "albumId": 6,
    "title": "Swing",
    "image": "https://i.scdn.co/image/ab67616d0000b273d8243a13e6f41310a5fa7b96",
    "artists": ["Danny Ocean"],
    "album": "54+1",
    "duration": "2:35"
  },

  {
    "id": 5,
    "albumId": 6,
    "title": "Fuera Del Mercado",
    "image": "https://i.scdn.co/image/ab67616d0000b273be462dd5903fb27996331b48",
    "artists": ["Danny Ocean"],
    "album": "@dannocean",
    "duration": "2:39"
  },


]