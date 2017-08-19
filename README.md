# trump-time-units [![Build Status](https://travis-ci.org/chadian/trump-time-units.svg?branch=master)](https://travis-ci.org/chadian/trump-time-units) [![npm version](https://badge.fury.io/js/trump-time-units.svg)](https://badge.fury.io/js/trump-time-units)
An npm module that aims to help put into perspective the new phenomenon of
time under Trump. Time seems to move both quickly and slowly leading to many
questions on Trump's effect on time. Until further research can be done this
project aims to compare various *trump time units* against constant *real time*.

## Usage
### Units
- `comey`
- `yates`
- `bannon`
- `priebus`
- `spicer`
- `flynn`

### `trumpTimeUnits` with start and end dates
`trumpTimeUnits(start, end, units)`

- @param { `Date`|`Moment` } `start` - Start date, can be a javascript date object or moment date object
- @param { `Date`|`Moment` } `end` - End date, can be a javascript date object or moment date object
- @param { String } `units` One of the available units (see above)

### `trumpTimeUnits` with duration in milliseconds
`trumpTimeUnits(duration, units)`

- @param { Number } `duration` - The length of time in **milliseconds**
- @param { String } `units` - One of the available units (see above)

## Examples
Use [`moment`](https://momentjs.com/) as a helper to get things into a usable format
```js
const moment = require('moment');
const trumpTimeUnits = require('trump-time-units');

// using a known duration in milliseconds
const twentyDays = moment.duration(20, 'days').asMilliseconds();
console.log(`20 days is ${trumpTimeUnits(twentyDays, 'scaramucci')} scaramucci's`);
// » 20 days is 2 scaramucci's

// using a start and end date
const start = new Date('2017-01-01');
const end = new Date('2017-07-04');
console.log(`
Between Janauary 1, 2017
and July 4, 2017
is ${trumpTimeUnits(start, end, 'comey')} yates's`);
// » Between Janauary 1, 2017
// and July 4, 2017
// is 1.6810049487883312 yates's
```

## Additional Resources
- [space-time continuum](https://simple.wikipedia.org/wiki/Space-time)
- [time dilation](https://en.wikipedia.org/wiki/Time_dilation)
- [Why you might feel like it’s been years since the inauguration, the Verge](https://www.theverge.com/2017/2/3/14497032/time-perception-duration-donald-trump-inauguration-psychology)
- [The strange reason Donald Trump’s presidency feels like an eternity, Vox](https://www.vox.com/2017/6/12/15781752/donald-trump-eternity-time-perception)
