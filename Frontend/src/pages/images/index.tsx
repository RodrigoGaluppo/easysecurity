import {ButtonGroup, Container,ImagesList, Title} from "./styles"
import {FaCamera} from "react-icons/fa"
import React, { useEffect, useState } from "react"
import api from "../../services/apiClient"
import { useParams } from "react-router"

interface Photo {
    address:string,
    cam: number,
    date: string
}

const Images:React.FC = ()=>{

    const [photos,setPhotos] = useState<Photo[]>([])
    let { page } = useParams();


    useEffect(() => {
        api.get(`getPhoto/${page}`).then(
            (res: any)=>{
                console.log(res);
                
                const photosArr = res.data.photos.map((photo:any)=>(
                    {
                        address:"http://192.168.0.199:5000/" + photo[0],
                        cam:photo[1],
                        date:photo[2]
                    }
                ))
                setPhotos(photosArr)
            }
        ).catch((err)=>{
            console.log(err);
            
        })
    }, []);

    return(
        <>
            <Container>
                <Title> EasySecurity - Images <i><FaCamera></FaCamera> </i> </Title>
                <ImagesList>

                {
                    photos.map((photo)=>(
                        <div>
                            <img src={photo.address} alt="" />
                            <a href={photo.address}>{photo.date}</a>
                        </div>

                    ))
                }

                </ImagesList>
                <ButtonGroup>
                    <button>
                        <a style={{color:"white"}} href={`${window.location.origin}/images/${
                            Number(page) - 1
                         }`}>
                            ««
                        </a>
                    </button>
                    <span>...</span>
                    <button>{page}</button>
                    <span>...</span>
                    <button>
                        <a style={{color:"white"}} href={`${window.location.origin}/images/${
                            Number(page) + 1
                         }`}>
                           »»
                        </a>
                        
                    </button>

                </ButtonGroup>
            </Container>
        </>
    )
}

export default Images