import styled from "styled-components";

export const WrapperTable = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    overflow-y:auto;
    max-height: 80%;
`;

export const Table = styled.table`
    width: 95%;
    font-size: 1.5rem;
    table-layout: fixed;
    border-collapse: collapse;
    
    
`;

export const HeaderTable = styled.thead`
    background: ${props => props.theme.colors.background.bgcard};
    top: 0;
    position:sticky;
    
`;

export const HeaderRow = styled.tr`
    height: 2.2rem;
    color: ${props => props.theme.colors.text.tx200};
`;

export const HeaderCell = styled.th`
        font-size: 1.3rem;
        text-transform: capitalize;
    	&:first-child{
            border-radius: .5rem 0 0 0
        }
        &:last-child{
            border-radius: 0 .5rem 0 0
        }
`;

export const BodyTable = styled.tbody`
`

export const BodyRow = styled.tr`
    height: 3.5rem;
    width:100%;
    
`;

export const BodyCell = styled.td`
    height: 3.5rem;
    text-transform: capitalize;
    overflow: auto;
    white-space: nowrap;
    text-align: center;
    margin: 10px;
    border-bottom: 0.1rem solid rgba(0,0,0,0.2);
    color: ${props => props.theme.colors.text.tx100};

    a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${props => props.theme.colors.text.tx100};
    }
`;