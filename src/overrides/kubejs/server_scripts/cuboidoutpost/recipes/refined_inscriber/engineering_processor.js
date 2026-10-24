// priority: 0

ServerEvents.recipes(e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "press",
      "result": {
        "item": "ae2:engineering_processor"
      },
      "ingredients": {
        "top": {
          "item": "ae2:printed_engineering_processor"
        },
        "middle": {
          "tag": "forge:dusts/redstone"
        },
        "bottom": {
          "item": "ae2:printed_silicon"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })