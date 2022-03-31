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
	
	// artifacts:eternal_steak	
	event.custom({
    "type": "conjuring:soulfire_forge",
	"pattern": [
	  "o g",
	  "sbl",
	  "c p"
	],
	"key": {
	  "o": {
        "item": "croptopia:onion"
      },
	  "g": {
        "item": "croptopia:garlic"
      },
      "s": {
        "tag": "c:salts"
      },	
      "b": {
        "item": "artifacts:everlasting_beef"
      },
	  "l": {
        "item": "croptopia:olive_oil"
      },
	  "c": {
        "item": "croptopia:chile_pepper"
      },
	  "p": {
        "item": "croptopia:bell_pepper"
	  }
    },
	"smeltTime": 12000,
	"output": {
      "item": 'artifacts:eternal_steak',
      "count": 1
    },
    });

});