// priority: 0

ServerEvents.recipes(e => {

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:silver_pieces').withChance(0.25),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.25),
    ], ['exnihilosequentia:crushed_diorite', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:silver_pieces').withChance(0.25),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.25),
        Item.of('exnihilosequentia:silver_pieces').withChance(0.175),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.175),
        Item.of('minecraft:diamond').withChance(0.075),        
    ], ['exnihilosequentia:crushed_diorite', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:silver_pieces').withChance(0.25),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.25),
        Item.of('exnihilosequentia:silver_pieces').withChance(0.175),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.175),        
        Item.of('exnihilosequentia:silver_pieces').withChance(0.225),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.225),
        Item.of('minecraft:diamond').withChance(0.1), 
    ], ['exnihilosequentia:crushed_diorite', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:silver_pieces').withChance(0.25),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.25),
        Item.of('exnihilosequentia:silver_pieces').withChance(0.175),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.175),        
        Item.of('exnihilosequentia:silver_pieces').withChance(0.225),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.225),
        Item.of('minecraft:diamond').withChance(0.125), 
    ], ['exnihilosequentia:crushed_diorite', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:silver_pieces').withChance(0.25),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.25),
        Item.of('exnihilosequentia:silver_pieces').withChance(0.175),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.175),        
        Item.of('exnihilosequentia:silver_pieces').withChance(0.225),
        Item.of('exnihilosequentia:aluminum_pieces').withChance(0.225),
        Item.of('minecraft:diamond').withChance(0.15), 
    ], ['exnihilosequentia:crushed_diorite', 'createsifter:advanced_brass_mesh'])

})
