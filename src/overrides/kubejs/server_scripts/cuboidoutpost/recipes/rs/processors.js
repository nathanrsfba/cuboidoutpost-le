// priority: 0

ServerEvents.recipes(e => {

  // recipes to gate RS behind AE2 quest line
  e.remove({ output: 'refinedstorage:raw_basic_processor' });
  e.remove({ output: 'refinedstorage:raw_improved_processor' });
  e.remove({ output: 'refinedstorage:raw_advanced_processor' });

  e.shapeless('refinedstorage:raw_basic_processor', [
    'refinedstorage:processor_binding',
    'ae2:printed_calculation_processor',
    'ae2:printed_silicon',
    'minecraft:redstone'
  ])

  e.shapeless('refinedstorage:raw_improved_processor', [
    'refinedstorage:processor_binding',
    'ae2:printed_logic_processor',
    'ae2:printed_silicon',
    'minecraft:redstone'
  ])

  e.shapeless('refinedstorage:raw_advanced_processor', [
    'refinedstorage:processor_binding',
    'ae2:printed_engineering_processor',
    'ae2:printed_silicon',
    'minecraft:redstone'
  ])

})
