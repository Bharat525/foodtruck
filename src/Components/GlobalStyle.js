import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family: 'Inter', sans-serif;


}

@media screen and (max-width: 480px) {

    body{
        .main-container{
            flex-direction:column;
            .map{
                width:100%;
            }
        }
    }






}




`

export default GlobalStyle