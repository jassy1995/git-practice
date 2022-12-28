
import { useState, createContext } from 'react';
import Login from '../components/login';
import UserDetail from '../components/user-detail';

export const Store = createContext(null)

export default function ContextExample() {
    const [username, setUsername] = useState('')

    return (
        <Store.Provider value={{ username, setUsername }}>
            <Login />
            <UserDetail />
        </Store.Provider>
    )
}