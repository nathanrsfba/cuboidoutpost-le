// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // immersiveengineering:creative_capacitor
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "P-------P",
        "B@cCLCc@B",
        "BcCRPRCcB",
        "BCRPGPRCB",
        "BLPG*GPLB",
        "BCRPGPRCB",
        "BcCRPRCcB",
        "B@cCLCc@B",
        "P-------P"
      ],
      "key": {
        "P": { "item": "immersiveengineering:capacitor_hv" },
        "c": { "item": "immersiveengineering:coil_mv" },
        "C": { "item": "immersiveengineering:coil_hv" },
        "L": { "item": "immersiveengineering:logic_unit" },
        "G": { "item": "immersiveengineering:generator" },
        "R": { "item": "immersiveengineering:radiator" },
        "B": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" },
        "@": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:steel"}').strongNBT()
      },
      "result": {
        "item": "immersiveengineering:capacitor_creative"
      }
    })

})