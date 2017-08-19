import moment from 'moment';
import ramda from 'ramda';
import tenures from './tenures';

const { memoize } = ramda;

function convert(...args) {
  let duration, units;

  if (args.length === 3) {
    const start = args[0];
    const end = args[1];

    units = args[2];
    duration = durationFromStartAndEnd(start, end);
  } else {
    units = args[1];
    duration = Number(args[0]);
    if (Number.isNaN(duration)) {
      throw new Error("Duration argument must be a number");
    }
  }

  const unitsDuration = durationForUnits(units);
  return duration / unitsDuration;
}

function durationForUnits(units) {
  if (typeof tenures[units] !== 'object') {
    throw new Error('Could not find units from source data');
  }

  const start = moment(tenures[units].start);
  const end = moment(tenures[units].end);
  return durationFromStartAndEnd(start, end);
}

function durationFromStartAndEnd(start, end) {
  start = moment(start);
  end = moment(end);
  if (!start.isValid() || !end.isValid()) {
    throw new Error('Start or End are invalid when handled by moment');
  }

  const duration = moment.duration(end.diff(start));
  return duration.asMilliseconds();
}

export default memoize(convert);
