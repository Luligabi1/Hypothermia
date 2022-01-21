//
// ██╗░░██╗██╗░░░██╗██████╗░░█████╗░████████╗██╗░░██╗███████╗██████╗░███╗░░░███╗██╗░█████╗░
// ██║░░██║╚██╗░██╔╝██╔══██╗██╔══██╗╚══██╔══╝██║░░██║██╔════╝██╔══██╗████╗░████║██║██╔══██╗
// ███████║░╚████╔╝░██████╔╝██║░░██║░░░██║░░░███████║█████╗░░██████╔╝██╔████╔██║██║███████║
// ██╔══██║░░╚██╔╝░░██╔═══╝░██║░░██║░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██║╚██╔╝██║██║██╔══██║
// ██║░░██║░░░██║░░░██║░░░░░╚█████╔╝░░░██║░░░██║░░██║███████╗██║░░██║██║░╚═╝░██║██║██║░░██║
// ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝╚═╝░░╚═╝
//

// This scipt is part of the Hypothermia modpack, made by Luligabi1 (All Rights Reserved).

// You may use this script to learn and/or help with your own modpack,
// just please don't copy it in its entirety. - Luligabi1


onEvent('recipes', (event) => {
	
// dmlsimulacrum:polymer_clay	
event.recipes.indrev.infuse({

  "ingredients": [
    {
      "item": "minecraft:lapis_lazuli"
    },
    {
      "item": "minecraft:clay_ball"
    }
  ],
  "output": {
    "item": "dmlsimulacrum:polymer_clay",
    "count": 4
  },
  "processTime": 200
 });
});