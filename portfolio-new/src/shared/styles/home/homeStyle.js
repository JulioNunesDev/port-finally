import styled, { keyframes } from "styled-components";

export const Content = styled.main`
position: relative;

.player{
  position: fixed;
  z-index: 10;
  top: 50px;
  right: 0;
}

`;

export const PageHome = styled.section`
  width: 100%;
  height: auto;

  #myVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
   
  }

  .titles-home {
    width: 100%;
    height: 700px;

    display: flex;

    .leftContent {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      h1 {
        font-family: var(--font-sora);
        font-size: 45px;
        background-image: linear-gradient(
          45deg,
          var(--color-um),
          var(--color-two)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow( 2px 2px 5px rgba(0, 0, 0, 0.3));
      }

      p {
        color: white;
        font-size: 20px;

      }

      .boxBtn {
        display: flex;
        gap: 10px;
      }
    }

    .rightContent {
      flex: 1;
    }
    .btn {
      button {
        width: 120px;

        border: 2px solid green;
        border-image-source: linear-gradient(
          100deg,
          var(--color-um),
          var(--color-two)
        );
        border-image-slice: 2;
        background-color: transparent;
        color: #fff;
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        font-family: var(--font-fira);
        font-weight: bold;
        transition: 0.3s ease-in;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      }

      button:hover {
        background-image: linear-gradient(
          100deg,
          var(--color-um),
          var(--color-two)
        );
        color: #111;
      }
    }
  }

  .exps {
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    gap: 15px;

    .card--exps {
      width: 280px;
      height: auto;
      background-color: #292b2e;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;

      border-radius: 5px;

      .image {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        margin-right: 15px;
        border-radius: 50%;
      }

      .title--exps {
        h2 {
          color: var(--color-exps);
        }
        p {
          color: #fafafa;
        }
      }
    }
  }
`;




export const PageSobre = styled.section`
width: 100%;
height: auto;
position: relative;
top: 50px;
.sobre{
    width: 100%;
    height: 800px;
    display: flex;
    background-color: #111;
    align-items: center;
    position: relative;
    .Content-image{
        flex: 1;

        position: relative;

        .man{
            z-index: 120;
            position: relative;
            top: 50px;
            transition: .2s ease-in-out;
        }

        .q2{
           position: absolute;
           left: 0;
           
           
        }
        .q1{
           position: absolute;
           left: 25%;
           z-index: 10;
        }

        .man:hover {
            top: 45px;
            
            

        }
    }

    .titles-sobre{
        flex: 1;
        z-index: 13;
        position: relative;


        h1{
            font-family: var(--font-mont);
            font-size: 35px;
            color: #fafafa;
            
        }

        h2{
            font-family: var(--font-mont);
            margin-bottom: 10px;
            color: var(--color-two);
            
        }

        p{
            font-family: var(--font-mont);
            color: white;
          font-size: 18px;
           
        }

        .btn {
            margin-top: 15px;
            width: auto;
            height: 100%;
      button {
          height: 100%;
        width: auto;
        padding: 0 10px;
        border: 2px solid green;
        border-image-source: linear-gradient(
          100deg,
          var(--color-um),
          var(--color-two)
        );
        border-image-slice: 2;
        background-color: transparent;
        color: #fff;
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        font-family: var(--font-fira);
        font-weight: bold;
        transition: 0.3s ease-in;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      }

      button:hover {
        background-image: linear-gradient(
          100deg,
          var(--color-um),
          var(--color-two)
        );
        color: #111;
      }
    }
    }
}


`;
