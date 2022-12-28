import { useRef } from "react";
import Button from "../components/button";

const ImperativeExanple = () => {
    const buttonRef = useRef(null);
    return (
        <div className="flex flex-col">
            <button className="border border-slate-200" onClick={() => { buttonRef.current.toggleHandler() }}>parent button</button>
            <Button ref={buttonRef} />
        </div>
    );
}

export default ImperativeExanple;