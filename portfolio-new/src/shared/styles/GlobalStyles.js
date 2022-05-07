import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-mont);
}
:root{
--font-beau: 'Beau Rivage', cursive;
--font-bebas: 'Bebas Neue', cursive;
--font-fira: 'Fira Sans', sans-serif;
--font-great: 'Great Vibes', cursive;
--font-mont: 'Montserrat', sans-serif;
--font-noto: 'Noto Sans', sans-serif;
--font-popis: 'Poppins', sans-serif;
--font-roboto: 'Roboto', sans-serif;
--font-saira: 'Saira', sans-serif;
--font-sora: 'Sora', sans-serif;


--color-um: #3DD9BC;
--color-two: #0C70F2 ;
--color-three: #f2f2f2;
--color-four: #0B438C;
--color-fundo: #3876F2;
--color-exps: #F29F05;
}

html{
    scroll-behavior: smooth;
}
`