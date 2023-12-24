// const { default: styled } = require("styled-components");
import styled from "styled-components";

export const Button = styled.button`
    background: #009036;
    color: red;
    border: none;
    padding: 1em 2em;
    &:hover {
        background: #009f3d;
    }
`

// export const Button = styled.button`
//     // background: ${(props) => props.state ? "transparent" : "#009036"} ;
//     background: ${function(props) {
//         if(props.state === "danger") {
//             return "red"
//         } else if (props.state === "warning") {
//             return 'orange'
//         } else if (props.state === "success") {
//             return "green"
//         }
//     }};
//     color: black;
//     border: ${function (props) {
//         if(props.acheter) {
//             return ".3em solid #009036";
//         }
//         else {
//             return "none";
//         }
//     }};
//     padding: 1em 2em;
//     &:hover {
//         background: #009f3d;
//     }
// `

// héritage
export const ButtonAcheter = styled(Button)`
    background: transparent;
    border: .3em solid #009036;
`