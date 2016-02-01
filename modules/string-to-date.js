var moment = require('moment');

module.exports = function (dateStr) {
  if (!isNaN(dateStr)) {
    dateStr = +dateStr*1000;
  }
  var date = moment(dateStr);
  if (!date.isValid()) return {'unix': null, 'natural': null};
  return {'unix': date.format('X'), 'natural': date.format('Do MMMM YYYY')};
}