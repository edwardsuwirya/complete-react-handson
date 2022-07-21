import './App.css';
import LoginPageView from "./features/login/LoginPageView";
import useLoginPageController from "./features/login/useLoginPageController";
import SimpleLoginPageView from "./features/login/SimpleLoginPageView";

// npm install axios --save

function App() {
    return (
        <LoginPageView controller={useLoginPageController}/>
        // <JsonPlaceHolderView/>
        // <SimpleLoginPageView/>
    )
}

export default App;
