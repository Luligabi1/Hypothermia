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


onEvent('tags.items', (event) => {
	
	// Tier 1 Circuits
	event.add('hypothermia:t1_circuits', 'indrev:circuit_mk1')
	event.add('hypothermia:t1_circuits', 'techreborn:electronic_circuit')
	event.add('hypothermia:t1_circuits', 'modern_industrialization:analog_circuit')
	
	// Tier 2 Circuits
	event.add('hypothermia:t2_circuits', 'indrev:circuit_mk2')
	event.add('hypothermia:t2_circuits', 'techreborn:advanced_circuit')
	event.add('hypothermia:t2_circuits', 'modern_industrialization:digital_circuit')
	
	// Tier 3 Circuits
	event.add('hypothermia:t3_circuits', 'indrev:circuit_mk3')
	event.add('hypothermia:t3_circuits', 'techreborn:industrial_circuit')
	event.add('hypothermia:t3_circuits', 'modern_industrialization:electronic_circuit')
	
	// Tier 4 Circuits (Energy)
	event.add('hypothermia:t4_circuits_energy', 'indrev:circuit_mk4')
	event.add('hypothermia:t4_circuits_energy', 'techreborn:energy_flow_chip')
	event.add('hypothermia:t4_circuits_energy', 'modern_industrialization:quantum_circuit')
	
	// Tier 4 Circuits (Data)
	event.add('hypothermia:t4_circuits_data', 'indrev:circuit_mk4')
	event.add('hypothermia:t4_circuits_data', 'techreborn:data_storage_chip')
	event.add('hypothermia:t4_circuits_data', 'modern_industrialization:quantum_circuit')
	
	
	// MI's Forge Hammers
	event.remove('modern_industrialization:forge_hammer_tools', 'modern_industrialization:iron_hammer')
	event.remove('modern_industrialization:forge_hammer_tools', 'modern_industrialization:steel_hammer')
	event.remove('modern_industrialization:forge_hammer_tools', 'modern_industrialization:diamond_hammer')
	event.remove('modern_industrialization:forge_hammer_tools', 'modern_industrialization:netherite_hammer')
	
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:wooden_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:stone_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:iron_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:slime_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:lapis_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:quartz_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:fiery_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:golden_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:diamond_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:emerald_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:obsidian_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:netherite_hammer')
	event.add('modern_industrialization:forge_hammer_tools', 'vanilla-hammers:ender_hammer')
	
	// MI's LV cables
	event.add('hypothermia:mi_lv_cable', 'modern_industrialization:copper_cable')
	event.add('hypothermia:mi_lv_cable', 'modern_industrialization:tin_cable')
	event.add('hypothermia:mi_lv_cable', 'modern_industrialization:silver_cable')
	
	// MI's MV cables
	event.add('hypothermia:mi_mv_cable', 'modern_industrialization:electrum_cable')
	event.add('hypothermia:mi_mv_cable', 'modern_industrialization:cupronickel_cable')
	
	// MI's HV cables
	event.add('hypothermia:mi_hv_cable', 'modern_industrialization:aluminum_cable')
	event.add('hypothermia:mi_hv_cable', 'modern_industrialization:kanthal_cable')
	
	// MI's EV cables
	event.add('hypothermia:mi_ev_cable', 'modern_industrialization:platinum_cable')
	event.add('hypothermia:mi_ev_cable', 'modern_industrialization:annealed_copper_cable')
	
	
	// MI's Wiremills
	event.add('hypothermia:mi_wiremill', 'modern_industrialization:steel_wiremill')
	event.add('hypothermia:mi_wiremill', 'modern_industrialization:electric_wiremill')
	
	
	// Basic AIOTs
	event.add('hypothermia:aiots', 'basicaiots:wooden_aiot')
	event.add('hypothermia:aiots', 'basicaiots:stone_aiot')
	event.add('hypothermia:aiots', 'basicaiots:golden_aiot')
	event.add('hypothermia:aiots', 'basicaiots:iron_aiot')
	event.add('hypothermia:aiots', 'basicaiots:diamond_aiot')
	event.add('hypothermia:aiots', 'basicaiots:netherite_aiot')
	
	event.add('hypothermia:aiots', 'basicaiots:tin_aiot')
	event.add('hypothermia:aiots', 'basicaiots:copper_aiot')
	event.add('hypothermia:aiots', 'basicaiots:silver_aiot')
	event.add('hypothermia:aiots', 'basicaiots:steel_aiot')
	event.add('hypothermia:aiots', 'basicaiots:lead_aiot')
	event.add('hypothermia:aiots', 'basicaiots:ruby_aiot')
	event.add('hypothermia:aiots', 'basicaiots:sapphire_aiot')
	event.add('hypothermia:aiots', 'basicaiots:peridot_aiot')
	event.add('hypothermia:aiots', 'basicaiots:bronze_aiot')
	
	// Vanilla Excavators
	event.add('hypothermia:excavators', 'vanillaexcavators:wooden_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:stone_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:iron_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:slime_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:lapis_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:quartz_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:fiery_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:golden_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:diamond_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:emerald_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:obsidian_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:netherite_excavator')
	event.add('hypothermia:excavators', 'vanillaexcavators:ender_excavator')
	
	
	// Artifacts (Head)
	event.add('hypothermia:artifacts_head', 'artifacts:villager_hat')
	event.add('hypothermia:artifacts_head', 'artifacts:superstitious_hat')
	event.add('hypothermia:artifacts_head', 'artifacts:night_vision_goggles')
	event.add('hypothermia:artifacts_head', 'artifacts:snorkel')
	event.add('hypothermia:artifacts_head', 'artifacts:plastic_drinking_hat')
	event.add('hypothermia:artifacts_head', 'artifacts:novelty_drinking_hat')
	
	
	// Artifacts (Necklace)
	event.add('hypothermia:artifacts_necklace', 'artifacts:panic_necklace')
	event.add('hypothermia:artifacts_necklace', 'artifacts:thorn_pendant')
	event.add('hypothermia:artifacts_necklace', 'artifacts:shock_pendant')
	event.add('hypothermia:artifacts_necklace', 'artifacts:flame_pendant')
	event.add('hypothermia:artifacts_necklace', 'artifacts:charm_of_sinking')
	event.add('hypothermia:artifacts_necklace', 'artifacts:cross_necklace')
	event.add('hypothermia:artifacts_necklace', 'artifacts:scarf_of_invisibility')
	event.add('hypothermia:artifacts_necklace', 'artifacts:lucky_scarf')
	
	// Artifacts (Glove)
	event.add('hypothermia:artifacts_glove', 'artifacts:power_glove')
	event.add('hypothermia:artifacts_glove', 'artifacts:fire_gauntlet')
	event.add('hypothermia:artifacts_glove', 'artifacts:vampiric_glove')
	event.add('hypothermia:artifacts_glove', 'artifacts:feral_claws')
	event.add('hypothermia:artifacts_glove', 'artifacts:digging_claws')
	event.add('hypothermia:artifacts_glove', 'artifacts:pocket_piston')
	event.add('hypothermia:artifacts_glove', 'artifacts:golden_hook')
	
	// Artifacts (Belt)
	event.add('hypothermia:artifacts_belt', 'artifacts:crystal_heart')
	event.add('hypothermia:artifacts_belt', 'artifacts:universal_attractor')
	event.add('hypothermia:artifacts_belt', 'artifacts:antidote_vessel')
	event.add('hypothermia:artifacts_belt', 'artifacts:obsidian_skull')
	event.add('hypothermia:artifacts_belt', 'artifacts:cloud_in_a_bottle')
	event.add('hypothermia:artifacts_belt', 'artifacts:helium_flamingo')
	
	// Artifacts (Feet)
	event.add('hypothermia:artifacts_feet', 'artifacts:running_shoes')
	event.add('hypothermia:artifacts_feet', 'artifacts:bunny_hoppers')
	event.add('hypothermia:artifacts_feet', 'artifacts:kitty_slippers')
	event.add('hypothermia:artifacts_feet', 'artifacts:steadfast_spikes')
	event.add('hypothermia:artifacts_feet', 'artifacts:aqua_dashers')
	event.add('hypothermia:artifacts_feet', 'artifacts:flippers')
	
	// Artifacts (Miscellaneous)
	event.add('hypothermia:artifacts_misc', 'artifacts:eternal_steak')
	event.add('hypothermia:artifacts_misc', 'artifacts:umbrella')
	event.add('hypothermia:artifacts_misc', 'artifacts:whoopee_cushion')
	
});

onEvent('tags.entity_types', (event) => {
	
	// DML: Refabricated's Slimy Mobs 
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:ice_slime')
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:jungle_slime')
	
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:lava_slime')
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:crimslime')
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:corrupt_slime')
	
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:illuminant_slime')
	event.add('dml-refabricated:slimy_mobs', 'terrarianslimes:rainbow_slime')
	
});
