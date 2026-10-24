// priority: 0
ServerEvents.recipes(e => {

  let colors  = ["white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow", "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"];

  for (const element of colors) {
    e.recipes.create.filling('minecraft:' + element + '_concrete', [Fluid.water(), 'minecraft:' + element + '_concrete_powder'])
  }

  e.recipes.createFilling('minecraft:soul_sand', [
    'minecraft:sand',
    Fluid.of('exnihilosequentia:witch_water', 1000)
  ])
  
  e.recipes.createFilling('ae2:certus_quartz_crystal', [
    '#forge:dusts/certus_quartz',
    Fluid.of('minecraft:water', 1000)
  ])

  e.recipes.createFilling('minecraft:crying_obsidian', [
    'minecraft:obsidian',
    Fluid.of('exnihilosequentia:witch_water', 1000)
  ]).id('minecraft:ens_crying_obsidian')

})



