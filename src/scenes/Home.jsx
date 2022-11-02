import AlbumList from "../components/AlbumList"
import Header from "../components/Header"

export default function Home(){
    return(
        <>
        <Header title={'Best selling albums'} />
        <AlbumList/>
        </>
    )
}