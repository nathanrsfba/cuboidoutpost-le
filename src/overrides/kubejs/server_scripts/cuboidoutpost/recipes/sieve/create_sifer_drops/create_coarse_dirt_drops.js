ServerEvents.recipes(e => {
    // string mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gravel').withChance(0.4),
        Item.of('minecraft:dirt').withChance(1.0),
    ], ['minecraft:coarse_dirt', 'createsifter:string_mesh'])

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gravel').withChance(0.4),
        Item.of('minecraft:dirt').withChance(1.0),
        Item.of('minecraft:dirt').withChance(0.4),        
    ], ['minecraft:coarse_dirt', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gravel').withChance(0.4),
        Item.of('minecraft:dirt').withChance(1.0),
        Item.of('minecraft:dirt').withChance(0.4), 
    ], ['minecraft:coarse_dirt', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gravel').withChance(0.4),
        Item.of('minecraft:dirt').withChance(1.0),
        Item.of('minecraft:dirt').withChance(0.4), 
        ], ['minecraft:coarse_dirt', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gravel').withChance(0.4),
        Item.of('minecraft:dirt').withChance(1.0),
        Item.of('minecraft:dirt').withChance(0.4), 
    ], ['minecraft:coarse_dirt', 'createsifter:advanced_brass_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gravel').withChance(0.4),
        Item.of('minecraft:dirt').withChance(1.0),
        Item.of('minecraft:dirt').withChance(0.4), 
    ], ['minecraft:coarse_dirt', 'createsifter:custom_mesh'])
})