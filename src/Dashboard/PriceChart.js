import React from 'react';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import highChartsConfig from './HightChartsConfig';
import HighChartsTheme from './HighChartsTheme';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartSelect } from './ChartSelect';
Highcharts.setOptions(HighChartsTheme);

const PriceChart = () => {
    return (
        <AppContext.Consumer>
            {({ historical, changeChartSelect }) => (
                <Tile>
                    <ChartSelect
                        defaultValue="months"
                        onChange={(e) => changeChartSelect(e.target.value)}
                    >
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </ChartSelect>
                    {historical ? (
                        <HighchartsReact
                            theme={HighChartsTheme}
                            Highcharts={Highcharts}
                            options={highChartsConfig(historical)}
                        ></HighchartsReact>
                    ) : (
                        <div>Loading Chart</div>
                    )}
                </Tile>
            )}
        </AppContext.Consumer>
    );
};

export default PriceChart;
