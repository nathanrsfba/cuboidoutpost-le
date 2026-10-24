ServerEvents.recipes(e => {

    // darkness plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'BCB',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:ink_sac',
        C: 'minecraft:phantom_membrane'
      },
      "result": {
        "item": "darkutils:darkness_plate",
        "count": 3
      }
    }).id("darkutils:crafting/darkness_plate");

    // alert plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:glow_ink_sac',
        C: 'minecraft:glowstone_dust'
      },
      "result": {
        "item": "darkutils:alert_plate",
        "count": 3
      }
    }).id("darkutils:crafting/alert_plate");

    // flame plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:flint_and_steel',
        C: 'minecraft:blaze_powder'
      },
      "result": {
        "item": "darkutils:flame_plate",
        "count": 3
      }
    }).id("darkutils:crafting/flame_plate");

    // slowness plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:snow_block',
        C: 'minecraft:soul_sand'
      },
      "result": {
        "item": "darkutils:slowness_plate",
        "count": 3
      }
    }).id("darkutils:crafting/slowness_plate");

    // poison plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:spider_eye',
        C: 'minecraft:poisonous_potato'
      },
      "result": {
        "item": "darkutils:poison_plate",
        "count": 3
      }
    }).id("darkutils:crafting/poison_plate");

    // damage plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'cuboidmod:notarfbadium_sword',
        C: 'minecraft:crimson_fungus'
      },
      "result": {
        "item": "darkutils:damage_plate",
        "count": 3
      }
    }).id("darkutils:crafting/damage_plate");

    // vector plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'AAA',
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:slime_ball',
        C: 'minecraft:sugar'
      },
      "result": {
        "item": "darkutils:vector_plate",
        "count": 6
      }
    }).id("darkutils:crafting/vector_plate");    

    // fast vector plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'AAA',
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:vector_plate',
        B: 'minecraft:sugar',
        C: 'minecraft:gold_ingot'
      },
      "result": {
        "item": "darkutils:vector_plate_fast",
        "count": 6
      }
    }).id("darkutils:crafting/vector_plate_fast"); 

    // extreme vector plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'AAA',
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:vector_plate_fast',
        B: 'minecraft:sugar',
        C: 'minecraft:redstone'
      },
      "result": {
        "item": "darkutils:vector_plate_extreme",
        "count": 6
      }
    }).id("darkutils:crafting/vector_plate_extreme"); 

    // weakness plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:fermented_spider_eye',
        C: 'minecraft:brown_mushroom'
      },
      "result": {
        "item": "darkutils:weakness_plate",
        "count": 3
      }
    }).id("darkutils:crafting/weakness_plate");    

    // wither plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:wither_rose',
        C: 'minecraft:flint'
      },
      "result": {
        "item": "darkutils:wither_plate",
        "count": 3
      }
    }).id("darkutils:crafting/wither_plate");    

    // fatigue plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:prismarine_crystals',
        C: 'minecraft:prismarine_shard'
      },
      "result": {
        "item": "darkutils:fatigue_plate",
        "count": 3
      }
    }).id("darkutils:crafting/fatigue_plate"); 

    // hunger plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'minecraft:nether_wart',
        C: 'minecraft:rotten_flesh'
      },
      "result": {
        "item": "darkutils:hunger_plate",
        "count": 3
      }
    }).id("darkutils:crafting/hunger_plate"); 

    // ominous plate
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        'CBC',
        'AAA'
      ],
      "key": {
        A: 'darkutils:blank_plate',
        B: 'exnihilosequentia:blaze_doll',
        C: 'minecraft:nether_wart'
      },
      "result": {
        "item": "darkutils:omen_plate",
        "count": 3
      }
    }).id("darkutils:crafting/ominous_plate"); 

})