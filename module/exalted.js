/**
 * A simple and flexible system for world-building using an arbitrary collection
 * of character and item attributes Author: Atropos Software License: GNU GPLv3
 */

// Import Modules
import {SimpleActorSheet} from './actor-sheet.js';
import {DiceExalted} from './dice.js';
import {SimpleItemSheet} from './item-sheet.js';


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once('init', async function() {
  console.log(`Initializing Exalted System. Welcome to Creation.`);

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {formula: '1d20', decimals: 2};

  /**
   * Add the Exalted dice roller.
   */
  game.exalted = {DiceExalted};

  // Register sheet application classes
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('dnd5e', SimpleActorSheet, {makeDefault: true});
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('dnd5e', SimpleItemSheet, {makeDefault: true});
});
