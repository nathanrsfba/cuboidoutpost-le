ServerEvents.recipes(e => {
    // string mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25)
    ], ['minecraft:gravel', 'createsifter:string_mesh'])

    // flint mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:flint').withChance(0.25),        
        Item.of('thermal:niter').withChance(0.05),
        Item.of('thermal:cinnabar').withChance(0.05),
        Item.of('minecraft:coal').withChance(0.125),
        Item.of('minecraft:lapis_lazuli').withChance(0.05),
        Item.of('thermal:apatite').withChance(0.05),
        Item.of('thermal:sulfur').withChance(0.05),
    ], ['minecraft:gravel', 'createsifter:andesite_mesh'])

    // iron mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:flint').withChance(0.25),        
        Item.of('thermal:niter').withChance(0.05),
        Item.of('thermal:cinnabar').withChance(0.05),
        Item.of('minecraft:coal').withChance(0.125),
        Item.of('minecraft:lapis_lazuli').withChance(0.05),
        Item.of('thermal:apatite').withChance(0.05),
        Item.of('thermal:sulfur').withChance(0.10),
        Item.of('minecraft:diamond').withChance(0.025),
        Item.of('exnihilosequentia:uranium_pieces').withChance(0.125),        
        Item.of('mekanism:fluorite_gem').withChance(0.025),        
        Item.of('exnihilosequentia:lead_pieces').withChance(0.175),        
    ], ['minecraft:gravel', 'createsifter:zinc_mesh'])

    // diamond mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:flint').withChance(0.25),        
        Item.of('thermal:niter').withChance(0.05),
        Item.of('thermal:cinnabar').withChance(0.05),
        Item.of('minecraft:coal').withChance(0.125),
        Item.of('minecraft:lapis_lazuli').withChance(0.05),
        Item.of('thermal:apatite').withChance(0.05),
        Item.of('thermal:sulfur').withChance(0.10),
        Item.of('minecraft:diamond').withChance(0.025),
        Item.of('exnihilosequentia:uranium_pieces').withChance(0.125),        
        Item.of('mekanism:fluorite_gem').withChance(0.025),        
        Item.of('exnihilosequentia:lead_pieces').withChance(0.225),  
        Item.of('minecraft:emerald').withChance(0.05),        
        Item.of('exnihilosequentia:iron_pieces').withChance(0.25),
    ], ['minecraft:gravel', 'createsifter:brass_mesh'])

    // emerald mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:flint').withChance(0.25),        
        Item.of('thermal:niter').withChance(0.05),
        Item.of('thermal:cinnabar').withChance(0.05),
        Item.of('minecraft:coal').withChance(0.125),
        Item.of('minecraft:lapis_lazuli').withChance(0.05),
        Item.of('thermal:apatite').withChance(0.05),
        Item.of('thermal:sulfur').withChance(0.10),
        Item.of('minecraft:diamond').withChance(0.025),
        Item.of('exnihilosequentia:uranium_pieces').withChance(0.125),        
        Item.of('mekanism:fluorite_gem').withChance(0.025),        
        Item.of('exnihilosequentia:lead_pieces').withChance(0.225),  
        Item.of('minecraft:emerald').withChance(0.05),        
        Item.of('exnihilosequentia:iron_pieces').withChance(0.25), 
        Item.of('powah:uraninite_raw').withChance(0.025),        
        Item.of('exnihilomekanism:osmium_pieces').withChance(0.1),         
    ], ['minecraft:gravel', 'createsifter:custom_mesh'])

    // netherite mesh drops
    e.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:flint').withChance(0.25),        
        Item.of('thermal:niter').withChance(0.05),
        Item.of('thermal:cinnabar').withChance(0.05),
        Item.of('minecraft:coal').withChance(0.125),
        Item.of('minecraft:lapis_lazuli').withChance(0.05),
        Item.of('thermal:apatite').withChance(0.05),
        Item.of('thermal:sulfur').withChance(0.10),
        Item.of('minecraft:diamond').withChance(0.025),
        Item.of('exnihilosequentia:uranium_pieces').withChance(0.125),        
        Item.of('mekanism:fluorite_gem').withChance(0.025),        
        Item.of('exnihilosequentia:lead_pieces').withChance(0.225),  
        Item.of('minecraft:emerald').withChance(0.05),        
        Item.of('exnihilosequentia:iron_pieces').withChance(0.25), 
        Item.of('powah:uraninite_raw').withChance(0.025),        
        Item.of('exnihilomekanism:osmium_pieces').withChance(0.1), 
        Item.of('exnihilosequentia:gold_pieces').withChance(0.15),        
        Item.of('exnihilosequentia:platinum_pieces').withChance(0.15), 
    ], ['minecraft:gravel', 'createsifter:advanced_brass_mesh'])


})

