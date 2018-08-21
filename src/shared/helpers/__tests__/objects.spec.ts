import {List, Map} from 'immutable'

import {immutifyState} from '../objects'

describe('Helpers (Objects)', () => {
  describe('immutifyState', () => {
    let state

    beforeEach(() => {
      state = immutifyState({
        a: {},
        b: [],
      })
    })

    it('maintain root object as pure object', () => {
      expect(state).toEqual(expect.any(Object))
    })

    it('convert object property into Map', () => {
      expect(Map.isMap(state.a)).toBe(true)
    })

    it('convert array property into List', () => {
      expect(List.isList(state.b)).toBe(true)
    })
  })
})