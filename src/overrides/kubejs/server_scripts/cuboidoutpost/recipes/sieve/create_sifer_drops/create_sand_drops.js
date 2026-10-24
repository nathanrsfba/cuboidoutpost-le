ServerEvents.recipes(e => {
    // string mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:cocoa_beans').withChance(0.03),
    ], ['minecraft:sand', 'createsifter:string_mesh'])

    e.recipes.createsifterSifting([
        Item.of('minecraft:kelp').withChance(0.05),    
        Item.of('minecraft:sea_pickle').withChance(0.05),
    ], ['minecraft:sand', 'createsifter:string_mesh']).waterlogged();

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:cocoa_beans').withChance(0.03),        
        Item.of('minecraft:cactus').withChance(0.15),
        Item.of('minecraft:sugar_cane').withChance(0.15),    
        Item.of('minecraft:bamboo').withChance(0.15),
        Item.of('cuboidmod:salt').withChance(0.01),
    ], ['minecraft:sand', 'createsifter:andesite_mesh'])

    e.recipes.createsifterSifting([
        Item.of('minecraft:kelp').withChance(0.05),    
        Item.of('minecraft:sea_pickle').withChance(0.05),
    ], ['minecraft:sand', 'createsifter:andesite_mesh']).waterlogged();

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:cocoa_beans').withChance(0.03),        
        Item.of('minecraft:cactus').withChance(0.15),
        Item.of('minecraft:sugar_cane').withChance(0.15),    
        Item.of('minecraft:bamboo').withChance(0.15),
        Item.of('cuboidmod:salt').withChance(0.01),
        Item.of('minecraft:prismarine_shard').withChance(0.02),        
    ], ['minecraft:sand', 'createsifter:zinc_mesh'])

    e.recipes.createsifterSifting([
        Item.of('minecraft:kelp').withChance(0.05),    
        Item.of('minecraft:sea_pickle').withChance(0.05),
        Item.of('exnihilosequentia:tube_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:brain_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:bubble_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:fire_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:horn_coral_larva').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
    ], ['minecraft:sand', 'createsifter:zinc_mesh']).waterlogged();

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:cocoa_beans').withChance(0.03),        
        Item.of('minecraft:cactus').withChance(0.15),
        Item.of('minecraft:sugar_cane').withChance(0.15),    
        Item.of('minecraft:bamboo').withChance(0.15),
        Item.of('cuboidmod:salt').withChance(0.01),
        Item.of('minecraft:prismarine_shard').withChance(0.02), 
        Item.of('minecraft:prismarine_crystals').withChance(0.02),         
        Item.of('minecraft:prismarine_crystals').withChance(0.04),
    ], ['minecraft:sand', 'createsifter:brass_mesh'])

    e.recipes.createsifterSifting([
        Item.of('minecraft:kelp').withChance(0.05),    
        Item.of('minecraft:sea_pickle').withChance(0.05),
        Item.of('exnihilosequentia:tube_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:brain_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:bubble_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:fire_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:horn_coral_larva').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
    ], ['minecraft:sand', 'createsifter:brass_mesh']).waterlogged();

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:cocoa_beans').withChance(0.03),        
        Item.of('minecraft:cactus').withChance(0.15),
        Item.of('minecraft:sugar_cane').withChance(0.15),    
        Item.of('minecraft:bamboo').withChance(0.15),
        Item.of('cuboidmod:salt').withChance(0.01),
        Item.of('minecraft:prismarine_shard').withChance(0.02), 
        Item.of('minecraft:prismarine_crystals').withChance(0.02),         
        Item.of('minecraft:prismarine_crystals').withChance(0.04),
    ], ['minecraft:sand', 'createsifter:advanced_brass_mesh'])

    e.recipes.createsifterSifting([
        Item.of('minecraft:kelp').withChance(0.05),    
        Item.of('minecraft:sea_pickle').withChance(0.05),
        Item.of('exnihilosequentia:tube_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:brain_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:bubble_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:fire_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:horn_coral_larva').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
    ], ['minecraft:sand', 'createsifter:advanced_brass_mesh']).waterlogged();

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:cocoa_beans').withChance(0.03),        
        Item.of('minecraft:cactus').withChance(0.15),
        Item.of('minecraft:sugar_cane').withChance(0.15),    
        Item.of('minecraft:bamboo').withChance(0.15),
        Item.of('cuboidmod:salt').withChance(0.01),
        Item.of('minecraft:prismarine_shard').withChance(0.02), 
        Item.of('minecraft:prismarine_crystals').withChance(0.02),         
        Item.of('minecraft:prismarine_crystals').withChance(0.04),
    ], ['minecraft:sand', 'createsifter:custom_mesh'])

    e.recipes.createsifterSifting([
        Item.of('minecraft:kelp').withChance(0.05),    
        Item.of('minecraft:sea_pickle').withChance(0.05),
        Item.of('exnihilosequentia:tube_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:brain_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:bubble_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:fire_coral_larva').withChance(0.05),        
        Item.of('exnihilosequentia:horn_coral_larva').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
        Item.of('minecraft:seagrass').withChance(0.05),        
    ], ['minecraft:sand', 'createsifter:custom_mesh']).waterlogged();

})