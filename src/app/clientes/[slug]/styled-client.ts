import { styled } from 'styled-components';

type Props = {
    title: string;
}

export const WrapperClient = styled.main`
    margin-top:1rem;
    color: ${props => props.theme.colors.text.text100};
    display:flex;
    flex-direction:column;
    gap: 2rem;
`;

export const Section = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;


export const Divisor = styled.div`
    background: ${props => props.theme.colors.background.bgdark + '33'};
    width: 90%;
    height:0.3rem;
    border-radius: 0.2rem;
`;

export const HeaderSection = styled.div`
    width: 90%;
    height: fit-content;
`;

export const SectionInfo = styled.div`
    width: 90%;
    height: 10vh;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template: 
    "nome sobrenome" 
    "telefone documento"
    "email email" 
    ;

    
    #nome{
        grid-area: nome;
    }

    #sobrenome{
        grid-area: sobrenome;
    }

    #telefone {
        grid-area: telefone;
    }

    #documento {
        grid-area: documento;
    }

    #email{
        grid-area: email;
    }

    gap: 2rem;
`;

export const SectionHouse = styled.div`
    width: 90%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template: 
    "rua rua numero"
    "tipo bairro bairro"
;
    #rua{
        grid-area: rua;
    }

    #numero{
        grid-area: numero;
    }

    #tipo{
        grid-area: tipo;
    }
    #bairro{
        grid-area: bairro;
    }

    gap: 2rem;
`;

export const SectionMoney = styled.div`
    display: flex;
    flex-direction:row;
    width: 90%;
    height: fit-content;
    gap: 2rem;    
    justify-content: center;
`;

