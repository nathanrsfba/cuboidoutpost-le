// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // appliedenegistics2:creative_energy_cell (ie)
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "DDD",
          "D#D",
          "DDD"
        ],
        "key": {
          "D": { "item": "ae2:dense_energy_cell" },
          "#": { "item": "immersiveengineering:capacitor_creative" }
        },
        "result": {
          "item": "ae2:creative_energy_cell"
        }
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // appliedenegistics2:creative_energy_cell (mekanism)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "DDD",
        "D#D",
        "DDD"
      ],
      "key": {
        "D": { "item": "ae2:dense_energy_cell" },
        "#": { "item": "mekanism:creative_energy_cube" }
      },
      "result": {
        "item": "ae2:creative_energy_cell"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // appliedenegistics2:creative_energy_cell (powah)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "DDD",
        "D#D",
        "DDD"
      ],
      "key": {
        "D": { "item": "ae2:dense_energy_cell" },
        "#": { "item": "powah:energy_cell_creative" }
      },
      "result": {
        "item": "ae2:creative_energy_cell"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // appliedenegistics2:creative_energy_cell (thermal)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "DDD",
        "D#D",
        "DDD"
      ],
      "key": {
        "D": { "item": "ae2:dense_energy_cell" },
        "#": { "item": "thermal:rf_coil_creative_augment" }
      },
      "result": {
        "item": "ae2:creative_energy_cell"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // appliedenegistics2:creative_storage_cell
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "#-------#",
        "-*s66Ms*-",
        "-s6sMs6s-",
        "-Ms6S6s6-",
        "-6MS#SM6-",
        "-6s6S6sM-",
        "-s6sMs6s-",
        "-*sM66s*-",
        "#-------#"
      ],
      "key": {
        "S": { "item": "storagedrawers:creative_storage_upgrade" },
        "M": { "item": "ae2:molecular_assembler" },
        "6": { "item": "ae2:64k_crafting_storage" },
        "s": { "item": "ae2:spatial_storage_cell_2" },
        "#": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
    },
      "result": {
        "item": "ae2:creative_item_cell"
      }
    })

})