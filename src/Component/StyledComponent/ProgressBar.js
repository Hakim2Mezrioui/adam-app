import styled, {keyframes} from "styled-components";

const ProgressBarAnime = keyframes`
    0% {
        width: 0;
        background: red;
    }
    100% {
        width: 100%;
        background: green;
    }
`

const ProgressBar = styled.div`
    height: 2em;
    background: coral;
    width: ${function (props) {
        return `${props.width}%`
    }};
    animation: ${ProgressBarAnime} 1s 2s infinite alternate;
    //name duration delay funcition 
`

export default ProgressBar;