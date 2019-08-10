
function renderAlbums(albums) {
// return html for artist section
return albums.map(renderAlbumSection).join('')
}
function renderAlbumSection (albumInfo) {
    return `
    <div>
        <div>
            <h1 style="text-transform: uppercase;">${albumInfo.artist}</h1>
        </div>
        <hr>
        <div>
            <h2>${mapAlbum(albumInfo.albums)}</h2>
        </div>
    </div>
    `
}
function mapAlbum (toAlbumDetail) {
    return toAlbumDetail.map(mapAlbumDetail).join('')
}
function mapAlbumDetail (albumDetail) {
    return `
    <div>
        <div>
            <div>
                <img style="width: 100px; display: inline;" src="${albumDetail.albumCover}">
                <span><h2 style="display: inline;">${albumDetail.title}</h2></span>
            </div>
            <div>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${medianSongs(albumDetail.songs)}
                </ul>
            </div>
        </div>
    </div>
    `
}
function medianSongs (songList) {
    return songList.map(songDetail).join("")
}
function songDetail (songName) {
    return `
    <li style="font-size: 16px;">
        <span>${songName.title}</span>
        <span style="float: right;">${songName.length}</span>
    </li>
    <hr>
    `
}


function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}