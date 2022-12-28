import { useContext } from 'react';
import { Store } from '../pages/context';

export default function Login() {
    const { setUsername } = useContext(Store)
    return (
        <>
            <input type="text" name="" id="" onChange={(e) => setUsername(e.target.value)} />
        </>
    );
}
