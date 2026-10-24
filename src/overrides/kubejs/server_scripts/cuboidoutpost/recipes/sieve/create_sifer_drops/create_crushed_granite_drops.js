// priority: 0

ServerEvents.recipes(e => {

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:copper_pieces').withChance(0.25),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.25),
    ], ['exnihilosequentia:crushed_granite', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:copper_pieces').withChance(0.175),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.175),
    ], ['exnihilosequentia:crushed_granite', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:copper_pieces').withChance(0.225),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.225),
        Item.of('minecraft:emerald').withChance(0.075), 
    ], ['exnihilosequentia:crushed_granite', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:copper_pieces').withChance(0.225),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.225),
        Item.of('minecraft:emerald').withChance(0.125), 
    ], ['exnihilosequentia:crushed_granite', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:copper_pieces').withChance(0.225),
        Item.of('exnihilosequentia:nickel_pieces').withChance(0.225),
        Item.of('minecraft:emerald').withChance(0.15), 
    ], ['exnihilosequentia:crushed_granite', 'createsifter:advanced_brass_mesh'])

})
