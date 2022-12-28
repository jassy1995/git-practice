import { useRef } from 'react'

export default function RefExample() {

    const inputRef = useRef(null)

    return (
        <div>
            <h1></h1>
            <input type="text" placeholder='type here' ref={inputRef} />
            <button onClick={() => { inputRef.current.value = ''; inputRef.current.focus() }}>focus</button>
        </div>
    )
}