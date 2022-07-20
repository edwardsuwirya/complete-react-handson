import './App.css';
import JsonPlaceHolderView from "./features/jsonPlaceHolder/JsonPlaceHolderView";
import JsonPlaceHolderController from "./features/jsonPlaceHolder/JsonPlaceHolderController";

// npm install axios --save

function App() {
    return (
        <JsonPlaceHolderView controller={JsonPlaceHolderController}/>
    )
}

export default App;
