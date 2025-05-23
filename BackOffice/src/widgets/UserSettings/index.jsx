// styled components
import {SettingsHeader} from 'widgets/UserSettings/style';
import {Divider} from 'components/Widget/style';
// components
import Widget from 'components/Widget';
import WidgetBody from 'components/Widget/WidgetBody';
import {Tab} from 'react-bootstrap'
import TabNav from 'UI/TabNav';
import TabNavItem from 'UI/TabNav/TabNavItem';
import Form from './Form';

const UserSettings = () => {
    return (
        <Widget name="UserSettings">
            <Tab.Container defaultActiveKey="patient" transition={true}>
                <SettingsHeader>
                    <div className="wrapper">
                        <h2 className="title">Your account</h2>
                        <TabNav>
                            <TabNavItem eventKey="patient" title="Staff" />

                        </TabNav>
                    </div>
                    <Divider />
                </SettingsHeader>
                <WidgetBody>
                    <Tab.Content>
                        <Tab.Pane eventKey="patient">
                            <Form type="patient" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="doctor">
                            <Form type="doctor" />
                        </Tab.Pane>
                    </Tab.Content>
                </WidgetBody>
            </Tab.Container>
        </Widget>
    )
}

export default UserSettings;