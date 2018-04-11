const { Observable } = require('rxjs/Observable')
require('rxjs/add/observable/of')
require('rxjs/add/observable/from')
require('rxjs/add/operator/delay')
require('rxjs/add/operator/concatMap')
require('rxjs/add/operator/takeWhile')
require('rxjs/add/operator/do')

module.exports = subject =>
	Observable.from(subject)
		.concatMap(x => Observable.of(x).delay(x.delay))
		.takeWhile(x => x.delay < 4000)
		.do(console.log)
