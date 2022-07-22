import './App.css';
import LoginPageView from "./features/login/LoginPageView";
import useLoginPageController from "./features/login/useLoginPageController";
import SimpleLoginPageView from "./features/login/SimpleLoginPageView";
import useJsonPlaceHolderController from "./features/jsonPlaceHolder/useJsonPlaceHolderController";
import JsonPlaceHolderView from "./features/jsonPlaceHolder/JsonPlaceHolderView";

// npm install axios --save

function App() {
    return (
        <LoginPageView controller={useLoginPageController}/>
        // <JsonPlaceHolderView controller={useJsonPlaceHolderController}/>
        // <SimpleLoginPageView/>
    )
}

export default App;
