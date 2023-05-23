import {ButtonGoToImages, Container, ControlsContainer, ImageContainer, Title} from "./styles"
import {FaArrowLeft, FaArrowRight, FaCamera} from "react-icons/fa"
import React, { useEffect, useRef, useState } from "react"
import socketIOClient, { Socket } from "socket.io-client"

const Home:React.FC = ()=>{


    const ws = socketIOClient("http://192.168.1.162:5000/")

    useEffect(() => {
        
        ws.on('connect', function() {
            alert("connected")
        });

        
    }, []);

    function turnRight1(){
        ws.emit('turnRight1');
    }

    function turnLeft1(){
        ws.emit('turnLeft1');
    }

    function turnRight2(){
        ws.emit('turnRight2');
    }

    function turnLeft2(){
        ws.emit('turnLeft2');
    }


    return(
        <>
            <Container>
                <Title> EasySecurity <i><FaCamera></FaCamera> </i> </Title>
                <div>
                    <ImageContainer>
                        <img src="http://192.168.1.162:5000/video_feed" alt="" />
                    </ImageContainer>
                    <ControlsContainer>
                        <button onClick={turnLeft1}><FaArrowLeft></FaArrowLeft></button>
                        <button onClick={turnRight1}><FaArrowRight></FaArrowRight></button>
                    </ControlsContainer>
                </div>
                
                <div>
                    <ImageContainer>
                        <img src="http://192.168.1.162:5000/video2_feed" alt="" />
                    </ImageContainer>
                    <ControlsContainer>
                        <button onClick={turnLeft2}><FaArrowLeft></FaArrowLeft></button>
                        <button onClick={turnRight2}><FaArrowRight></FaArrowRight></button>
                    </ControlsContainer>
                </div>
                <ButtonGoToImages >
                    <ControlsContainer>
                        <button>
                            <a href="/images/1">
                                <FaCamera></FaCamera> Images 
                            </a>
                        </button>
                        <button>
                            <a href="/images/1">
                                <FaCamera></FaCamera>  Images 
                            </a>
                        </button>
                    </ControlsContainer>
                </ButtonGoToImages>
      
            </Container>
        </>
    )
}

export default Home