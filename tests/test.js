var expect = require('chai').expect;
var moment = require('../index.js');

describe('Compare dates without time', function () {
    console.log("here");
    let jan15noon = moment("Wed Jan 15 2020 12:00:00");
    let jan15morning = moment("Wed Jan 15 2020 09:00:00");
    let jan16morning = moment("Wed Jan 16 2020 09:00:00");
    
    it('should be true', function (done) {
        expect(jan15noon.compareDate(jan15morning)).to.be.true;
        done();
    });

    it('should be false', function(done) {
        expect(jan15morning.compareDate(jan16morning)).to.be.false;
        done();
    })


})