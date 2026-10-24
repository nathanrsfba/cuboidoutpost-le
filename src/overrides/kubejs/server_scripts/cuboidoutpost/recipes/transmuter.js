// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // protein paste and rna make primordial gloop
    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": "cuboidmod:protein_paste"
        },
        "addition": {
          "item": "kubejs:rna"
        },
        "result": {
          "item": "kubejs:primordial_gloop",
          "count": 1
        },
        "work_ticks": 100,
        "energy": 2000
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    // protein fiber and primordial gloop make dna
    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": "cuboidmod:protein_fiber"
        },
        "addition": {
          "item": "kubejs:primordial_gloop"
        },
        "result": {
          "item": "kubejs:dna",
          "count": 1
        },
        "work_ticks": 100,
        "energy": 2000
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    // dna and bone meal make albumen
    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": "kubejs:dna"
        },
        "addition": {
          "item": "minecraft:bone_meal"
        },
        "result": {
          "item": "kubejs:albumen",
          "count": 1
        },
        "work_ticks": 120,
        "energy": 2500
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    // two snow blocks make ice
    e.custom({
      "type": "cuboidmod:transmuting",
      "base": {
        "item": "minecraft:snow_block"
      },
      "addition": {
        "item": "minecraft:snow_block"
      },
      "result": {
        "item": "minecraft:ice",
        "count": 1
      },
      "work_ticks": 120,
      "energy": 2500
    })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // make producing cellulose a bit easier by letting people use water bottles instead
    e.custom({
      "type": "cuboidmod:transmuting",
      "base": {
        "item": "cuboidmod:carbon_deposit"
      },
      "addition": {
          "type": "forge:nbt",
          "item": "minecraft:potion",
          "nbt": "{Potion:'minecraft:water'}"
      },
      "result": {
        "item": "cuboidmod:cellulose",
        "count": 2
      },
      "work_ticks": 150,
      "energy": 5000
    }) 

    // transmuting 
    const itemone = [ 'minecraft:vine', 'minecraft:sugar_cane', 'thermal:apatite', 'minecraft:ink_sac', 'cuboidmod:notsogudium_piece', 'cuboidmod:kudbebedda_piece', 'cuboidmod:notarfbadium_piece', 'cuboidmod:wikidium_piece', 'cuboidmod:thatldu_piece']

    const itemtwo = [ 'minecraft:glowstone_dust', 'minecraft:sugar', 'thermal:cinnabar', 'minecraft:glowstone_dust', 'minecraft:stone', 'minecraft:stone', 'minecraft:stone', 'minecraft:stone', 'minecraft:stone']

    const output = [ 'minecraft:glow_lichen', 'pamhc2trees:maplesyrupitem', 'minecraft:amethyst_shard', 'minecraft:glow_ink_sac', 'cuboidmod:notsogudium_ore', 'cuboidmod:kudbebedda_ore', 'cuboidmod:notarfbadium_ore', 'cuboidmod:wikidium_ore', 'cuboidmod:thatldu_ore']

    itemone.forEach((firstinput, index) => {
    
    const secondinput = itemtwo[index];
    const outputitem = output[index];
    
    e.custom({
      "type": "cuboidmod:transmuting",
      "base": {
        "item": firstinput,
      },
      "addition": {
        "item": secondinput,
      },
      "result": {
        "item": outputitem,
        "count": 1
      },
      "work_ticks": 120,
      "energy": 2000
    })
    
    })


})