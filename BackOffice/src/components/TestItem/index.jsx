// styled components
import { ListItem, Main, Header, Button } from 'components/TestItem/style';

// components
import IconLink from 'UI/IconLink';
import MenuDots from 'UI/MenuDots';
import { motion, AnimatePresence } from 'framer-motion';

// utils
import moment from 'moment';
import { fadePresence } from 'constants/framer';

const TestItem = ({ data }) => {
  console.log("DATA REÇUE DANS TESTITEM :", data);



  const { chestXray, oxygenSaturation, bloodTest } = data;

  return (
    <AnimatePresence>
      <ListItem as={motion.div} {...fadePresence}>
        <Header>
          <IconLink title={`Dr. Yosr Charek`} />
          <MenuDots />
        </Header>
        <Main>
          <div className="info">
           </div>
          <div className="test-results">
            <p>🩺 <strong>Chest X-ray:</strong> {chestXray}</p>
            <p>💉 <strong>Oxygen Saturation:</strong> {oxygenSaturation}</p>
            <p>📝 <strong>Blood Test:</strong> {bloodTest}</p>
          </div>
          <Button>View result</Button>
        </Main>
      </ListItem>
    </AnimatePresence>
  );
};


export default TestItem;
