import { Wrapper, WrapperInfos } from "./menu-card"
import Link from "next/link";
import { PageCustom } from "@/types/page";

type Props = {
    PageComponent: PageCustom;
}

const MenuCard = ({ PageComponent }: Props): JSX.Element => {
    return (
        <Wrapper>
            <Link href={PageComponent.href}>
                <WrapperInfos>
                    {<PageComponent.Icon />}
                    {PageComponent.title}
                </WrapperInfos>
            </Link>
        </Wrapper>
    )
}

export default MenuCard;