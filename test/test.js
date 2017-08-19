const trumpTime = require('..');
const mocha = require('mocha');
const { assert } = require('chai');
const moment = require('moment');

describe('trumpTime', function() {
  it('is a function', function() {
    assert.isFunction(trumpTime, 'trumpTime is a function');
  });

  it('can convert with milliseconds', function() {
    // Comey was in office for roughly 110 days
    const oneHundredTenDays = moment.duration(110, 'days').asMilliseconds();
    const comeys = trumpTime(oneHundredTenDays, 'comey');
    assert.equal(1, Math.round(comeys), 'one hundred and ten days is roughly 1 comey');
  });

  it('can convert with start and end dates', function() {
    // Comey was was working under Trump's administration
    // from the date of the Inauguration (January 20, 2017) at noon
    // till May 9, 2017
    const start = moment('2017-01-20 12:00');
    const end = moment('2017-05-09').endOf('day');
    const comeys = trumpTime(start, end, 'comey');
    assert.equal(1, comeys, `Using Comey's start/end date & time for is equal to 1 comey`);
  });
});
