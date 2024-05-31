import { Dispatch, SetStateAction } from "react";
import { More, Title, WrapperTitle } from "./styled.title";
import * as Icons from 'react-icons/fa6'
type Props = {
    content: string,
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
}

const TitleSection = ({ content, view, setView }: Props) => {
    return (
        <WrapperTitle>
            <Title>{content}</Title>
            <More onClick={() => setView(!view)}>{view ? <Icons.FaMinus /> : <Icons.FaChevronDown />}</More>
        </WrapperTitle>
    )
};

export default TitleSection;