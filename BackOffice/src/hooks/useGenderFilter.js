import { useState } from 'react';

const useGenderFilter = (targetArr) => {
    const [gender, setGender] = useState({ value: "all", label: "All" });

    const genderArr = (gender) => {
        if (gender.value === "all") return targetArr; // Ne pas filtrer si "all" est sélectionné
        return targetArr.filter(item => item.sex?.toLowerCase() === gender.value);
    };

    return {
        genderArr,
        gender,
        setGender
    };
};

export default useGenderFilter;
