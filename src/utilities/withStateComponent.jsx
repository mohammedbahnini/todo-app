import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function withState(BaseComponent) {

    return (props) => {
        const { state, dispatch } = useContext(AppContext);
        return (
            <BaseComponent state={state} dispatch={dispatch} {...props} />
        )
    }

}