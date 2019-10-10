const formatDate = timeInSeconds => {
  const h = Math.floor((timeInSeconds / 3600) % 24);
  const m = Math.floor((timeInSeconds % 3600) / 60);
  const s = Math.floor((timeInSeconds % 3600) % 60);

  if (!timeInSeconds) {
    return `0s`;
  } else if (timeInSeconds <= 59) {
    return s + 's';
  } else if (timeInSeconds <= 3599) {
    if (s == 0) {
      return m + 'm';
    } else {
      return m + 'm ' + s + 's';
    }
  } else if (timeInSeconds >= 3600) {
    if (s == 0 && m !== 0) {
      return h + 'h ' + m + 'm';
    } else if (s == 0 && m == 0) {
      return h + 'h';
    } else if (m == 0) {
      return h + 'h ' + s + 's';
    } else {
      return h + 'h ' + m + 'm ' + s + 's';
    }
  }
};
module.exports = formatDate;
