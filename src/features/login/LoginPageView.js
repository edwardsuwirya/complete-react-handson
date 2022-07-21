import withContainer from "../../shared/components/withContainer";
import "./loginPageStyle.css";
import useLoginFormController from "./component/useLoginFormController";
import LoginForm from "./component/LoginForm";

const LoginPageView = ({controller}) => {
    const {
        onLogin,
        viewState
    } = controller();

    return (
        <LoginForm state={viewState} controller={useLoginFormController} events={onLogin}/>
    );
}
export default withContainer('Login', LoginPageView);
