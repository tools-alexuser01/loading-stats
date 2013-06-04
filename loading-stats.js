// Add a story of the app loading related statistics
// the base html creates:
//
//    window.times = {start: new Date};
//
// so that nothing else needs to be loaded to start recording times
//
var times = window.times,
    stat = {};


module.exports = {
    recordEvent: function (name) {
        times[name] = new Date;
    },
    getSummary: function () {
        for (var name in times) {
            if (name !== 'start') {
                stat['ms to ' + name] = this.sinceStart(times[name]);
            }
        }
        return stat;
    },
    sinceStart: function (dateObject) {
        var time = dateObject || new Date;
        return time - times.start;
    }
};
