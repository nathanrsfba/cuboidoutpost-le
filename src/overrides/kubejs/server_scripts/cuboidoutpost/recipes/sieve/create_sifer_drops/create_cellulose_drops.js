// priority: 0

ServerEvents.recipes(e => {

    e.recipes.createsifterSifting([
        Item.of('minecraft:oak_sapling').withChance(0.075),
        Item.of('minecraft:spruce_sapling').withChance(0.075),
        Item.of('minecraft:birch_sapling').withChance(0.075),
        Item.of('minecraft:dark_oak_sapling').withChance(0.075),
        Item.of('minecraft:acacia_sapling').withChance(0.075),
        Item.of('minecraft:jungle_sapling').withChance(0.075),
    ], ['cuboidmod:cellulose_block', 'createsifter:string_mesh'])

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:oak_sapling').withChance(0.075),
        Item.of('minecraft:spruce_sapling').withChance(0.075),
        Item.of('minecraft:birch_sapling').withChance(0.075),
        Item.of('minecraft:dark_oak_sapling').withChance(0.075),
        Item.of('minecraft:acacia_sapling').withChance(0.075),
        Item.of('minecraft:jungle_sapling').withChance(0.075),
    ], ['cuboidmod:cellulose_block', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:oak_sapling').withChance(0.075),
        Item.of('minecraft:spruce_sapling').withChance(0.075),
        Item.of('minecraft:birch_sapling').withChance(0.075),
        Item.of('minecraft:dark_oak_sapling').withChance(0.075),
        Item.of('minecraft:acacia_sapling').withChance(0.075),
        Item.of('minecraft:jungle_sapling').withChance(0.075),
    ], ['cuboidmod:cellulose_block', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:oak_sapling').withChance(0.075),
        Item.of('minecraft:spruce_sapling').withChance(0.075),
        Item.of('minecraft:birch_sapling').withChance(0.075),
        Item.of('minecraft:dark_oak_sapling').withChance(0.075),
        Item.of('minecraft:acacia_sapling').withChance(0.075),
        Item.of('minecraft:jungle_sapling').withChance(0.075),
    ], ['cuboidmod:cellulose_block', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:oak_sapling').withChance(0.075),
        Item.of('minecraft:spruce_sapling').withChance(0.075),
        Item.of('minecraft:birch_sapling').withChance(0.075),
        Item.of('minecraft:dark_oak_sapling').withChance(0.075),
        Item.of('minecraft:acacia_sapling').withChance(0.075),
        Item.of('minecraft:jungle_sapling').withChance(0.075),
    ], ['cuboidmod:cellulose_block', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:oak_sapling').withChance(0.075),
        Item.of('minecraft:spruce_sapling').withChance(0.075),
        Item.of('minecraft:birch_sapling').withChance(0.075),
        Item.of('minecraft:dark_oak_sapling').withChance(0.075),
        Item.of('minecraft:acacia_sapling').withChance(0.075),
        Item.of('minecraft:jungle_sapling').withChance(0.075),
    ], ['cuboidmod:cellulose_block', 'createsifter:advanced_brass_mesh'])

})
