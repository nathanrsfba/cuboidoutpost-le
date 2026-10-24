// priority: 0

ServerEvents.recipes(e => {

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:gold_pieces').withChance(0.25),
        Item.of('minecraft:netherite_scrap').withChance(0.004),
    ], ['exnihilosequentia:crushed_netherrack', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:gold_pieces').withChance(0.35),
        Item.of('minecraft:netherite_scrap').withChance(0.008),
    ], ['exnihilosequentia:crushed_netherrack', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:gold_pieces').withChance(0.45),
        Item.of('minecraft:netherite_scrap').withChance(0.008),
    ], ['exnihilosequentia:crushed_netherrack', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:gold_pieces').withChance(0.45),
        Item.of('minecraft:netherite_scrap').withChance(0.008),
    ], ['exnihilosequentia:crushed_netherrack', 'createsifter:advanced_brass_mesh'])

})
