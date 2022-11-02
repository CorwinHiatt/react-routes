import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";

export default function AlbumList(){
    const [AlbumList, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-c8.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    }, [])
    return(
        <main  className="album-list">
            {!AlbumList
            ?<h2>Loading ....</h2>
            :AlbumList.map(thisAlbum => (
                <AlbumCard
                key={thisAlbum.albumId}
                thisAlbum={thisAlbum} />
            ))
            }


        </main>
    )
}