// priority: 0

ServerEvents.recipes(e => {
  // string drops
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:cocoa_beans', [{ chance: 0.03, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:kelp', [{ chance: 0.05, mesh: 'string' }], true)
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:sea_pickle', [{ chance: 0.05, mesh: 'string' }], true)

  // flint drops
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:cactus', [{ chance: 0.15, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:sugar_cane', [{ chance: 0.15, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:bamboo', [{ chance: 0.15, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'cuboidmod:salt', [{ chance: 0.01, mesh: 'flint' }])

  // iron drops
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:prismarine_shard', [{ chance: 0.02, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'exnihilosequentia:tube_coral_larva', [{ chance: 0.05, mesh: 'iron' }], true)
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'exnihilosequentia:brain_coral_larva', [{ chance: 0.05, mesh: 'iron' }], true)
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'exnihilosequentia:bubble_coral_larva', [{ chance: 0.05, mesh: 'iron' }], true)
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'exnihilosequentia:fire_coral_larva', [{ chance: 0.05, mesh: 'iron' }], true)
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'exnihilosequentia:horn_coral_larva', [{ chance: 0.05, mesh: 'iron' }], true)
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:seagrass', [{ chance: 0.05, mesh: 'iron' }, { chance: 0.05, mesh: 'iron' }], true)

  // diamond drops
  e.recipes.exnihilosequentia.sifting('minecraft:sand', 'minecraft:prismarine_crystals', [{ chance: 0.02, mesh: 'diamond' }, { chance: 0.04, mesh: 'diamond' }])

  // emerald drops


})
