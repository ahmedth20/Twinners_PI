// styled components
import {Wrapper, HeaderWrapper, ReviewMain} from './style';

// components
import Avatar from 'UI/Avatar';
import CustomRating from 'UI/CustomRating';
import Timestamp from 'UI/Timestamp';
import MenuDots from 'UI/MenuDots';
import {motion} from 'framer-motion';

// constants
import {fadePresence} from 'constants/framer';

const Review = ({data, variant}) => {
    const {name, online, rating, title, text, date, avatar} = data;

    return (
        <motion.div {...fadePresence}>
            <HeaderWrapper>
                {
                    variant === 'doctor' ?
                        <>
                            <Wrapper>
                                <Avatar avatar={avatar} alt={name} online={online}/>
                                <div className="info">
                                    <span className="info_title h3">{title}</span>
                                    <span className="info_name">{name}</span>
                                </div>
                            </Wrapper>
                            <MenuDots/>
                        </>
                        :
                        <p className="title">{title}</p>
                }
            </HeaderWrapper>
            <ReviewMain>
                <p className="text">{text}</p>
                <Timestamp text="Published: " date={date}/>
                <CustomRating value={rating}/>
            </ReviewMain>
        </motion.div>
    )
}

export default Review;