import { ClassAttributes } from 'react';
import * as S from './styled-inputLabel'

type Props = {
    id: string,
    label: string
}
export const InputLabel = ({ id, label }: Props): JSX.Element => {
    return (
        <S.WrapperInput id={id}>
            <S.Label htmlFor='name'>{label}</S.Label>
            <S.Input>
                <input type='text' value={''} autoComplete='off' disabled={true} />
            </S.Input>
        </S.WrapperInput>
    );
};

export default InputLabel