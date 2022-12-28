import User from '../components/user';
import { useFetch } from '../hooks/fetch-hook';

const baseUrl = "https://jsonplaceholder.typicode.com/users"



export default function Users() {
    const { data, isPending, error } = useFetch(baseUrl)

    return (
        <div className="user">
            {error && <div>{error}</div>}
            {isPending && <div>loading, please wait</div>}
            {data && data.map((user, index) => (
                <div key={index} className="flex flex-col">
                    <User user={user} />
                </div>
            ))}

        </div>
    )
}

