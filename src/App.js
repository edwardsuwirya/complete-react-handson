import './App.css';
import JsonPlaceHolderView from "./features/jsonPlaceHolder/JsonPlaceHolderView";
import useJsonPlaceHolderController from "./features/jsonPlaceHolder/useJsonPlaceHolderController";

// npm install axios --save

function App() {
    return (
        <JsonPlaceHolderView controller={useJsonPlaceHolderController}/>
    )
}

export default App;
