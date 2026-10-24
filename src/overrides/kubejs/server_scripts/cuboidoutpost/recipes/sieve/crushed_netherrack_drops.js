// priority: 0

ServerEvents.recipes(e => {
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:crushed_netherrack', 'exnihilosequentia:gold_pieces', [{ chance: 0.25, mesh: 'iron' }, { chance: 0.35, mesh: 'diamond' }, { chance: 0.45, mesh: 'emerald' }])
  e.recipes.exnihilosequentia.sifting('exnihilosequentia:crushed_netherrack', 'minecraft:netherite_scrap', [{ chance: 0.004, mesh: 'iron' }, { chance: 0.008, mesh: 'diamond' }])
})
