JEIEvents.hideItems(event => {
  event.hide('createsifter:advanced_custom_mesh');
  event.hide('minecraft:netherite_upgrade_smithing_template');
  event.hide('cuboidmod:energized_stone_bricks');
  event.hide('exnihilosequentia:end_cake');
});

JEIEvents.addItems(event => {
  event.add('kubejs:rna');
  event.add(Ingredient.of('@create').getItemIds().toArray());
  event.add(Ingredient.of('@mekanism').getItemIds().toArray());
  event.add(Ingredient.of('@xnet').getItemIds().toArray());
});

