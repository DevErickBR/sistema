'use client'

import TitleSection from "@/app/components/TitleSection";
import * as S from "./styled-client";

type Props = {
    params: {
        slug: string;
    }
}

const page = ({ params }: Props) => {
    return (
        <S.WrapperClient>
            <S.Section>
                <S.HeaderSection>
                    <TitleSection content="Informações pessoais" />
                </S.HeaderSection>
                <S.Divisor />
            </S.Section>
        </S.WrapperClient>
    )

};

export default page;