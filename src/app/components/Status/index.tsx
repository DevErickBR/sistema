import { StatusWrapper } from "./styled-status"
import useDefineStatus from "./useDefineStatus"

type Props = {
    status: 1 | 2 | 3
}
// 1 = naoPaga, 2 = Paga, 3 = emAtraso

const Status = ({ status }: Props) => {
    const { statusMsg } = useDefineStatus(status)

    return (
        <StatusWrapper sta={statusMsg}>
            {status == 1 &&
                <p>Não pago</p>
            }
            {status == 2 &&
                <p>Pago</p>
            }
            {status == 3 &&
                <p>Em atraso</p>
            }
        </StatusWrapper>
    )
}

export default Status;