const { Observable } = require('rxjs/Observable')
const { rxSandbox } = require('rx-sandbox')
const delayer = require('./delayer')
const { marbleAssert } = rxSandbox

describe('Delayer', () => {
	it('should work as expected...', () => {
		const { hot, flush, getMessages, e } = rxSandbox.create(false, 1000)

		const a = { value: 'alpha', delay: 1000 }
		const b = { value: 'beta', delay: 2000 }
		const c = { value: 'charlie', delay: 3000 }
		const d = { value: 'delta', delay: 4000 }

		const expected = e('^-a--b---c----|', { a, b, c })

		const producer = hot('^a-b--c---d|', { a, b, c, d })

		const result = getMessages(delayer(producer))

		flush()
		marbleAssert(result).to.equal(expected)
	})
})
