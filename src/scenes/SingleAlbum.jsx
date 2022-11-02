import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import AlbumCard from "../components/AlbumCard"
import Header from "../components/Header"


export default function SingleAlbum() {
    const { albumId } = useParams()
    const [thisAlbum, setThisAlbum] = useEffect()
    useEffect(() => {
        fetch('https://albums-api-c8.web.app/albums')
        .then(response => response.json())
        .then(data => {
            const _thisAlbum = data.find(album => album.albumId === albumId)
           setThisAlbum(_thisAlbum) 
        })
        
    }, [albumId])
    return(
        <>
        <Header title={thisAlbum ? thisAlbum.album : 'loading...'}/>
        {thisAlbum
        
        ?<AlbumCard thisAlbum={thisAlbum}/>
        :null
        
        }
        </>
    )
}