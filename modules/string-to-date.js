var moment = require('moment');

module.exports = function (dateStr) {
  if (!isNaN(dateStr)) {
    dateStr = +dateStr*1000;
  }
  var date = moment(dateStr);
  return {'unix': date.format('X'), 'natural': date.format('Do MMMM YYYY')};
}