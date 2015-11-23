// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var somethingHappen = function() {
// 	console.log('Something happen!');
// }
// eventEmitter
// .on('something-happen', somethingHappen)
// .emit('something-happen');

var BookClass = require('./book.js');
var book = new BookClass();
var book1 = new BookClass();
book.on('rated', function() {
	console.log('Rated with ' + book.getPoints());
});
book1.on('rated', function() {
	console.log('Rated with ' + book.getPoints());
});
book.rate(10);
book1.rate(20);
