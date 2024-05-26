import styled from "styled-components";

export const Wrapper = styled.div`
    width: 95%;
    height: 90%;
    border-radius: 1rem;
    background: ${props => props.theme.colors.background.bgcard};
    color: ${props => props.theme.colors.text.tx200};
    text-align:center;

    a{
        text-decoration: none;
        font-weight: 900;
        color: ${props => props.theme.colors.text.tx200};
    }
`;

export const WrapperInfos = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 900;
    svg{
        font-size: 7rem;
    }
`;

