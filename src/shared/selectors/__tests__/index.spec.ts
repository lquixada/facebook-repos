import {getNextPage} from '../index'

describe('Selectors', () => {
  describe('getNextPage', () => {
    it('gets the contributors next page', () => {
      const state: any = {
        contributors: {
          owner1: {
            repo1: {
              nextPage: 2,
            },
          },
        },
      }

      expect(getNextPage(state, 'owner1', 'repo1')).toBe(2)
    })
  })
})
