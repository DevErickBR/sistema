import { Search, User, WrapperHeader, WrapperHouse, WrapperSeach, WrapperUser } from "./header-styled";
import * as Icons from 'react-icons/fa6'

const Header = () => {
    return (
        <WrapperHeader>
            <WrapperHouse>
                <div className="wrapper-icon-house">
                    <Icons.FaHouse />
                </div>
            </WrapperHouse>
            <WrapperSeach>
                <Search>
                    <div className="wrapper-icon">
                        <Icons.FaMagnifyingGlass />
                    </div>
                    <div className="wrapper-input">
                        <input type="text" placeholder="Pesquise Uma Tela...." />
                    </div>
                </Search>
            </WrapperSeach>

            <WrapperUser>
                <User>
                    <div className="wrapper-icon-user">
                        <Icons.FaUser />
                    </div>
                </User>
            </WrapperUser>
        </WrapperHeader>
    );
}

export default Header;