// priority: 0

ServerEvents.recipes(e => {
  // string drops
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'minecraft:gunpowder', [{ chance: 0.07, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'minecraft:bone_meal', [{ chance: 0.20, mesh: 'string' }])
    
  // flint drops
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'ae2:sky_dust', [{ chance: 0.10, mesh: 'flint' }])
  
  // iron drops
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'minecraft:blaze_powder', [{ chance: 0.04, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'minecraft:redstone', [{ chance: 0.125, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'minecraft:glowstone_dust', [{ chance: 0.0925, mesh: 'iron' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'ae2:certus_quartz_dust', [{ chance: 0.15, mesh: 'iron' }])

  // diamond drops
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'ae2:fluix_dust', [{ chance: 0.03, mesh: 'diamond' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:dust', 'thermal:quartz_dust', [{ chance: 0.05, mesh: 'diamond' }])

  // emerald drops

  // netherite drops

})
