// priority: 0

ServerEvents.recipes(e => {

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:tin_pieces').withChance(0.25),
        Item.of('exnihilosequentia:zinc_pieces').withChance(0.25),
    ], ['exnihilosequentia:crushed_andesite', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:tin_pieces').withChance(0.175),
        Item.of('exnihilosequentia:zinc_pieces').withChance(0.175),
    ], ['exnihilosequentia:crushed_andesite', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:tin_pieces').withChance(0.225),
        Item.of('exnihilosequentia:zinc_pieces').withChance(0.225),
    ], ['exnihilosequentia:crushed_andesite', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:tin_pieces').withChance(0.225),
        Item.of('exnihilosequentia:zinc_pieces').withChance(0.225),
    ], ['exnihilosequentia:crushed_andesite', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:tin_pieces').withChance(0.225),
        Item.of('exnihilosequentia:zinc_pieces').withChance(0.225),
    ], ['exnihilosequentia:crushed_andesite', 'createsifter:advanced_brass_mesh'])

})
