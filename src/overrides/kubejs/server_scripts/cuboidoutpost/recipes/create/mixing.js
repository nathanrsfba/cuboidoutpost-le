// priority: 0
ServerEvents.recipes(e => {

    e.custom({
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "ae2"
        }
      ],
      "type": "create:mixing",
      "ingredients": [
        {
          "item": "tconstruct:grout",
          "amount": 1
        },
        {
          "fluid": "minecraft:water",
          "nbt": {},
          "amount": 250
        }
      ],
      "results": [
        {
          "item": "immersiveengineering:concrete",
          "count": 2
        }
      ],
      "heatRequirement": "none"
    })

  e.recipes.create.mixing('create:veridium', ['minecraft:stone', 'minecraft:green_dye'])
  e.recipes.create.mixing('create:ochrum', ['minecraft:stone', 'minecraft:brown_dye'])
  e.recipes.create.mixing('create:limestone', ['minecraft:stone', 'minecraft:lime_dye'])
  e.recipes.create.mixing('create:asurine', ['minecraft:stone', 'thermal:apatite'])  
  e.recipes.create.mixing('create:crimsite', ['minecraft:stone', 'thermal:cinnabar'])
  e.recipes.create.mixing('2x quark:jasper', ['minecraft:stone', 'minecraft:terracotta'])
  e.recipes.create.mixing('create:shadow_steel', ['powah:energized_steel_block', 'minecraft:obsidian', 'create:experience_block']).superheated()
  e.recipes.create.mixing('create:refined_radiance', ['mekanism:block_refined_glowstone', 'create:experience_block', 'minecraft:calcite']).superheated()

})
