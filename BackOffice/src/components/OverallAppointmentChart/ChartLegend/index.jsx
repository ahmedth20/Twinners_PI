// components
import LegendItem from 'UI/Legend/LegendItem';
import Legend from 'UI/Legend';

// utils
import {colorTypes} from 'constants/colors';

const ChartLegend = () => {
    return (
        <Legend>
            {colorTypes.map(({cat, color}) => {
                if (cat === 'emergency') {
                    return null;
                } else {
                    return (
                        <LegendItem key={cat} legend={cat} color={color}/>
                    )
                }
            })}
        </Legend>
    )
}

export default ChartLegend;