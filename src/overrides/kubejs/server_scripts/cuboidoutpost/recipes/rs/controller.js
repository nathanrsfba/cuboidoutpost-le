// priority: 0

ServerEvents.recipes(e => {

  // recipes to gate RS behind AE2 quest line

  e.remove({id: 'refinedstorage:controller'})

  e.shaped('refinedstorage:controller', [
    'IPI',
    'SCS',
    'ISI'
  ], {
    I: 'refinedstorage:quartz_enriched_iron',
    P: 'refinedstorage:advanced_processor',
    S: 'ae2:printed_silicon',
    C: 'ae2:controller'
  })

})
