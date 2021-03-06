import { solve } from './0130. Surrounded Regions'

describe('130. Surrounded Regions', () => {
  it('should pass the Test case 01', () => {
    const grid = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X']
    ]
    solve(grid)
    expect(grid).toEqual([
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']
    ])
  })
})
