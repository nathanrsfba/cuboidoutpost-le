// priority: 0

ServerEvents.recipes(e => {

  e.remove({output: 'exnihilosequentia:platinum_ingot'})

  // recipes to "fix" platinum so it works with kubejs block and nuggets too

  e.shaped('kubejs:platinum_block', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: '#forge:ingots/platinum'
  })

  e.shapeless('9x exnihilosequentia:platinum_ingot', ['kubejs:platinum_block'])

  e.shaped('exnihilosequentia:platinum_ingot', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: '#forge:nuggets/platinum'
  })

  e.shapeless('9x kubejs:platinum_nugget', ['exnihilosequentia:platinum_ingot'])

})
