ServerEvents.recipes(e => {
    // remove some millstone outputs
    e.recipes.create.milling('exnihilosequentia:crushed_andesite', 'minecraft:andesite').id("create:milling/andesite");
    e.recipes.create.milling('exnihilosequentia:crushed_granite', 'minecraft:granite').id("create:milling/granite");
    e.recipes.create.milling('exnihilosequentia:crushed_dripstone', 'minecraft:dripstone_block').id("create:milling/dripstone_block");

    // add crushed stones to the millstone
    const crushed_stones = [ 'end_stone', 'basalt', 'blackstone', 'calcite', 'deepslate', 'diorite', 'netherrack', 'tuff']

    for (const name of crushed_stones) {
      e.recipes.create.milling('exnihilosequentia:crushed_' + name, 'minecraft:' + name)
    } 

})

