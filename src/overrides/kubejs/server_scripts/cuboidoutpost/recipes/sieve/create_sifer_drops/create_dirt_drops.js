ServerEvents.recipes(e => {
    // string mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.4),
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:granite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.4),
        Item.of('exnihilosequentia:tuff_pebble').withChance(0.4),
        Item.of('exnihilosequentia:calcite_pebble').withChance(0.4),
    ], ['minecraft:dirt', 'createsifter:string_mesh'])

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.4),
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:granite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.4),
        Item.of('exnihilosequentia:tuff_pebble').withChance(0.4),
        Item.of('exnihilosequentia:calcite_pebble').withChance(0.4),
    ], ['minecraft:dirt', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.4),
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:granite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.4),
        Item.of('exnihilosequentia:tuff_pebble').withChance(0.4),
        Item.of('exnihilosequentia:calcite_pebble').withChance(0.4),
    ], ['minecraft:dirt', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.4),
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:granite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.4),
        Item.of('exnihilosequentia:tuff_pebble').withChance(0.4),
        Item.of('exnihilosequentia:calcite_pebble').withChance(0.4),
        Item.of('immersiveengineering:seed').withChance(0.05),
        Item.of('exnihilosequentia:stone_pebble').withChance(0.8),
        ], ['minecraft:dirt', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.4),
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:granite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.4),
        Item.of('exnihilosequentia:tuff_pebble').withChance(0.4),
        Item.of('exnihilosequentia:calcite_pebble').withChance(0.4),
        Item.of('immersiveengineering:seed').withChance(0.05),
        Item.of('exnihilosequentia:stone_pebble').withChance(0.8),
        Item.of('exnihilosequentia:grass_seeds').withChance(0.05),
    ], ['minecraft:dirt', 'createsifter:advanced_brass_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.4),
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:granite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.4),
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.4),
        Item.of('exnihilosequentia:tuff_pebble').withChance(0.4),
        Item.of('exnihilosequentia:calcite_pebble').withChance(0.4),
        Item.of('immersiveengineering:seed').withChance(0.05),
        Item.of('exnihilosequentia:stone_pebble').withChance(0.8),
        Item.of('exnihilosequentia:grass_seeds').withChance(0.05),
    ], ['minecraft:dirt', 'createsifter:custom_mesh'])
})