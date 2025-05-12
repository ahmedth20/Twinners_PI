// styled components
import {PainLocationWrapper} from 'widgets/PainLocation/style';

// components
import Widget from 'components/Widget';
import WidgetHeader from 'components/Widget/WidgetHeader';
import WidgetBody from 'components/Widget/WidgetBody';
import TabNav from 'UI/TabNav';
import TabNavItem from 'UI/TabNav/TabNavItem';
import {Tab} from 'react-bootstrap';
import Body from './Body';
    

import { useState, useEffect } from 'react';

const PainLocation = ({ patient }) => {
    console.log("**********patient*********");
    console.log(patient);
    const [currentGender, setCurrentGender] = useState('male');


    useEffect(() => {
        const gender = patient.sex.toLowerCase();
        setCurrentGender(gender === 'female' ? 'female' : 'male');
    }, [patient.sex]); // Le useEffect dépend de patient.sex

    return (
        <Widget name="PainLocation">
            <WidgetHeader title="Location of pain" flex={'column'}>
                <TabNav>
                    <TabNavItem 
                        className={currentGender === 'male' ? 'active' : ''} 
                        eventKey="male" 
                        title="Male" 
                        handler={() => setCurrentGender('male')} 
                    />
                    <TabNavItem 
                        className={currentGender === 'female' ? 'active' : ''} 
                        eventKey="female" 
                        title="Female" 
                        handler={() => setCurrentGender('female')} 
                    />
                </TabNav>
            </WidgetHeader>
            <WidgetBody>
                <PainLocationWrapper>
                    <Tab.Container activeKey={currentGender} transition={true}>
                        <Tab.Content>
                            <Tab.Pane eventKey="male">
                                <Body gender='male' patient={ patient } />
                            </Tab.Pane>
                            <Tab.Pane eventKey="female">
                                <Body gender='female' patient={ patient }/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </PainLocationWrapper>
            </WidgetBody>
        </Widget>
    );
};

export default PainLocation;
