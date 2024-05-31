'use client'

import TitleSection from "@/app/components/TitleSection";
import * as S from "./styled-client";
import { useState } from "react";
import InputLabel from "@/app/components/InputLabel";
import Status from "@/app/components/Status";



type Props = {
    params: {
        slug: string;
    }
}

const page = ({ params }: Props) => {
    const [view1, setView1] = useState<boolean>(true)
    const [view2, setView2] = useState<boolean>(false)
    const [view3, setView3] = useState<boolean>(true)
    return (
        <S.WrapperClient>
            <S.Section>
                <S.HeaderSection>
                    <TitleSection view={view1} setView={setView1} content="Informações pessoais" />
                </S.HeaderSection>
                {view1 &&
                    <S.SectionInfo>
                        <InputLabel id="nome" label="Nome" />
                        <InputLabel id="sobrenome" label="sobrenome" />
                        <InputLabel id="telefone" label="telefone" />
                        <InputLabel id="documento" label="documento" />
                        <InputLabel id="email" label="email" />
                    </S.SectionInfo>
                }
                <S.Divisor />
            </S.Section>

            <S.Section>
                <S.HeaderSection>
                    <TitleSection view={view2} setView={setView2} content="endereços" />
                </S.HeaderSection>
                {view2 &&
                    <S.SectionHouse>
                        <InputLabel id="rua" label="Rua/Av" />
                        <InputLabel id="numero" label="numero" />
                        <InputLabel id="tipo" label="tipo" />
                        <InputLabel id="bairro" label="bairro" />
                    </S.SectionHouse>
                }
                <S.Divisor />
            </S.Section>

            <S.Section>
                <S.HeaderSection>
                    <TitleSection view={view3} setView={setView3} content="mensalidades" />
                </S.HeaderSection>
                {view3 &&
                    <S.SectionMoney>
                        <InputLabel id="mes" label="mes" />
                        <InputLabel id="dia" label="ano" />
                        <Status status={3} />
                    </S.SectionMoney>
                }
                <S.Divisor />
            </S.Section>
        </S.WrapperClient>
    )

};

export default page;