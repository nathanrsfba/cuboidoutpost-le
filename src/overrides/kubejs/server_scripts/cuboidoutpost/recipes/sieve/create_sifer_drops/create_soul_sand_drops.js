ServerEvents.recipes(e => {
    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:nether_wart').withChance(0.1),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.33),
    ], ['minecraft:soul_sand', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:nether_wart').withChance(0.1),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.50),        
        Item.of('minecraft:ghast_tear').withChance(0.02),
    ], ['minecraft:soul_sand', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:nether_wart').withChance(0.1),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.50),
        Item.of('minecraft:quartz').withChance(0.75),        
        Item.of('minecraft:ghast_tear').withChance(0.02),
    ], ['minecraft:soul_sand', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:nether_wart').withChance(0.1),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.33),
        Item.of('minecraft:quartz').withChance(0.50),
        Item.of('minecraft:quartz').withChance(0.75),        
        Item.of('minecraft:quartz').withChance(1.0),        
        Item.of('minecraft:ghast_tear').withChance(0.02),
    ], ['minecraft:soul_sand', 'createsifter:advanced_brass_mesh'])
})