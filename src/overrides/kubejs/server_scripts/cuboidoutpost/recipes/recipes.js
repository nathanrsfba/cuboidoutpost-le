// priority: 0

ServerEvents.recipes(e => {
    // helper functions
    const crushing = (name) => {
        e.recipes.create.crushing({
          ingredients: [
            { item: 'cuboidmod:' + name + '_chunk' }
          ],
          results: [
            { item: 'cuboidmod:' + name + '_dust', count: 2 },
            { item: 'cuboidmod:' + name + '_dust', count: 1, chance: 0.5 }
          ]
        })

        e.recipes.thermal.pulverizer([
            '2x cuboidmod:' + name + '_dust',
            Item.of('cuboidmod:silica_dust').withChance(0.5)
          ],             
          'cuboidmod:' + name + '_chunk')
    }

    const cuboid_ores = [
        'notsogudium', 'kudbebedda', 'notarfbadium', 'wikidium', 'thatldu'
    ]

    cuboid_ores.forEach((name) => {
        // custom ores
        crushing(name)
    })

    // pulverizer recipe to add create cogwheels
    e.remove({ output: 'thermal:machine_pulverizer' });

    // remove busted overworld teleporter
    e.remove({ output: 'cuboidmod:energized_stone_bricks' });

    e.shaped('thermal:machine_pulverizer', [
      ' H ',
      'RAR',
      'CFC'
    ], {
      C: 'create:cogwheel',
      H: 'minecraft:piston',
      R: 'minecraft:flint',
      A: 'thermal:machine_frame',
      F: 'thermal:rf_coil',
    })

    // ZINC dust
    e.recipes.thermal.pulverizer(
      ['2x cuboidmod:zinc_dust'],
      '#forge:ores/zinc'
    )

    e.recipes.thermal.pulverizer(
      ['cuboidmod:zinc_dust'],
      'create:raw_zinc'
    )

    e.smelting('1x create:zinc_ingot', 'cuboidmod:zinc_dust')
    e.blasting('1x create:zinc_ingot', 'cuboidmod:zinc_dust')

    // cobalt dust
    e.recipes.thermal.pulverizer(
      ['2x cuboidmod:cobalt_dust'],
      '#forge:ores/cobalt'
    )

    // platinum dust
    e.recipes.thermal.pulverizer(
      ['kubejs:platinum_dust'],
      '#forge:ingots/platinum'
    )

    // osmium dust
    e.recipes.thermal.pulverizer(
      ['1x mekanism:dust_osmium'],
      'mekanism:raw_osmium'
    )

    e.smelting('1x exnihilosequentia:platinum_ingot', 'kubejs:platinum_dust')
    e.smelting('1x exnihilosequentia:platinum_ingot', 'exnihilosequentia:raw_platinum')
    e.blasting('1x exnihilosequentia:platinum_ingot', 'kubejs:platinum_dust')
    e.blasting('1x exnihilosequentia:platinum_ingot', 'exnihilosequentia:raw_platinum')

    // initial molecular recycler recipe
    e.shaped('cuboidmod:molecular_recycler', [
      'FHF',
      'TCT',
      'REP'
    ], {
      H: 'minecraft:hopper',
      F: 'cuboidmod:notsogudium_furnace',
      T: 'cuboidmod:notsogudium_crafting_table',
      C: 'thermal:machine_centrifuge',
      R: 'cuboidmod:notsogudium_singularity_resource_generator',
      E: 'mekanism:advanced_energy_cube',
      P: '#cuboidmod:quantum_singularities'
    })

    // subsequent molecular recycler recipe
    e.shaped('cuboidmod:molecular_recycler', [
      'FHF',
      'TCT',
      'REP'
    ], {
      H: 'minecraft:hopper',
      F: 'cuboidmod:notarfbadium_furnace',
      T: 'cuboidmod:notarfbadium_crafting_table',
      C: 'cuboidmod:notsogudium_singularity_power_generator',
      R: 'cuboidmod:notarfbadium_singularity_resource_generator',
      E: 'minecraft:redstone_block',
      P: '#cuboidmod:quantum_singularities'
    })

    // initial quantum transmutation chamber recipe
    e.shaped('cuboidmod:quantum_transmutation_chamber', [
      ' H ',
      'RAR',
      'QFQ'
    ], {
      H: 'minecraft:hopper',
      R: 'minecraft:redstone',
      A: 'ae2:controller',
      F: 'thermal:machine_furnace',
      Q: '#cuboidmod:quantum_singularities'
    })

    // silkworms
    e.custom({
      type: 'cuboidmod:transmuting',
      base: {
        item: 'cuboidmod:rotten_apple'
      },
      addition: {
        item: 'cuboidmod:protein_fiber'
      },
      result: {
        item: 'exnihilosequentia:silkworm',
        count: 6
      },
      work_ticks: 120,
      energy: 3000
    })

    // shears
    e.shaped('minecraft:shears', [
      ' I',
      'I ',
    ], {
      I: '#cuboidmod:ingots'
    })

    // drying cupboard recipe
    e.shaped('cuboidmod:drying_cupboard', [
      'PLP',
      'EAE',
      'ALA'
    ], {
      P: 'minecraft:dark_oak_planks',
      L: 'minecraft:dark_oak_log',
      E: 'mekanism:energy_tablet',
      A: 'mekanism:alloy_infused'
    })

    // piston recipe
    e.shaped('minecraft:piston', [
      'PPP',
      'STS',
      'SRS'
    ], {
      P: '#minecraft:planks',
      S: '#forge:stone',
      T: 'cuboidmod:thatldu_ingot',
      R: 'minecraft:redstone'
    })

    // flint and steel recipe
    e.shapeless('minecraft:flint_and_steel', [
      'minecraft:flint',
      '#cuboidmod:ingots'
    ])

    // shadow steel casing recipe
    e.shapeless('create:shadow_steel_casing', [
      '9x create:shadow_steel',
    ])


    // glowstone to glowstone dust
    e.shapeless('4x minecraft:glowstone_dust', [
      'minecraft:glowstone',
    ])

    // clay block to clay
    e.shapeless('4x minecraft:clay_ball', [
      'minecraft:clay',
    ])

    // compass
    e.shaped('minecraft:compass', [
      ' W ',
      'WRW',
      ' W '
    ], {
      W: 'cuboidmod:wikidium_ingot',
      R: 'minecraft:redstone'
    })

    // iron dust
    e.custom({
      type: 'cuboidmod:transmuting',
      base: {
        item: 'cuboidmod:wikidium_chunk'
      },
      addition: {
        item: 'minecraft:iron_nugget'
      },
      result: {
        item: 'immersiveengineering:dust_iron',
        count: 1
      },
      work_ticks: 300,
      energy: 3000
    })

    // Slime
    e.shapeless('minecraft:slime_ball', [
      'minecraft:lime_dye',
      'kubejs:albumen'
    ])

    // Concealment Key (aka shroud key)
    e.shapeless('storagedrawers:shroud_key', [
      'storagedrawers:drawer_key',
      'minecraft:ender_pearl'
    ])

    // piston recipe
    e.shaped('minecraft:name_tag', [
      ' II',
      'LSI',
      'PL '
    ], {
      P: 'minecraft:paper',
      L: 'minecraft:leather',
      I: '#forge:ingots/iron',
      S: '#minecraft:signs'
    })

    // lactic acid bucket
    e.shapeless('kubejs:lactic_acid_bucket', [
      'minecraft:milk_bucket',
      '#forge:dusts/salt',
      'minecraft:bucket'
    ])
    
    // make going from cellulose chiseled bricks back to cellulose blocks a "thing"
    // to give people a chance at correcting / reclaiming blocks
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "##",
        "##"
      ],
      "key": {
        "#": {
          "item": "cuboidmod:cellulose_chiseled_bricks"
        }
      },
      "result": {
        "item": "cuboidmod:cellulose_block",
        "count": 4
      }
    })

    // fiber optic tree
    e.shaped('cuboidmod:fiber_optic_tree', [
      'FOT',
      ' S ',
      'BDB'
    ], {
      F: 'cuboidmod:protein_fiber',
      O: 'minecraft:spider_eye',
      S: 'minecraft:stick',
      T: '#forge:sapling',
      B: 'minecraft:brick',
      D: 'minecraft:dirt'
    })
  
    // saddle
    e.shaped('minecraft:saddle', [
      'L N',
      'LLL',
      ' N '
    ], {
      L: 'minecraft:leather',
      N: '#forge:nuggets/iron'
    })
    
    // restore cloche recipe to 1.16.5 version
    e.shaped('immersiveengineering:cloche', [
      'GVG',
      'G G',
      'TCT'
    ], {
      T: '#forge:treated_wood',
      V: 'immersiveengineering:electron_tube',
      G: '#forge:glass',
      C: 'immersiveengineering:component_iron'
    }).id("immersiveengineering:crafting/cloche");

    // stonecutter
    e.shaped('minecraft:stonecutter', [
      ' W ',
      'SSS'
    ], {
      W: 'cuboidmod:wikidium_ingot',
      S: '#forge:stone'
    })

    // remove default crucible recipe
    e.remove({ output: 'exnihilosequentia:unfired_crucible' });

    // replace vanilla tools with cuboid tools in recipes (where possible)

    const minecraft_default_tools = [ 'stone', 'iron', 'golden', 'diamond', 'netherite']

    minecraft_default_tools.forEach((mc_name, index) => {
    
    const cuboid_name = cuboid_ores[index];
    
      e.replaceInput(
          { input: Item.of('minecraft:' + mc_name + '_sword'), type: 'minecraft:crafting_shaped'},
            Item.of('minecraft:' + mc_name + '_sword'),
            Item.of('cuboidmod:' + cuboid_name + '_sword')
          )
    
      e.replaceInput(
          { input: Item.of('minecraft:' + mc_name + '_axe'), type: 'minecraft:crafting_shaped'},
            Item.of('minecraft:' + mc_name + '_axe'),
            Item.of('cuboidmod:' + cuboid_name + '_axe')
          )

      e.replaceInput(
          { input: Item.of('minecraft:' + mc_name + '_pickaxe'), type: 'minecraft:crafting_shaped'},
            Item.of('minecraft:' + mc_name + '_pickaxe'),
            Item.of('cuboidmod:' + cuboid_name + '_pickaxe')
          )

      e.replaceInput(
          { input: Item.of('minecraft:' + mc_name + '_shovel'), type: 'minecraft:crafting_shaped'},
            Item.of('minecraft:' + mc_name + '_shovel'),
            Item.of('cuboidmod:' + cuboid_name + '_shovel')
          )
    })

    // replace smithing templates with cuboid variant
    e.replaceInput(
      { input: 'minecraft:netherite_upgrade_smithing_template' }, 
      'minecraft:netherite_upgrade_smithing_template',            
      'cuboidmod:thatldu_upgrade_smithing_template'
    )

    // three gravel makes flint
    e.shapeless('minecraft:flint', [
      'minecraft:gravel',
      'minecraft:gravel',
      'minecraft:gravel'
    ])

    // three maple syrup makes slime
    e.shapeless('minecraft:slime_ball', [
      'pamhc2trees:maplesyrupitem',
      'pamhc2trees:maplesyrupitem',
      'pamhc2trees:maplesyrupitem'
    ])

    // restore old darkutils blank plate recipe...
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'III',
        'SSS',
        'III'
      ],
      "key": {
        I: 'minecraft:black_dye',
        S: 'minecraft:stone'
      },
      "result": {
        "item": "darkutils:blank_plate",
        "count": 24
      }
    })

    // ...and remove the new one
    e.remove({id: "darkutils:stonecutting/dark_stones_to_blank_plate"})

    // ex nihilo sieves to create sieves and back
    e.shapeless('exnihilosequentia:string_mesh', [
      'createsifter:string_mesh'
    ])
    e.shapeless('createsifter:string_mesh', [
      'exnihilosequentia:string_mesh'
    ])

    e.shapeless('exnihilosequentia:flint_mesh', [
      'createsifter:andesite_mesh'
    ])
    e.shapeless('createsifter:andesite_mesh', [
      'exnihilosequentia:flint_mesh'
    ])

    e.shapeless('exnihilosequentia:iron_mesh', [
      'createsifter:zinc_mesh'
    ])
    e.shapeless('createsifter:zinc_mesh', [
      'exnihilosequentia:iron_mesh'
    ])    

    e.shapeless('exnihilosequentia:diamond_mesh', [
      'createsifter:brass_mesh'
    ])
    e.shapeless('createsifter:brass_mesh', [
      'exnihilosequentia:diamond_mesh'
    ])

    e.shapeless('exnihilosequentia:emerald_mesh', [
      'createsifter:custom_mesh'
    ])
    e.shapeless('createsifter:custom_mesh', [
      'exnihilosequentia:emerald_mesh'
    ])

    e.shapeless('exnihilosequentia:netherite_mesh', [
      'createsifter:advanced_brass_mesh'
    ])
    e.shapeless('createsifter:advanced_brass_mesh', [
      'exnihilosequentia:netherite_mesh'
    ])

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // recipes below this line are thanks to Fizz!
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -        

    // thermal crystallizer - certus quartz dust to crystal with water
    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
        {
          "fluid": "minecraft:water",
          "amount": 2000
        },
        {
          "tag": "forge:dusts/certus_quartz"
        }],
        "result": [
        {
          "item": "ae2:certus_quartz_crystal"
        }],
        "energy": 1000
      })
  
    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
        {
          "fluid": "exnihilosequentia:sea_water",
          "amount": 200
        },
        {
          "tag": "forge:dusts/certus_quartz"
        }],
        "result": [
        {
          "item": "ae2:certus_quartz_crystal"
        }],
        "energy": 100
      })

    // concrete powder to concrete via crucible
    let colors  = ["white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow", "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"];

    for (const element of colors) {
      e.recipes.exnihilosequentia.precipitate(('minecraft:' + element + '_concrete_powder'), ('minecraft:' + element + '_concrete') , 'minecraft:water')
    }   

    // hammering wood drops sawdust
    e.recipes.exnihilosequentia.crushing(Item.of('#minecraft:logs'),[
      {
            chance: 1.0,
            count: 1,
            item: 'thermal:sawdust'
        },
        {
            chance: 0.75,
            count: 1,
            item: 'thermal:sawdust'
        },
        {
            chance: 0.5,
            count: 2,
            item: 'thermal:sawdust'
        }
    ])

    // add sawdust to composting recipe
    e.recipes.exnihilosequentia.compost('#forge:sawdust', 200)

    e.smithing(
      Item.of('sophisticatedbackpacks:netherite_backpack'),
      'cuboidmod:thatldu_upgrade_smithing_template',
      Item.of('sophisticatedbackpacks:diamond_backpack'),
      'minecraft:netherite_ingot'
    )

}) 