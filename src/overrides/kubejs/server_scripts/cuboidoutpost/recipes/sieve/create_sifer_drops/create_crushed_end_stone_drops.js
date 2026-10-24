// priority: 0

ServerEvents.recipes(e => {

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:ender_pearl').withChance(0.005),
    ], ['exnihilosequentia:crushed_end_stone', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:ender_pearl').withChance(0.01),
    ], ['exnihilosequentia:crushed_end_stone', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:ender_pearl').withChance(0.015),
    ], ['exnihilosequentia:crushed_end_stone', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:ender_pearl').withChance(0.02),
        Item.of('rftoolsbase:dimensionalshard').withChance(0.02),
    ], ['exnihilosequentia:crushed_end_stone', 'createsifter:advanced_brass_mesh'])

})
