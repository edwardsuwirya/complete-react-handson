import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../shared/hook/useAuth";
import '../App.css';

const Navigation = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <nav className='navigation-container'>
                <div>
                    <Link to="/main/jsonplaceholder" replace>JsonPlaceHolder</Link> |{" "}
                </div>
                <div>
                    <button className='button-form button-logout' onClick={() => {
                        logout();
                        navigate("/", {replace: true});
                    }}>Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
