// priority: 0

ServerEvents.recipes(e => {
  e.recipes.exnihilosequentia.sifting('minecraft:coarse_dirt', 'minecraft:gravel', [{ chance: 0.40, mesh: 'string' }])
  e.recipes.exnihilosequentia.sifting('minecraft:coarse_dirt', 'minecraft:dirt', [{ chance: 1.0, mesh: 'string' }, { chance: 0.40, mesh: 'flint' }])
})
