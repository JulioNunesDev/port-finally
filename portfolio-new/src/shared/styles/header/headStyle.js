import { keyframes } from "styled-components";
import styled from "styled-components";

const fadeIn = keyframes`
from {
opacity: 0;
}
to{
opacity: 1;
}
`

 export const HeaderBox = styled.header`
width: 100%;
height: 75px;
display: flex;
justify-content: center;
align-items: center;


nav{
    width: 100%;
    height: auto;

    ul{
        display: flex;
        justify-content: space-between;
        list-style: none;
        
        
        li {
            position: relative;
            width: 100%;
           height: 100%;
           
            .lista-links{
            
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, 15%);
                background-color: var(--color-three);
                width:100%;
                height: auto;
                animation: 0.3s ${fadeIn} ease-in-out;
                border-radius: 5px;
                
                .Lista-SubLiks{
                    flex-direction: column;
                    
                    
                    a{
                        margin-top: 10px;
                        color: #111;
                        font-family: var(--font-sora);
                        text-decoration: none;
                        font-weight: bold;
                        width: 100%;
                        height: auto;
                        padding: 10px;
                        margin: 0;
                    }

                     a:hover{
                         
                         background-image: linear-gradient(1deg, var(--color-um),
             var(--color-two));
           
                     }
                   
                }
            }
        }
        .Links{
            text-decoration: none;
            font-size: 22px;
            font-weight: bold;
            color: var(--color-three);  
        }


    }
    
}






`