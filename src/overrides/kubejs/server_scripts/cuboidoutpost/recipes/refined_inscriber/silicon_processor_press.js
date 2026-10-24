// priority: 0

ServerEvents.recipes(e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "ae2:silicon_press"
      },
      "ingredients": {
        "top": {
          "item": "ae2:silicon_press"
        },
        "middle": {
          "tag": "forge:storage_blocks/iron"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })