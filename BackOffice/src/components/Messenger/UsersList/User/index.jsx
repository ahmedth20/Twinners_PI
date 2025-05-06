import {UserItem} from 'components/Messenger/UsersList/User/style';
import Avatar from 'UI/Avatar';
import PropTypes from 'prop-types';

const User = ({data, user, onUserSelect, setModal}) => {
    const {firstName, lastName} = data.user;
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleClick = () => {
        onUserSelect(data._id);
        if (smallScreen) setModal(true);
    };

    return (
        <UserItem className={user === data._id ? 'active' : ''} onClick={handleClick}>
            <div className="container">
                <div className="main">
                    <div className="main_wrapper">
                        <span className="name">{firstName} {lastName}</span>
                    </div>
                </div>
            </div>
        </UserItem>
    );
};

User.propTypes = {
    data: PropTypes.object.isRequired,
    user: PropTypes.any.isRequired,
    onUserSelect: PropTypes.func.isRequired,
    setModal: PropTypes.func
};

export default User;
