export class DiceExalted {
  static async rollPool(ndice = 1) {
    let formula = `${ndice}d10`;
    let data = {};
    let roll = new Roll(formula, data).roll();
    return roll;
  }
}