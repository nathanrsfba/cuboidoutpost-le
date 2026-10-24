// priority: 0

ServerEvents.recipes(e => {
  // string drops
  e.recipes.exnihilosequentia.sifting('cuboidmod:cellulose_block', 'minecraft:oak_sapling', [{ chance: 0.075, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:cellulose_block', 'minecraft:spruce_sapling', [{ chance: 0.075, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:cellulose_block', 'minecraft:birch_sapling', [{ chance: 0.075, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:cellulose_block', 'minecraft:dark_oak_sapling', [{ chance: 0.075, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:cellulose_block', 'minecraft:acacia_sapling', [{ chance: 0.075, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:cellulose_block', 'minecraft:jungle_sapling', [{ chance: 0.075, mesh: 'string' }])


  e.recipes.exnihilosequentia.precipitate('minecraft:bone_meal', 'minecraft:slime_block', 'exnihilosequentia:witch_water')

})
