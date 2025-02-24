import { formatCurrency } from './format.utils'

describe('format.utils', () => {
  it('should format a number to a currency string', () => {
    const number = 1000
    const expected = 'R$ 1.000,00'

    const result = formatCurrency(number)

    expect(result).toEqual(expected)
  })
})
