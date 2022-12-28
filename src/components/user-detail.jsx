import { useContext } from 'react';
import { Store } from '../pages/context';

const UserDetail = () => {
    const { username } = useContext(Store)
    return (<div>
        <h1>{username}</h1>
    </div>);
}

export default UserDetail;