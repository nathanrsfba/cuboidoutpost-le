# About this fork

This fork was created mainly to address the lack of multiplayer support in Cuboid Outpost for 1.20.1. This is mainly built on the work of several other people.

This uses version 0.3.3 of the Cuboid Support Mod by Leialoha. This version fixes the bugs causing multiplayer to fail, but unfortunately also revamped the singularity code, which introduced additional bugs.

Firstly, many of the built-in singularities have broken recipes; they were uncraftable. I've worked around this by editing the configuration files to manually specify recipes that work.

Secondly, singularities that were previously added using KubeJS would crash the game. I've fixed this by merging in fixes by Yoshi72 (collected up in the fork by BigFatWizard) which remove the KubeJS-based singularities and recreated them using the new singularity configuration mechanism built into cuboidmod.

Also, the new singularities have different item IDs, and therefore broke some old recipes and quests; the Yoshi72 fixes have addressed as well.

The end result should be a version of the pack that will well and truly, finally, run properly in multiplayer.

# Installing

Currently this version is in beta, and not released on CurseForge yet. If you just want to play singleplayer, just use the official release, as it works fine for that.

To install the client:

1. Download the release from the [releases](https://github.com/nathanrsfba/cuboidoutpost-le/releases) page
2. Hit the "Import" button in the CurseForge launcher
3. Select "Choose .zip file"
4. Navigate to the file you downloaded
5. Check the box and select "All Files"

To install the server:

1. Install Java 21
2. Download [Forge installer](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html) for Minecraft 1.20.1, version 47.2.20 or later
3. Install the server somewhere. You can do it from the command line with a command similar to:

   java -jar forge-1.20.1-47.2.20-installer.jar --installServer .

   This will install it to the current directory. Adjust the filename to match the file you downloaded.
4. From a client install, copy the `config`, `kubejs`, and `mods` folder to the server folder
5. Start the server with run.bat or run.sh depending on whether you're on Windows or a Unix-like system.
6. Edit eula.txt as directed and start the server again.
7. Run the server or upload it to your hosting platform.

# Cuboid Outpost (Luxury Edition) ModPack

[Cuboid Outpost](https://www.curseforge.com/minecraft/modpacks/cuboid-outpost) was my first attempt at creating a ModPack for Minecraft. It's been amazingly well received - way beyond my hopes and expectations. This version of the pack is for players / communities with higher-spec machines to play on. 

The original pack was made with a view to making it accessible to as many people as possible, and therefore was aimed at being fairly light, and I've resisted adding more mods so as to still let people with Potato PC's play. I want to stick to that as much as possible for the original pack, but due to the number of people asking (repeatedly) for a few extra building blocks to choose from and some quality of life mods too, I've decided to release the same pack with some nice-to-have mods included. That's this pack!

The quest and storyline remains unchanged compared to Cuboid Outpost, as does the progression - but there are now a few more things available to build with, a few more gadgets available to make, and some quality of life additions. If you haven't got a Potato PC, and enjoy having a bigger palette of blocks to build from, then you might want to try this version of the pack. If you try this version and your PC is struggling, I suggest you try playing the original Cuboid Outpost instead, which has approximately 30 fewer mods in it overall.

---

The basic premise is this... you're stranded on a barren planet, civilization as you knew it has come to an abrupt end, and need to recreate life as you knew it. There are a few twists and turns along the way of course!

Watch the official trailer for Cuboid Outpost on YouTube by clicking on this image:

[![Cuboid Outpost Trailer](https://img.youtube.com/vi/97BzxR_aAHc/0.jpg)](https://www.youtube.com/watch?v=97BzxR_aAHc "Cuboid Outpost Trailer")

I designed this to be more of an intermediate tech pack for those just getting into Modded Minecraft, or who are looking for something not too hard / expert. As a result, while there are quite a few mods in the pack, I've intentionally kept the number of alternatives for things low (e.g. for digital storage there's only AE2 initially, but channels are disabled to make it easier to work with - RS is available later on).

Some great content mods have been added too to keep things interesting and a bit different. And then there are a few unique mods that you won't have seen in any other pack before too - so hopefully there's something for everyone.

I've spent a lot of time working on Quests (possibly the hardest thing to get right in creating a ModPack!), as well as on the storyline, so hopefully it will be enjoyable for you.

I would really appreciate any issues you encounter while playing being reported in the Issues for the Cuboid Outpost (Luxury Edition) ModPack in GitHub - I do only work on this in my (very limited) spare time, so I can't promise I'll resolve things immediately, but I do plan on trying to get around to fixing issues when I can. I would also appreciate a little bit of patience, and a civil tone when reporting issues - this is just something I'm doing for fun, for free, and in my own time, so if you could avoid sucking the life out of this experience for me by being rude or overly critical, I'd really appreciate that too!

If you'd like to chat about Cuboid Outpost or Cuboid Outpost LE with other players, you can join my [Discord server](https://discord.gg/j9zWKFuBtU). Please keep it clean, and make sure you read the rules before posting anything on there! Thanks.

If you want to support me financially (totally not required!), I have set up a [Patreon page](https://www.patreon.com/cuboiddroid). I'll try and post updates on progress regularly on there for my supporters to stay up to date with my efforts. Alternatively, you can donate via [PayPal](https://www.paypal.com/donate?hosted_button_id=3NREHL7EUD5JG)

And if you enjoy playing Cuboid Outpost and/or Cuboid Outpost (Luxury Edition), then tell you friends, family and favourite steamers to give it a go too!

Thanks for reading this, and hopefully you enjoy playing Cuboid Outpost even more than I have enjoyed making it!

Additional mods in this Luxury Edition, over and above what is included in Cuboid Outpost, are essentially:

**Blocks and Decoration**
- Bamboo Blocks
- Chipped
- Chisel
- Decorative Blocks
- Framed Blocks
- Masonry
- Macaw's Lights
- Macaw's Paintings
- Supplementaries

**Building Tools**
- Building Gadgets
- Corail Woodcutter
- Portable Stonecutter
- RFTools Builder

**Quality of Life**
- Dank Storage
- Double Doors
- Simple Magnets
- TOP Addons

**Advanced Technology**
- AE2 Extras
- AE2 Wireless Terminals
- Extra Storage
- Refined Storage Add-ons
- RS Infinity Booster
