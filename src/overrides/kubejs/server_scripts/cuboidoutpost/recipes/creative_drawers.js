// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // storagedrawers:creative_storage_upgrade
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " --      ",
        " EE--  E-",
        "  -EE--E-",
        "  -E EE- ",
        " -E @ E- ",
        " -EE E-  ",
        "-E--EE-  ",
        "-E  --EE ",
        "      -- "
      ],
      "key": {
        "E": { "item": "storagedrawers:emerald_storage_upgrade" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "@": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:emerald"}').strongNBT()
      },
      "result": {
        "item": "storagedrawers:creative_storage_upgrade"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // storagedrawers:creative_vending_upgrade
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "---------",
        "-       -",
        "-   E   -",
        "-  E*E  -",
        "- E@ @E -",
        "-  E*E  -",
        "-   E   -",
        "-       -",
        "---------"
      ],
      "key": {
        "E": { "item": "storagedrawers:creative_storage_upgrade" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" },
        "@": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:emerald"}').strongNBT()
      },
      "result": {
        "item": "storagedrawers:creative_vending_upgrade"
      }
    })

})