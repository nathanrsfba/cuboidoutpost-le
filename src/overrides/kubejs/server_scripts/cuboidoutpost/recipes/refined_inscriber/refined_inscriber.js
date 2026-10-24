// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Refined Inscriber machine recipe
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.shaped('cuboidmod:refined_inscriber', [
      'ELE',
      'IPI',
      'QFQ'
    ], {
      I: 'ae2:inscriber',
      P: 'minecraft:piston',
      L: 'ae2:logic_processor',
      F: 'minecraft:furnace',
      E: 'ae2:engineering_processor',
      Q: 'ae2:charged_certus_quartz_crystal'
    })
  
  })