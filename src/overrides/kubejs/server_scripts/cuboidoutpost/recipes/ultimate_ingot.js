// priority: 0

ServerEvents.recipes(e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDEFGHI",
          "J-------K",
          "L-------M",
          "NOPQRSTUV"
        ],
        "key": {
          "-": { "item": "extendedcrafting:crystaltine_ingot" },
          "A": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:notsogudium"}').strongNBT(),
          "B": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:kudbebedda"}').strongNBT(),
          "C": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:notarfbadium"}').strongNBT(),
          "D": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:wikidium"}').strongNBT(),
          "E": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:thatldu"}').strongNBT(),
          "F": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:zinc"}').strongNBT(),
          "G": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:tin"}').strongNBT(),
          "H": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:copper"}').strongNBT(),
          "I": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:nickel"}').strongNBT(),
          "J": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:silver"}').strongNBT(),
          "K": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:aluminium"}').strongNBT(),
          "L": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:iron"}').strongNBT(),
          "M": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:gold"}').strongNBT(),
          "N": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:lead"}').strongNBT(),
          "O": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:uranium"}').strongNBT(),
          "P": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:osmium"}').strongNBT(),
          "Q": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:lapis"}').strongNBT(),
          "R": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:steel"}').strongNBT(),
          "S": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:bronze"}').strongNBT(),
          "T": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:electrum"}').strongNBT(),
          "U": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:invar"}').strongNBT(),
          "V": Item.of('cuboidmod:quantum_singularity', '{quantumId:"cuboidmod:platinum"}').strongNBT(),
        },
        "result": {
          "item": "extendedcrafting:the_ultimate_ingot"
        }
      })
})