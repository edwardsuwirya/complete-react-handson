import {useState} from "react";

const useViewState = () => {
    const [viewState, setViewState] = useState({isLoading: false, data: null, error: null})
    return [viewState, setViewState]
}
export default useViewState
