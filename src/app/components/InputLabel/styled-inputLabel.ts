import styled from "styled-components";

export const WrapperInput = styled.div`
    height:fit-content;
    position:relative;
`;

export const Input = styled.div`
    background-color:${props => props.theme.colors.background.bgdark + '0D'};
    border-radius: 0.4rem;
    input {
        border: none;
        background-color: transparent;
        text-transform: capitalize;
        padding: .4rem;
        font-size: .9rem;
        &:focus{
            outline: none;
        }
    }

`;

export const Label = styled.label`
    background:none;
    color: ${props => props.theme.colors.text.tx100};
    font-weight: bolder;
    font-size: 1.2rem;
    position: absolute;
    left:.3rem;
    top: -1.3rem;
    text-transform: capitalize;
`;

