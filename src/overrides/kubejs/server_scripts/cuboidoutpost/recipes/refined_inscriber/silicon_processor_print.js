// priority: 0

ServerEvents.recipes(e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "ae2:printed_silicon"
      },
      "ingredients": {
        "top": {
          "item": "ae2:silicon_press"
        },
        "middle": {
          "tag": "forge:silicon"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })