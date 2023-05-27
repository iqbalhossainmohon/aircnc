import Container from "../Container";
import navLogo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import MenuDropdown from "./MenuDropdown/MenuDropdown";

const NavBar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div>
                            <Link to='/'
                                title="Home"
                            >
                                <img className="hidden md:block" src={navLogo} alt="airCNC Logo" width={100} height={100} />
                            </Link>
                        </div>
                        <Search/>
                        <MenuDropdown/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;