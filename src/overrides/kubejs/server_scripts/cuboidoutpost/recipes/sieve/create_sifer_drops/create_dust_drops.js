// priority: 0

ServerEvents.recipes(e => {

    e.recipes.createsifterSifting([
        Item.of('minecraft:gunpowder').withChance(0.07),
        Item.of('minecraft:bone_meal').withChance(0.2),
    ], ['exnihilosequentia:dust', 'createsifter:string_mesh'])

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gunpowder').withChance(0.07),
        Item.of('minecraft:bone_meal').withChance(0.2),
        Item.of('ae2:sky_dust').withChance(0.1),        
    ], ['exnihilosequentia:dust', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gunpowder').withChance(0.07),
        Item.of('minecraft:bone_meal').withChance(0.2),
        Item.of('ae2:sky_dust').withChance(0.1),
        Item.of('minecraft:blaze_powder').withChance(0.04),
        Item.of('minecraft:redstone').withChance(0.125),
        Item.of('minecraft:glowstone_dust').withChance(0.0925),
        Item.of('ae2:certus_quartz_dust').withChance(0.15),
    ], ['exnihilosequentia:dust', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gunpowder').withChance(0.07),
        Item.of('minecraft:bone_meal').withChance(0.2),
        Item.of('ae2:sky_dust').withChance(0.1),
        Item.of('minecraft:blaze_powder').withChance(0.04),
        Item.of('minecraft:redstone').withChance(0.125),
        Item.of('minecraft:glowstone_dust').withChance(0.0925),
        Item.of('ae2:certus_quartz_dust').withChance(0.15),        
        Item.of('ae2:fluix_dust').withChance(0.03),
        Item.of('thermal:quartz_dust').withChance(0.05),
    ], ['exnihilosequentia:dust', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gunpowder').withChance(0.07),
        Item.of('minecraft:bone_meal').withChance(0.2),
        Item.of('ae2:sky_dust').withChance(0.1),
        Item.of('minecraft:blaze_powder').withChance(0.04),
        Item.of('minecraft:redstone').withChance(0.125),
        Item.of('minecraft:glowstone_dust').withChance(0.0925),
        Item.of('ae2:certus_quartz_dust').withChance(0.15),        
        Item.of('ae2:fluix_dust').withChance(0.03),
        Item.of('thermal:quartz_dust').withChance(0.05),
    ], ['exnihilosequentia:dust', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:gunpowder').withChance(0.07),
        Item.of('minecraft:bone_meal').withChance(0.2),
        Item.of('ae2:sky_dust').withChance(0.1),
        Item.of('minecraft:blaze_powder').withChance(0.04),
        Item.of('minecraft:redstone').withChance(0.125),
        Item.of('minecraft:glowstone_dust').withChance(0.0925),
        Item.of('ae2:certus_quartz_dust').withChance(0.15),        
        Item.of('ae2:fluix_dust').withChance(0.03),
        Item.of('thermal:quartz_dust').withChance(0.05),
    ], ['exnihilosequentia:dust', 'createsifter:advanced_brass_mesh'])

})
