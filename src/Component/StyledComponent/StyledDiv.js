import styled from "styled-components";

export const StyledDiv = styled.div`
    // background-color: ${(props) => props.etat == 1 ? "red" : "green" };
    background-color: ${function(props) {
        if(props.etat === 0) {
            return "red";
        }
        else if(props.etat === 1) {
            return "orange";
        } else if (props.etat === 2) {
            return "green";
        }
    }};
    // background-color: red;
    width: fit-content;
`;