import styled from "styled-components";

export const WrapperHeader = styled.div`
    width: 100vw;
    height: 6rem;
    background: ${props => props.theme.colors.background.bgdark};
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    z-index:99;
`;

export const WrapperUser = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    
`;

export const User = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: ${props => props.theme.colors.background.bg100};
    overflow:hidden;
    transform: scale(0.7);
    border: 4px solid transparent;
    
    .wrapper-icon-user{ 
        width:100%;
        height:100%;
        display:flex;
        align-items:end;
        justify-content:center;
        font-size: 4rem;
        svg{
            color: ${props => props.theme.colors.background.bgdark + '80'};
        }
    }
`;
export const WrapperSeach = styled.div`
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Search = styled.div`
    display:grid;
    grid-template-columns: 1fr 6fr;
    background: ${props => props.theme.colors.background.bg100};
    border-radius: 1rem;
    width: 95%;
    height: 70%;
    overflow:hidden;
    .wrapper-icon {
        display:flex;
        align-items:center;
        justify-content:space-around;
        svg {
            font-size: 2rem;
            color: ${props => props.theme.colors.background.bgdark + '80'};
        }

        &::after{
            content: '';
            height: 2rem;
            width: 0.2rem;
            border-radius: 0.2rem;
            background-color:${props => props.theme.colors.text.tx100 + '66'};
        }
    }
    .wrapper-input{
        display:flex;
        align-items:center;
        
        ::-webkit-input-placeholder{
            text-align:center;
            font-size: 1.3rem;
        }
        input{
            margin-left:0.5rem;
            width: 100%;
            height:80%;
            border:none;
            background-color:transparent;
            font-size: 2rem;

            &:focus{
                outline:none;
            }
        }
    }   
    
`;

export const WrapperHouse = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    svg{
        font-size:2.5rem;
        color: #edecea;
    }
`;