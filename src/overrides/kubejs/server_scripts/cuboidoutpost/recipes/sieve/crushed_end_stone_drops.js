// priority: 0

ServerEvents.recipes(e => {
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:crushed_end_stone', 'minecraft:ender_pearl', [{ chance: 0.005, mesh: 'iron' }, { chance: 0.01, mesh: 'diamond' }, { chance: 0.015, mesh: 'emerald' }, { chance: 0.02, mesh: 'netherite' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:crushed_end_stone', 'rftoolsbase:dimensionalshard', [{ chance: 0.02, mesh: 'netherite' }])
})
