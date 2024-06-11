import { Grid } from '@mui/material';
import React from 'react';
import AirConditions from './AirConditions/airCondition';
import DailyForecast from './Forecast/dailyForecast';
import Details from './Details/details';

const TodayWeather = ({ data, forecastList }) => {
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
      <Details data={data} />
      <AirConditions data={data} />
      <DailyForecast data={data} forecastList={forecastList} />
    </Grid>
  );
};

export default TodayWeather;
