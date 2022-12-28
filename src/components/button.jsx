import { forwardRef, useImperativeHandle, useState } from 'react';





const Button = forwardRef((_props, ref) => {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => setToggle(!toggle)

    useImperativeHandle(ref, () => ({ toggleHandler }))

    return (
        <>
            <button className="border border-slate-200" onClick={() => setToggle(!toggle)}>child button</button>
            {toggle && <span>toggle</span>}
        </>
    );
})

export default Button;