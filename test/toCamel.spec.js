import { toCamel } from '..'

describe('toCamel', () => {
	it('', () => {
		expect(toCamel(['java', 'script'])).toBe('javaScript')
	})
})
