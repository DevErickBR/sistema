import styled from "styled-components";

export const WrapperTitle = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

export const Title = styled.h1`
    font-size: 2.5;
    text-transform: capitalize;
`

export const More = styled.button`
    background: ${props => props.theme.colors.background.bgcard};
    padding: 0.3rem;
    border: none;
    color: ${props => props.theme.colors.text.tx200};
    border-radius: 0.3rem;
    transition: all ease 100ms;
    @keyframes Clicker {
        0%{
            transform: scale(1.1);
        };
        50%{
            transform: scale(1.05);
        };
        100%{
            transform: scale(1);
        };
    }

    &:active{
        animation: Clicker 2s;
        
    };
`;