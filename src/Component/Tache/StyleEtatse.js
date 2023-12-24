import styled from "styled-components";

export const StyleEtatse = styled.label`
    background-color: ${function(props) {
        if(props.etat === 0) {
            return "red";
        }
        else if(props.etat === 1) {
            return "orange";
        }
        else if(props.etat === 2) {
            return "green";
        }
    }}
`