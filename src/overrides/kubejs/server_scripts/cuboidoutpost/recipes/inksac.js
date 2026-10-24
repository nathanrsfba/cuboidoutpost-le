// priority: 0

ServerEvents.recipes(e => {

// For Thaliono. Replacement recipe for ink sacs. Replaced uncompressed_coal with coal as excompressium does not exist for this version of MC. see inksac.old

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    e.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {
            "item": "cuboidmod:carbon_deposit"
        },
        {
            "item": "gunpowder"
        },
        {
            "item": "coal"
        }
    ],
    "block_in": {
        "blocks": ["exnihilosequentia:sea_water"],
        "state": {
            "level": 0
        }
    },
    "post": [
        {
            "type": "drop_item",
            "item": "ink_sac",
            "count": 3
        },
        {
            "type": "place",
            "block": "*",
            "contextual": {
                "type": "chance",
                "chance": 0.1
            }
        }
    ]
})
})