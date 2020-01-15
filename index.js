var moment = require('moment');

moment.prototype.compareDate = function(dateToCompare) {
    return this.format("DD/MM/YY") === dateToCompare.format("DD/MM/YY");
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = moment;
  }