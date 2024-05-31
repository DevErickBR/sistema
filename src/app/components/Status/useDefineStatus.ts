import { useCallback, useEffect, useState } from "react"

const useDefineStatus = (status: number) => {
    const [statusMsg, setStatusMsg] = useState<string>("")

    const defineStatus = useCallback(() => {
        switch (status) {
            case 1:
                setStatusMsg('naoPago')
                break;
            case 2:
                setStatusMsg('pago')
                break;
            case 3:
                setStatusMsg('emAtraso')
                break;
            default:
                return ('Nomal');
        }
    }, [status])

    useEffect(() => {
        defineStatus();
    }, [defineStatus, status])

    return { statusMsg }

}

export default useDefineStatus