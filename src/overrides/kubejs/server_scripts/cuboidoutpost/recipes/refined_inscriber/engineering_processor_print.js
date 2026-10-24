// priority: 0

ServerEvents.recipes(e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "ae2:printed_engineering_processor"
      },
      "ingredients": {
        "top": {
          "item": "ae2:engineering_processor_press"
        },
        "middle": {
          "tag": "forge:gems/diamond"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })