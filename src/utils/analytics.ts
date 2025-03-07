import amplitude from 'amplitude-js';
import moment from 'moment-timezone';
import ReactGA from 'react-ga';

import { Event } from './analyticsEvents';

const year = moment()
  .locale('en')
  .format('YYYY');
const month = moment()
  .locale('en')
  .format('MMMM')
  .toUpperCase();
const day = moment()
  .locale('en')
  .format('dddd')
  .toUpperCase();
const hour = moment().format('HH');
const minute = moment().format('mm');

export const initGA = () => {
  console.log('init-ga init', process.env.GATSBY_ENV);

  if (process.env.GATSBY_ENV && ReactGA.initialize) {
    console.log('init-ga start');
    ReactGA.initialize('UA-162265508-1');

    if (window) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }
};

export const initAmplitude = () => {
  console.log('init-amplitude init', process.env.GATSBY_ENV);

  try {
    if (process.env.GATSBY_ENV && amplitude.getInstance) {
      console.log('init-amplitude start');
      amplitude.getInstance().init('c886889426a03f94edcbb3980845d7bf', undefined, {
        sessionTimeout: 5 * 60 * 1000,
      });
    }
  } catch (error) {
    console.error('init-amplitude error', error);
  }
};

export const sendAmplitudeEvent = (eventName: Event, eventProperties?: object) => {
  console.log('send-amplitude-event init', process.env.GATSBY_ENV);

  try {
    if (process.env.GATSBY_ENV && amplitude.getInstance) {
      const defaultProperties = { year, month, day, hour, minute };
      console.log(eventName, defaultProperties);
      amplitude.getInstance().logEvent(eventName, { ...defaultProperties, ...eventProperties });
    }
  } catch (error) {
    console.error('send-amplitude-event error', error);
  }
};
