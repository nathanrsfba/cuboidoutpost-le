// priority: 0

ServerEvents.recipes(e => {
  // string drops
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:basalt_pebble', [{ chance: 0.30, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:andesite_pebble', [{ chance: 0.50, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:granite_pebble', [{ chance: 0.50, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:diorite_pebble', [{ chance: 0.50, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:blackstone_pebble', [{ chance: 0.30, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:tuff_pebble', [{ chance: 0.30, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:calcite_pebble', [{ chance: 0.30, mesh: 'string' }, { chance: 0.50, mesh: 'string' }])

  // flint drops

  // iron drops
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:grass_seeds', [{ chance: 0.05, mesh: 'iron' }])

  // diamond drops
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'immersiveengineering:seed', [{ chance: 0.05, mesh: 'diamond' }])
  e.recipes.exnihilosequentia.sifting('minecraft:dirt', 'exnihilosequentia:stone_pebble', [{ chance: 1.0, mesh: 'diamond' }, { chance: 1.0, mesh: 'diamond' }, { chance: 0.1, mesh: 'diamond' }, { chance: 0.1, mesh: 'diamond' }, { chance: 0.5, mesh: 'diamond' }, { chance: 0.5, mesh: 'diamond' }])

  // emerald drops


})
