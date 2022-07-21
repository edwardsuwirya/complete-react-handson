import './App.css';
import JsonPlaceHolderView from "./features/jsonPlaceHolder/JsonPlaceHolderView";
import useJsonPlaceHolderController from "./features/jsonPlaceHolder/useJsonPlaceHolderController";
import SimpleJsonPlaceHolderView from "./features/jsonPlaceHolder/SimpleJsonPlaceHolderView";

// npm install axios --save

function App() {
    return (
        // <JsonPlaceHolderView controller={useJsonPlaceHolderController}/>
        <SimpleJsonPlaceHolderView/>
    )
}

export default App;
