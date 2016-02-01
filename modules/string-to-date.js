var moment = require('moment');

module.exports = function (dateStr) {
  dateStr = decodeURI(dateStr.slice(1,dateStr.length))
  if (!isNaN(dateStr)) {
    dateStr = +dateStr*1000;
  }
  var date = moment(dateStr);
  return {'unix': date.format('X'), 'natural': date.format('Do MMMM YYYY')};
}