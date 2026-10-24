// priority: 0

ServerEvents.recipes(e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "ae2:printed_calculation_processor"
      },
      "ingredients": {
        "top": {
          "item": "ae2:calculation_processor_press"
        },
        "middle": {
          "item": "ae2:certus_quartz_crystal"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })