import styled from "styled-components";

export const WrapperHeader = styled.div`
    width: 100vw;
    height: 4rem;
    background-color: ${props => props.theme.colors.background.bg300};
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`;

export const WrapperUser = styled.div`
    background-color: red;
    display:flex;
    justify-content:center;
    align-items: center;
`;