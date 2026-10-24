// priority: 0

ServerEvents.recipes(e => {
  e.recipes.exnihilosequentia.sifting('minecraft:soul_sand', 'minecraft:nether_wart', [{ chance: 0.10, mesh: 'iron' }, { chance: 0.25, mesh: 'diamond' }])
  e.recipes.exnihilosequentia.sifting('minecraft:soul_sand', 'minecraft:quartz', [{ chance: 0.33, mesh: 'iron' }, { chance: 0.33, mesh: 'iron' }, { chance: 0.50, mesh: 'diamond' }, { chance: 0.75, mesh: 'emerald' }, { chance: 1.0, mesh: 'netherite' }])
  e.recipes.exnihilosequentia.sifting('minecraft:soul_sand', 'minecraft:ghast_tear', [{ chance: 0.02, mesh: 'diamond' }])  
})
