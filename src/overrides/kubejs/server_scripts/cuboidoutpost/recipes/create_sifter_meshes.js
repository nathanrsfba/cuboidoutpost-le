
ServerEvents.recipes(event => {
event.remove({ output: 'createsifter:andesite_mesh' })
event.remove({ output: 'createsifter:zinc_mesh' })
event.remove({ output: 'createsifter:brass_mesh' })
event.remove({ output: 'createsifter:advanced_brass_mesh' })
event.remove({ output: 'createsifter:custom_mesh' })
event.remove({ output: 'createsifter:custom_advanced_mesh' })
event.remove({ output: 'exnihilosequentia:netherite_mesh' })

event.shaped(
  Item.of('createsifter:andesite_mesh'), 
  [
    'A A',
    'ABA', 
    'A A'
  ],
  {
    A: 'minecraft:flint',
    B: 'createsifter:string_mesh',  
  }
)

event.shaped(
  Item.of('createsifter:zinc_mesh'), 
  [
    'A A',
    'ABA',
    'A A'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'createsifter:andesite_mesh'
  }
)

event.shaped(
  Item.of('createsifter:brass_mesh'), 
  [
    'A A',
    'ABA',
    'A A'
  ],
  {
    A: 'minecraft:diamond',
    B: 'createsifter:zinc_mesh'
  }
)

event.shaped(
  Item.of('createsifter:custom_mesh'), 
  [
    'A A',
    'ABA',
    'A A'
  ],
  {
    A: 'minecraft:emerald',
    B: 'createsifter:brass_mesh'
  }
)

event.smithing(
  'createsifter:advanced_brass_mesh',              // arg 1: output
  'cuboidmod:thatldu_upgrade_smithing_template', // arg 2: the smithing template
  'createsifter:custom_mesh',                          // arg 3: the item to be upgraded
  'minecraft:netherite_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'exnihilosequentia:netherite_mesh',              // arg 1: output
  'cuboidmod:thatldu_upgrade_smithing_template', // arg 2: the smithing template
  'exnihilosequentia:emerald_mesh',                          // arg 3: the item to be upgraded
  'minecraft:netherite_ingot'                            // arg 4: the upgrade item
)

})
