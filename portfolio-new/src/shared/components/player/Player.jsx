import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import {IoPlay, IoPause,} from 'react-icons/io5'
import {BiSkipNext, BiSkipPrevious} from 'react-icons/bi'


const PlayBox = styled.div`

width: 250px;
height: auto;
padding: 10px;
background-color: #111;
display: flex;
position: relative;

gap: 15px;

p{
    font-size: 20px;
    padding: 5px;
    background-color: #111;
    color: white;
    z-index: 120;
    position: absolute;
    cursor: pointer;
}

h2{
    color: white;
    position: absolute;
    font-family: var(--font-mont);
   width: 100%;
    font-size: 18px;
    z-index: 10;
    
    top: 70%;
    left: 50%;
    transform: translate(-50%, 0);
}

div{
    width: auto;
    height: auto;
    display: flex;
  
    position: absolute;
    gap: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    

}
button{
    background-color: transparent;
    border: 0;
    color: white;
    cursor: pointer;     
    transition: 0.2s ease-in;
    
}
button:hover{
    color: black;
}
img{
    width: 100%;
    height: 50%;
    object-fit: contain;
}

`



const Player = ({imgSrc, audioSrc,name, setModal}) => {


    const [play,setPlay]= useState(false)
    const audioRef = useRef(null)
    const btRef = useRef(null)
    const [pos, setPos]=useState(1)

    const toggle =()=>{
        if(audioRef.current.play){
            audioRef.current.play()
            
           
            setPlay(true)
        }else{
            audioRef.current.pause()
            setPlay(false)
        }
    }

    const fechar = ()=>{
        setModal(true)
        audioRef.current.pause()

    }

    const next = ()=>{
        audioRef.current.play()
        setPlay(false)
        setPos(pos + 1)
        
    
    }
    const prev = ()=>{
        setPos(pos - 1)
        setPlay(false)
     }
    return ( 
        
        <PlayBox >
            <img src={imgSrc[pos]} alt="" />
            <p onClick={fechar}>{pos}</p>
            <audio ref={audioRef} src={audioSrc[pos]}></audio>
            <div>
            <h2>{name[pos]}</h2>
            <button ref={btRef} onClick={prev} ><BiSkipPrevious fontSize='45'/></button>
            <button onClick={toggle}>{play ? <IoPause/> : <IoPlay/>}</button>
            <button onClick={next}><BiSkipNext fontSize='45'/></button>
            </div>
        </PlayBox>
     );
}
 
export default Player;