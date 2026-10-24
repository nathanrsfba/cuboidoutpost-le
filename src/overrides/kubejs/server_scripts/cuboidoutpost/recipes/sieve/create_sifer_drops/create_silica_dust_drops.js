// priority: 0

ServerEvents.recipes(e => {

    // string mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('cuboidmod:salt').withChance(0.35),
    ], ['cuboidmod:silica_dust_block', 'createsifter:string_mesh'])

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('cuboidmod:salt').withChance(0.35),
    ], ['cuboidmod:silica_dust_block', 'createsifter:andesite_mesh'])    

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('cuboidmod:salt').withChance(0.35),
        Item.of('minecraft:fern').withChance(0.05),
        Item.of('minecraft:large_fern').withChance(0.05),
    ], ['cuboidmod:silica_dust_block', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('cuboidmod:salt').withChance(0.35),
        Item.of('minecraft:fern').withChance(0.05),
        Item.of('minecraft:large_fern').withChance(0.05),
        Item.of('exnihilosequentia:mycelium_spores').withChance(0.075),
    ], ['cuboidmod:silica_dust_block', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('cuboidmod:salt').withChance(0.35),
        Item.of('minecraft:fern').withChance(0.05),
        Item.of('minecraft:large_fern').withChance(0.05),
        Item.of('exnihilosequentia:mycelium_spores').withChance(0.075),
    ], ['cuboidmod:silica_dust_block', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.20),
        Item.of('cuboidmod:salt').withChance(0.35),
        Item.of('minecraft:fern').withChance(0.05),
        Item.of('minecraft:large_fern').withChance(0.05),
        Item.of('exnihilosequentia:mycelium_spores').withChance(0.075),
    ], ['cuboidmod:silica_dust_block', 'createsifter:advanced_brass_mesh'])

})

