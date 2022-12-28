import PropTypes from 'prop-types';

export default function User({ user }) {
    return (
        <div className="flex flex-col">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.object
};


