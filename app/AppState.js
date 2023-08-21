import { Player } from "./models/Player.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {



  players = [
    new Player("Jake", 0),
    new Player("Miles", 0)

  ]







  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {
    console.log(this.players)

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
