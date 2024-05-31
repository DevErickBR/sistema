import styled, { css } from "styled-components";

type Props = {
    sta: string;
}

export const StatusWrapper = styled.div<Props>`
    align-items:center;
    justify-content:center;
    width: 20rem;
    display: none;
    font-size: 1.3rem;
    color:${props => props.theme.colors.text.tx200};
    font-weight:bolder;
    border-radius: .3rem;
    text-transform:capitalize;
    ${props => props.sta === 'naoPago' && css`
        background-color:${props.theme.colors.alerts.alert};
        display:flex;
    `}
    ${props => props.sta === 'emAtraso' && css`
        background-color:${props.theme.colors.alerts.err};
        display:flex;
    `}
    ${props => props.sta === 'pago' && css`
        background-color:${props.theme.colors.alerts.sucess};
        display:flex;
    `}
`;

