// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:recycling",
        "ingredient": {
          "item": "minecraft:bone"
        },
        "results": [
          {
            "item": "kubejs:rna",
            "count": 1
          },
          {
            "item": "kubejs:rna",
            "count": 1,
            "chance": 0.25
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
        ],
        "work_ticks": 100,
        "energy": 1500
      });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:recycling",
        "ingredient": {
          "item": "minecraft:rotten_flesh"
        },
        "results": [
          {
            "item": "kubejs:rna",
            "count": 1
          },
          {
            "item": "kubejs:rna",
            "count": 1,
            "chance": 0.75
          },
          {
            "item": "kubejs:rna",
            "count": 1,
            "chance": 0.25
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
        ],
        "work_ticks": 120,
        "energy": 2000
      });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.remove({ "type": "cuboidmod:recycling", "ingredient": { "item": "thermal:machine_pulverizer" } });

    e.custom({
        "type": "cuboidmod:recycling",
        "ingredient": {
          "item": "thermal:machine_pulverizer"
        },
        "results": [
          {
            "item": "create:andesite_alloy",
            "count": 3
          },
          {
            "item": "mekanism:ingot_tin",
            "count": 2,
          },
          {
            "item": "minecraft:redstone",
            "count": 2
          },
          {
            "item": "minecraft:redstone",
            "count": 1,
            "chance": 0.5
          },          
          {
            "item": "create:cogwheel",
            "count": 1
          },
          {
            "item": "create:andesite_casing",
            "count": 1
          },
        ],
        "work_ticks": 120,
        "energy": 2000
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // ae2 crafting terminal to calculation processor and terminal
    e.custom({
        "type": "cuboidmod:recycling",
        "ingredient": {
          "item": "ae2:crafting_terminal"
        },
        "results": [
          {
            "item": "ae2:calculation_processor",
            "count": 1
          },
          {
            "item": "ae2:terminal",
            "count": 1
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },
        ],
        "work_ticks": 200,
        "energy": 5000
      })

    // ae2 drive to engineering processor and fluix cables
    e.custom({
      "type": "cuboidmod:recycling",
      "ingredient": {
        "item": "ae2:drive"
      },
      "results": [
        {
          "item": "ae2:engineering_processor",
          "count": 1
        },
        {
          "item": "ae2:engineering_processor",
          "count": 1,
          "chance": 0.35
        },
        {
          "item": "ae2:fluix_glass_cable",
          "count": 1,
          "chance": 0.5
        },
        {
          "item": "ae2:fluix_glass_cable",
          "count": 1,
          "chance": 0.2
        },
          {
            "item": "",
            "count": 0,
          },
          {
            "item": "",
            "count": 0,
          },        
      ],
      "work_ticks": 200,
      "energy": 500
    })
    
   // ae2 terminal to logic processor and formation core 
   e.custom({
      "type": "cuboidmod:recycling",
      "ingredient": {
        "item": "ae2:terminal"
      },
      "results": [
        {
          "item": "ae2:logic_processor",
          "count": 1
        },
        {
          "item": "ae2:logic_processor",
          "count": 1,
          "chance": 0.35
        },
        {
          "item": "ae2:formation_core",
          "count": 1,
          "chance": 0.5
        },
        {
          "item": "ae2:annihilation_core",
          "count": 1,
          "chance": 0.5
        },
        {
          "item": "ae2:quartz_glass",
          "count": 2,
          "chance": 0.4
        },
        {
          "item": "minecraft:glowstone_dust",
          "count": 2,
          "chance": 0.35
        }
      ],
      "work_ticks": 200,
      "energy": 500
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


})