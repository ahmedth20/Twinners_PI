// components
import Widget from 'components/Widget';
import Tab from 'react-bootstrap/Tab';
import SelectPlaceholder from 'UI/SelectPlaceholder';
import Main from 'components/Messenger/Main';

const Messenger = ({user}) => {
    return (
        <Tab.Content as={Widget} name="Messenger" mobile={600}>
            {
                user === '' ?
                    <SelectPlaceholder text="Select a chart to start messaging"/>
                    :
                    <Main user={user}/>
            }
        </Tab.Content>
    )
}

export default Messenger;