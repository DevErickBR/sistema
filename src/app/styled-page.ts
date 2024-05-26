import styled from "styled-components";


export const Wrapper = styled.main`
    display:grid;
    grid-template-rows: repeat(3, 1fr);
    width:100%;
    height: calc(100% - 4rem);
`;

export const Menu1 = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Menu2 = styled.div`
    display:grid;
    grid-template-columns: repeat(2 ,1fr);
    align-items:center;
    justify-items:center;
    width: 100%;
`;