// styling
import {colors, light, dark} from 'styles/vars';

// styled components
import Labels from 'components/Chart/Labels';

// components
import Widget from 'components/Widget';
import WidgetHeader from 'components/Widget/WidgetHeader';
import WidgetBody from 'components/Widget/WidgetBody';
import Navigator from 'UI/Navigator';
import CartesianChart from 'components/CartesianChart';
import LegendList from 'UI/Legend';
import LegendItem from 'UI/Legend/LegendItem';

// hooks
import useArrayNav from 'hooks/useArrayNav';
import {useTheme} from 'styled-components'
import useWindowSize from 'hooks/useWindowSize';

// utils
import moment from 'moment';
import {getMonthArray} from 'utils/dates';
//autre
import { useEffect, useState } from 'react';
import axios from 'axios';
// data placeholder
import {y2019, y2020, y2021, y2022} from 'db/gender';
import {rgba} from 'polished';

const PatientsGenderLineChart = () => {
    const isMobile = useWindowSize().width < 768;
    const {theme} = useTheme();
    const periods = ['2024', '2025'];
    const {index, navigate} = useArrayNav(periods);

    const [statsData, setStatsData] = useState([]);

    // Fetch data when index (year) changes
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/gender-stats/${periods[index]}`); // ⚠️ Remplace par l’URL de ton backend
                setStatsData(res.data);
            } catch (error) {
                console.error("Erreur lors du chargement des données:", error);
                setStatsData([]); // fallback to empty
            }
        };

        fetchStats();
    }, [index]);

    const common = {
        type:"monotone",
        strokeWidth: 3,
        dot: false
    }

    const chartElems = [
        {
            ...common,
            dataKey: "men",
            stroke: colors.azure,
            activeDot: {r: 4, fill: colors.azure, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 6px ${rgba(colors.azure, .5)})`
            }
        },
        {
            ...common,
            dataKey: "women",
            stroke: colors.peach,
            activeDot: {r: 4, fill: colors.peach, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 6px ${rgba(colors.peach, .5)})`
            }
        }
    ];

    return (
        <Widget name="PatientsGenderLineChart" mobile={400}>
            <WidgetHeader title="Patients gender" flex="column">
                <Navigator handler={navigate} text={periods[index]} style={{margin: '0 -22px 0'}} />
            </WidgetHeader>
            <WidgetBody style={{padding: 0, overflow: 'hidden'}}>
                <Labels>
                    {
                        getMonthArray().map(({month}) => (
                            <div key={moment(month).format('MMM')}>
                                {isMobile ? moment(month).month() + 1 : moment(month).format('MMM')}
                            </div>
                        ))
                    }
                </Labels>
                <CartesianChart variant="line" id="patientsGender" data={statsData} elems={chartElems} />
                <LegendList overlay={true}>
                    <LegendItem color="azure" legend="men" />
                    <LegendItem color="peach" legend="women" />
                </LegendList>
            </WidgetBody>
        </Widget>
    )
}

export default PatientsGenderLineChart;