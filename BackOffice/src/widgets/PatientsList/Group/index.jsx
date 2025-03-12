// components
import GroupSeparator from '@ui/GroupSeparator';

import PatientList from '@components/PatientList';


// utils
import PropTypes from "prop-types";

const Group = ({char, arr, type, gender}) => {
    const data = arr.filter(item =>item.user?.lastName[0].toLowerCase() === char);

    return (
        <>
            {
                data.length !== 0 ?
                    <div id={char}>
                        <GroupSeparator text={char} />
                        <PatientList arr={data} type={type} gender={gender} />
                    </div> : null
            }
        </>
    )
}

Group.propTypes = {
    char: PropTypes.string.isRequired,
    arr: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['patient', 'doctor', 'staff']).isRequired,
}

export default Group;