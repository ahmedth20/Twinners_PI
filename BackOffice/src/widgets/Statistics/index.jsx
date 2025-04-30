// styled components
import { Card, Info, Content, StatHeader } from './style';

// components
import Widget from 'components/Widget';
import WidgetBody from 'components/Widget/WidgetBody';
import CountUp from 'react-countup';

const Statistics = ({ data, title, image }) => {
    const Icon = () => {
        switch (data.type) {
            default:
            case 'cause':
                return <i className="icon-stomach" />;
            case 'teeth':
                return <i className="icon-tooth" />;
            case 'heart':
                return <i className="icon-monitor" />;
        }
    };

    const color = () => {
        switch (data.type) {
            default:
            case 'cause':
                return 'peach';
            case 'teeth':
                return 'teal';
            case 'heart':
                return 'green';
        }
    };

    return (
        <Widget name="Statistics">
            <WidgetBody>
                <Content>
                    <StatHeader>
                        {image && (
                            <img src={image} alt="illustration" className="resource-img" />
                        )}
                        {title && <h3 className="resource-title">{title}</h3>}
                    </StatHeader>

                    <Card className={color()}>
                        <Icon />
                    </Card>

                    <Info>
                        <CountUp
                            className="value"
                            start={0}
                            end={data.value}
                            delay={0}
                            duration={1}
                            enableScrollSpy
                        />
                        <p className="h3">{data.text}</p>
                    </Info>
                </Content>
            </WidgetBody>
        </Widget>
    );
};

export default Statistics;
