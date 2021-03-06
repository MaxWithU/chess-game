// 车:Rook
// 马:Horse
// 象/相:Elephant
// 士/仕:Mandarin
// 将/帅:General
// 炮:Cannon
// 卒/兵:Soldier
import Rook from '../action/Rook'
import Cannon from '../action/Cannon'
import Elephant from '../action/Elephant'
import Horse from '../action/Horse'
import Soldier from '../action/Soldier'
import General from '../action/General'
import Mandarin from '../action/Mandarin'
export default class {
  constructor (mtx) {
    this.matrix = mtx
  }
  from (one) {
    this.rule = this._getRule(one)(this.matrix, one)
    return this
  }
  to (two) {
    return !!this.rule.has(`${two.x}_${two.y}`)
  }
  _getRule (one) {
    switch (one.type) {
      case 'R': return Rook
      case 'H': return Horse
      case 'E': return Elephant
      case 'M': return Mandarin
      case 'G': return General
      case 'S': return Soldier
      case 'C': return Cannon
      default: return new Set()
    }
  }
}
