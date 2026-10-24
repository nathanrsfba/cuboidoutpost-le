// priority: 0

ServerEvents.recipes(e => {
  // string drops
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'minecraft:flint', [{ chance: 0.25, mesh: 'string' }, { chance: 0.25, mesh: 'flint' }])
    
  // flint drops
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'thermal:niter', [{ chance: 0.05, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'thermal:cinnabar', [{ chance: 0.05, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'minecraft:coal', [{ chance: 0.125, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'minecraft:lapis_lazuli', [{ chance: 0.05, mesh: 'flint' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'thermal:apatite', [{ chance: 0.05, mesh: 'flint' }])

  // iron drops
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'thermal:sulfur', [{ chance: 0.05, mesh: 'flint' }, { chance: 0.10, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'minecraft:diamond', [{ chance: 0.025, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'exnihilosequentia:uranium_pieces', [{ chance: 0.125, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'mekanism:fluorite_gem', [{ chance: 0.025, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'exnihilosequentia:lead_pieces', [{ chance: 0.175, mesh: 'iron' }, { chance: 0.225, mesh: 'diamond' }])

  // diamond drops
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'minecraft:emerald', [{ chance: 0.05, mesh: 'diamond' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'exnihilosequentia:iron_pieces', [{ chance: 0.25, mesh: 'diamond' }])

  // emerald drops
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'powah:uraninite_raw', [{ chance: 0.025, mesh: 'emerald' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'exnihilomekanism:osmium_pieces', [{ chance: 0.10, mesh: 'emerald' }])

  // netherite drops
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'exnihilosequentia:gold_pieces', [{ chance: 0.15, mesh: 'netherite' }])
  e.recipes.exnihilosequentia.sifting('minecraft:gravel', 'exnihilosequentia:platinum_pieces', [{ chance: 0.15, mesh: 'netherite' }])

})
