import Field from 'UI/Field';
import {Footer, List} from 'components/Messenger/style';
import {useRef, useState, useEffect} from 'react';
import {Container, Button} from 'UI/TabNav/style';
import Widget from 'components/Widget';
import Nav from 'react-bootstrap/Nav';
import User from 'components/Messenger/UsersList/User';
import ScrollContainer from 'components/ScrollContainer';
import NoDataPlaceholder from 'components/NoDataPlaceholder';
import PropTypes from 'prop-types';
import useContentHeight from 'hooks/useContentHeight';
import DoctorService from 'services/DoctorService'; // assure-toi d’avoir ce service

const UserList = ({ user, onUserSelect, setModal, activeList, setActiveList}) => {
    const [query, setQuery] = useState('');
    const [doctors, setDoctors] = useState([]);
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const data = await DoctorService.getAllDoctors();
                setDoctors(data);
            } catch (error) {
                console.error('Failed to fetch Doctors', error);
            }
        };
        fetchDoctors();
    }, []);

    const drawList = (arr) => {
        const filtered = arr.filter(item => {
            const fullName = `${item.user.firstName} ${item.user.lastName}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        }).map(item => (
            <Nav.Link as="div" key={item._id} eventKey={item._id} onClick={() => onUserSelect(item._id)}>
            <User user={user} data={item} onUserSelect={onUserSelect} setModal={setModal} />
        </Nav.Link>
        
        ));
        return filtered.length ? filtered : <NoDataPlaceholder/>;
    };

    return (
        <Widget name="MessengerUserList">
            <ScrollContainer height={height}>
                <List className="track">
                    {drawList(doctors)}
                </List>
            </ScrollContainer>
            <Footer ref={footerRef}>
                <div className="search">
                    <Field type="search" value={query}
                           handler={e => setQuery(e.target.value)}/>
                    <button className={query !== '' ? 'visible' : ''} onClick={() => setQuery('')}>
                        <i className="icon icon-close"/>
                    </button>
                </div>
            </Footer>
        </Widget>
    );
};

UserList.propTypes = {
    onUserSelect: PropTypes.func.isRequired,
    user: PropTypes.any.isRequired,
    setModal: PropTypes.func,
    variant: PropTypes.string,
    activeList: PropTypes.string,
    setActiveList: PropTypes.func
};

export default UserList;
