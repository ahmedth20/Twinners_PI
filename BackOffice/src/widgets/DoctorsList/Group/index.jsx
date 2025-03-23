import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupSeparator from '@ui/GroupSeparator';
import PersonList from '@components/DoctorList';
import { depsOptions } from '@constants/options';
import PropTypes from "prop-types";


<<<<<<< HEAD
export default function Group({arr, variant, ...props}) {
    // get unique departments list
    const deps = [...new Set(arr.flatMap(item => item.department.map(item => item.id)))];
    console.log(deps)
    // filter by department
    const arrByDep = dep => arr.filter(item => item.department.some(item => item.id === dep));
=======

const Group = ({char, arr, type, gender}) => {
    const data = arr.filter(item =>item.user?.lastName[0].toLowerCase() === char);
>>>>>>> bf6a374a71db9014ce1d0a5bdfec7e6b6d88039d

    return (
        <>
            {
                data.length !== 0 ?
                    <div id={char}>
                        <GroupSeparator text={char} />
                        <PersonList arr={data} type={type} gender={gender} />
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
