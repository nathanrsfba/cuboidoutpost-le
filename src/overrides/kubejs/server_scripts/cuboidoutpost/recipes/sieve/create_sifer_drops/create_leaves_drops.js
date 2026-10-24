// priority: 0

ServerEvents.recipes(e => {

 const sieve = (input, mesh, output1, chance1, output2, chance2, output3, chance3) => {
    e.recipes.createsifterSifting([
        Item.of(output1).withChance(chance1),
        Item.of(output2).withChance(chance2),
        Item.of(output3).withChance(chance3),
    ], [input, mesh])
  }

  sieve("minecraft:oak_leaves", "createsifter:string_mesh", "minecraft:oak_sapling", 0.05, "minecraft:apple", 0.05, "minecraft:golden_apple", 0.001);
  sieve("minecraft:oak_leaves", "createsifter:andesite_mesh", "minecraft:oak_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:oak_leaves", "createsifter:zinc_mesh", "minecraft:oak_sapling", 0.15, "minecraft:apple", 0.15, "minecraft:golden_apple", 0.005);
  sieve("minecraft:oak_leaves", "createsifter:brass_mesh", "minecraft:oak_sapling", 0.20, "minecraft:apple", 0.20, "minecraft:golden_apple", 0.01);
  sieve("minecraft:oak_leaves", "createsifter:custom_mesh", "minecraft:oak_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:oak_leaves", "createsifter:advanced_brass_mesh", "minecraft:oak_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);

  sieve("minecraft:dark_oak_leaves", "createsifter:string_mesh", "minecraft:dark_oak_sapling", 0.05, "minecraft:apple", 0.05, "minecraft:golden_apple", 0.001);
  sieve("minecraft:dark_oak_leaves", "createsifter:andesite_mesh", "minecraft:dark_oak_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:dark_oak_leaves", "createsifter:zinc_mesh", "minecraft:dark_oak_sapling", 0.15, "minecraft:apple", 0.15, "minecraft:golden_apple", 0.005);
  sieve("minecraft:dark_oak_leaves", "createsifter:brass_mesh", "minecraft:dark_oak_sapling", 0.20, "minecraft:apple", 0.20, "minecraft:golden_apple", 0.01);
  sieve("minecraft:dark_oak_leaves", "createsifter:custom_mesh", "minecraft:dark_oak_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:dark_oak_leaves", "createsifter:advanced_brass_mesh", "minecraft:dark_oak_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);

  sieve("minecraft:spruce_leaves", "createsifter:string_mesh", "minecraft:spruce_sapling", 0.05, "minecraft:apple", 0.05, "minecraft:golden_apple", 0.001);
  sieve("minecraft:spruce_leaves", "createsifter:andesite_mesh", "minecraft:spruce_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:spruce_leaves", "createsifter:zinc_mesh", "minecraft:spruce_sapling", 0.15, "minecraft:apple", 0.15, "minecraft:golden_apple", 0.005);
  sieve("minecraft:spruce_leaves", "createsifter:brass_mesh", "minecraft:spruce_sapling", 0.20, "minecraft:apple", 0.20, "minecraft:golden_apple", 0.01);
  sieve("minecraft:spruce_leaves", "createsifter:custom_mesh", "minecraft:spruce_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:spruce_leaves", "createsifter:advanced_brass_mesh", "minecraft:spruce_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);  

  sieve("minecraft:birch_leaves", "createsifter:string_mesh", "minecraft:birch_sapling", 0.05, "minecraft:apple", 0.05, "minecraft:golden_apple", 0.001);
  sieve("minecraft:birch_leaves", "createsifter:andesite_mesh", "minecraft:birch_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:birch_leaves", "createsifter:zinc_mesh", "minecraft:birch_sapling", 0.15, "minecraft:apple", 0.15, "minecraft:golden_apple", 0.005);
  sieve("minecraft:birch_leaves", "createsifter:brass_mesh", "minecraft:birch_sapling", 0.20, "minecraft:apple", 0.20, "minecraft:golden_apple", 0.01);
  sieve("minecraft:birch_leaves", "createsifter:custom_mesh", "minecraft:birch_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:birch_leaves", "createsifter:advanced_brass_mesh", "minecraft:birch_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003); 

  sieve("minecraft:jungle_leaves", "createsifter:string_mesh", "minecraft:jungle_sapling", 0.05, "minecraft:apple", 0.05, "minecraft:golden_apple", 0.001);
  sieve("minecraft:jungle_leaves", "createsifter:andesite_mesh", "minecraft:jungle_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:jungle_leaves", "createsifter:zinc_mesh", "minecraft:jungle_sapling", 0.15, "minecraft:apple", 0.15, "minecraft:golden_apple", 0.005);
  sieve("minecraft:jungle_leaves", "createsifter:brass_mesh", "minecraft:jungle_sapling", 0.20, "minecraft:apple", 0.20, "minecraft:golden_apple", 0.01);
  sieve("minecraft:jungle_leaves", "createsifter:custom_mesh", "minecraft:jungle_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:jungle_leaves", "createsifter:advanced_brass_mesh", "minecraft:jungle_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003); 

  sieve("minecraft:acacia_leaves", "createsifter:string_mesh", "minecraft:acacia_sapling", 0.05, "minecraft:apple", 0.05, "minecraft:golden_apple", 0.001);
  sieve("minecraft:acacia_leaves", "createsifter:andesite_mesh", "minecraft:acacia_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:acacia_leaves", "createsifter:zinc_mesh", "minecraft:acacia_sapling", 0.15, "minecraft:apple", 0.15, "minecraft:golden_apple", 0.005);
  sieve("minecraft:acacia_leaves", "createsifter:brass_mesh", "minecraft:acacia_sapling", 0.20, "minecraft:apple", 0.20, "minecraft:golden_apple", 0.01);
  sieve("minecraft:acacia_leaves", "createsifter:custom_mesh", "minecraft:acacia_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003);
  sieve("minecraft:acacia_leaves", "createsifter:advanced_brass_mesh", "minecraft:acacia_sapling", 0.10, "minecraft:apple", 0.10, "minecraft:golden_apple", 0.003); 
})
