// priority: 0

ServerEvents.recipes(e => {

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('ae2:certus_quartz_crystal').withChance(0.7),
    ], ['ae2:smooth_sky_stone_block', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('ae2:certus_quartz_crystal').withChance(0.8),
        Item.of('ae2:certus_quartz_crystal').withChance(0.225),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.1),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.8),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.225),
    ], ['ae2:smooth_sky_stone_block', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('ae2:certus_quartz_crystal').withChance(0.8),
        Item.of('ae2:certus_quartz_crystal').withChance(0.225),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.1),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.8),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.225),
        Item.of('ae2:fluix_crystal').withChance(0.05),
    ], ['ae2:smooth_sky_stone_block', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('ae2:certus_quartz_crystal').withChance(0.8),
        Item.of('ae2:certus_quartz_crystal').withChance(0.225),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.1),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.8),
        Item.of('ae2:charged_certus_quartz_crystal').withChance(0.225),
        Item.of('ae2:fluix_crystal').withChance(0.075),
    ], ['ae2:smooth_sky_stone_block', 'createsifter:advanced_brass_mesh'])

})
