import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
   
});

import { Content } from "../../shared/styles/home/homeStyle";
import { PageHome } from "../../shared/styles/home/homeStyle";
import { PageSobre } from "../../shared/styles/home/homeStyle";

import videoFundo from '../../assets/backgrounds/mine.mp4'

import exps from '../../assets/logos/exps.svg'
import mark from '../../assets/logos/mark.svg'
import group from '../../assets/logos/group.svg'
import man from '../../assets/logos/man.png'
import quadroum from '../../assets/logos/quadroum.svg'
import quadrotwo from '../../assets/logos/quadrotwo.svg'

import Header from "../../shared/components/header/Header";
import { useState } from "react";

import drake from '../../musics/drake.mp3'
import its from '../../musics/kk.mp3'
import Player from '../../shared/components/player/Player';



const data = [
    {imgSrc: ['https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/04/drake-tootsie-slide.jpg', 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/05/675x450/1_harry_styles_as_it_was_music_video_harrys_house_2022_bandwagon-7708824.jpg?20220405175106?20220405175106'], 
     audioSrc: [drake,its],
     name: ['Drake - Tossie', 'Harry Styles - As It Was']
    }
]


const Home = () => {
    const [play, setPlay]= useState(false)
    const [modal, setModal]=useState(false)


    return ( 
        <Content>
            <div style={modal ? {display: 'none'} : {display: 'block'}} className="player" >
                
                {data.map(({imgSrc, audioSrc, name}) =>(
                <Player imgSrc={imgSrc} audioSrc={audioSrc} name={name}
                 setModal={setModal} modal={modal}/>
                ))}
            </div>
            <PageHome>
            <Header/>
            
            <video
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            autoPlay loop
             id="myVideo">
             <source src={videoFundo} type="video/mp4" />
            </video>
            <div className="titles-home">
                <div className="leftContent">
                <h1>FullStack Juninho</h1>
                <p>Conheça mais sobre mim abaixo</p>
                <div className="boxBtn">
                <div className="btn">

                 <button  onClick={()=>{
                const video = document.querySelector('#myVideo')
                if(play){
                    video.pause()
                    setPlay(false)
                }else{
                    video.play()
                    setPlay(true)

                }
            }}
            >{play ? 'Pausar': 'Play'}</button>
                </div>
                <div className="btn">
                    <button>See CV</button>
                </div>
                </div>
               

                </div>
                <div className="rightContent">

                </div>
            </div>
            <div className="exps">
                <div
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-easing="ease-in-back"
                data-aos-duration="1000"
                className="card--exps">
                    <div className="image">
                    <img src={exps} alt="Logo exps" />
                    </div>
                    <div className="title--exps">
                        <h2>5+</h2>
                        <p>Meses de Experiencia</p>
                    </div>
                </div>
                <div
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-easing="ease-in-back"
                data-aos-duration="1200"
                 className="card--exps">
                    <div className="image">
                    <img src={mark} alt="Logo exps" />
                    </div>
                    <div className="title--exps">
                        <h2>5+</h2>
                        <p>Meses de Experiencia</p>
                    </div>
                </div>
                <div 
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-easing="ease-in-back"
                data-aos-duration="1300"
                className="card--exps">
                    <div className="image">
                    <img src={group} alt="Logo exps" />
                    </div>
                    <div className="title--exps">
                        <h2>5+</h2>
                        <p>Meses de Experiencia</p>
                    </div>
                </div>
            </div>
            </PageHome>

            <PageSobre>
                <div className="sobre" >
                  
                    <div className="Content-image">
                        <img className="man"
                       data-aos="fade-up"
                       data-aos-anchor-placement="bottom-bottom"
                      
                       data-aos-offset="300"
                     
                       data-aos-easing="ease-in-sine"
                        src={man} alt="" />
                        <img className='q1' 
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-back"
                        data-aos-duration="500"
                        src={quadroum} alt="" />
                        <img className='q2'
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="400"
                        src={quadrotwo} alt="" />
                    </div>
                    <div className="titles-sobre">
                        <h1
                         data-aos="fade-up"
                         data-aos-anchor-placement="top-center">
                        Contando um pouco de mim</h1>
                        <h2>Onde posso começar?!</h2>
                        <p>se esse portfolio está no ar! para outras pessoas
                            verem isso já é incrivel da minha parte</p>

                            <div className="btn">
                            <button>Veja mais</button>
                             </div>
                    </div>
                </div>
            </PageSobre>

        </Content>
     );
}
 
export default Home;