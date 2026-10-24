// priority: 0

ServerEvents.recipes(e => {

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.25),
        Item.of('minecraft:potato').withChance(0.10),
        Item.of('minecraft:carrot').withChance(0.10),
    ], ['cuboidmod:organically_enriched_sand', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.35),
        Item.of('minecraft:potato').withChance(0.8),
        Item.of('minecraft:carrot').withChance(0.8),
        Item.of('minecraft:pumpkin_seeds').withChance(0.35),
        Item.of('minecraft:melon_seeds').withChance(0.35),
        Item.of('minecraft:sweet_berries').withChance(0.075),
    ], ['cuboidmod:organically_enriched_sand', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.35),
        Item.of('minecraft:potato').withChance(0.8),
        Item.of('minecraft:carrot').withChance(0.8),
        Item.of('minecraft:pumpkin_seeds').withChance(0.35),
        Item.of('minecraft:melon_seeds').withChance(0.35),
        Item.of('minecraft:sweet_berries').withChance(0.075),
        Item.of('minecraft:beetroot_seeds').withChance(0.2), 
    ], ['cuboidmod:organically_enriched_sand', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.35),
        Item.of('minecraft:potato').withChance(0.8),
        Item.of('minecraft:carrot').withChance(0.8),
        Item.of('minecraft:pumpkin_seeds').withChance(0.35),
        Item.of('minecraft:melon_seeds').withChance(0.35),
        Item.of('minecraft:sweet_berries').withChance(0.075),
        Item.of('minecraft:beetroot_seeds').withChance(0.2), 
    ], ['cuboidmod:organically_enriched_sand', 'createsifter:advanced_brass_mesh'])

})

