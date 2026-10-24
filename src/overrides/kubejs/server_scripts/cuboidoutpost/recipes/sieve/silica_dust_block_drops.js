// priority: 0

ServerEvents.recipes(e => {
  // string drops
  e.recipes.exnihilosequentia.sifting('cuboidmod:silica_dust_block', 'minecraft:bone_meal', [{ chance: 0.20, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:silica_dust_block', 'cuboidmod:salt', [{ chance: 0.35, mesh: 'string' }])
    
  // flint drops

  // iron drops
  e.recipes.exnihilosequentia.sifting('cuboidmod:silica_dust_block', 'minecraft:fern', [{ chance: 0.05, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('cuboidmod:silica_dust_block', 'minecraft:large_fern', [{ chance: 0.05, mesh: 'iron' }])

  // diamond drops
  e.recipes.exnihilosequentia.sifting('cuboidmod:silica_dust_block', 'exnihilosequentia:mycelium_spores', [{ chance: 0.075, mesh: 'diamond' }])  

})
