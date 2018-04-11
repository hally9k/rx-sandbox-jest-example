const delayer = require('./delayer')
const { Subject } = require('rxjs/Subject')

const subject = new Subject()

const observable = delayer(subject)

observable.subscribe(null, null, () => console.log('complete'))

subject.next({ value: 'alpha', delay: 1000 })
subject.next({ value: 'beta', delay: 2000 })
subject.next({ value: 'charlie', delay: 3000 })
subject.next({ value: 'delta', delay: 4000 })
