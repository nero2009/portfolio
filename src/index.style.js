import styled from 'styled-components'

export const Background = styled.div`
    position:fixed;
    left: 10vw;
    width:80vw;
    top:10vh;
    height:80vh;
    background-image: url(${require('../../assets/1.jpg')});
    background-color:E5E5E5;
    opacity: 0.2;
    z-index: -99;
    background-size:80%;
    background-repeat: no-repeat;
    background-position:center;

`;