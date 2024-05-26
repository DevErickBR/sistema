'use client'

import Link from "next/link";
import { BodyCell, BodyRow, BodyTable, HeaderCell, HeaderRow, HeaderTable, Table, WrapperTable } from "./styles-clients";
import * as Icons from 'react-icons/fa6';

const page = () => {
    return (
        <>
            <div>Clientes</div>
            <WrapperTable>
                <Table>
                    <HeaderTable>
                        <HeaderRow>
                            <HeaderCell>Nome</HeaderCell>
                            <HeaderCell>dia</HeaderCell>
                            <HeaderCell>Rua/Av</HeaderCell>
                            <HeaderCell>Detalhes</HeaderCell>
                        </HeaderRow>
                    </HeaderTable>
                    <BodyTable>
                        <BodyRow>
                            <BodyCell>Erick</BodyCell>
                            <BodyCell>15</BodyCell>
                            <BodyCell>odete Garcia</BodyCell>
                            <BodyCell><Link href='/clientes/erick'><Icons.FaRegSquarePlus /></Link></BodyCell>
                        </BodyRow>
                    </BodyTable>
                </Table>
            </WrapperTable>
        </>
    )
}

export default page;