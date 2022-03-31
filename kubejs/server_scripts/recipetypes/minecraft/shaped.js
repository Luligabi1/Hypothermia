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


settings.logAddedRecipes = false
settings.logRemovedRecipes = true
settings.logErroringRecipes = true
settings.logSkippedRecipes = false

onEvent('recipes', (event) => {
	
	/*
		CHAPTER ALPHA - SURVIVAL BASICS
	*/
	
	// blockus:wooden_frame
	event.remove({ output: "blockus:wooden_frame" });
	event.shaped("8x blockus:wooden_frame", [
		["#c:wooden_rods", "#c:wooden_rods", "#c:wooden_rods"],
		["#c:wooden_rods", "#c:wooden_rods", "#c:wooden_rods"],
		["#c:wooden_rods", "#c:wooden_rods", "#c:wooden_rods"]
	]);
	
	// seasons:greenhouse_glass
	event.remove({ output: "seasons:greenhouse_glass" });
	event.shaped("4x seasons:greenhouse_glass"  , [
		["minecraft:stick", "minecraft:glass", "minecraft:stick"],
		["minecraft:glass", "minecraft:stick", "minecraft:glass"],
		["minecraft:stick", "minecraft:glass", "minecraft:stick"]
	]);
	
	// kibe:heater
	event.remove({ output: "kibe:heater" });
	event.shaped("kibe:heater", [
		["minecraft:stone", "minecraft:stone", "minecraft:stone"],
		["minecraft:redstone_torch", "minecraft:redstone_lamp", "minecraft:redstone_torch"],
		["minecraft:stone", "minecraft:redstone_torch", "minecraft:stone"]
	]);
	
	// kibe:dehumidifier
	event.remove({ output: "kibe:dehumidifier" });
	event.shaped("kibe:dehumidifier", [
		["minecraft:stone", "minecraft:stone", "minecraft:stone"],
		["minecraft:lapis_lazuli", "minecraft:furnace", "minecraft:lapis_lazuli"],
		["minecraft:stone", "minecraft:sand", "minecraft:stone"]
	]);
	
	// alternative inmis:frayed_backpack crafting
	event.shaped("inmis:frayed_backpack", [
		[null, "minecraft:leather", null],
		["minecraft:leather", "inmis:baby_backpack", "minecraft:leather"],
		[null, "minecraft:leather", null]
	]);
	
	
	// kibe:pocket_trashcan
	event.remove({ output: "kibe:pocket_trash_can" });
	event.shapeless('kibe:pocket_trash_can', ['#c:wooden_rods', 'kibe:trash_can']);
	
	// Remove kibe:pocket_crafting_table (use On a Stick's instead)
	event.remove({ output: "kibe:pocket_crafting_table" });
	
	/*
		CHAPTER DELTA - APPLIED ENERGISTICS 2
	*/
	
	// ae2:inscriber
	event.remove({ output: "ae2:inscriber" });
	event.shaped("ae2:inscriber", [
		["minecraft:iron_ingot", "minecraft:sticky_piston", "minecraft:iron_ingot"],
		["ae2:fluix_crystal", null, "minecraft:iron_ingot"],
		["minecraft:iron_ingot", "minecraft:sticky_piston", "minecraft:iron_ingot"]
	]);
	
	event.shaped("ae2:inscriber", [
		["minecraft:iron_ingot", "minecraft:sticky_piston", "minecraft:iron_ingot"],
		["minecraft:iron_ingot", null, "ae2:fluix_crystal"],
		["minecraft:iron_ingot", "minecraft:sticky_piston", "minecraft:iron_ingot"]
	]);
	
	// ae2things:advanced_inscriber
	event.remove({ output: "ae2things:advanced_inscriber" });
	event.shaped("ae2things:advanced_inscriber", [
		["minecraft:iron_ingot", "minecraft:hopper", "minecraft:iron_ingot"],
		["ae2:engineering_processor", "ae2:inscriber", "ae2:engineering_processor"],
		["minecraft:iron_ingot", "#hypothermia:t3_circuits", "minecraft:iron_ingot"]
	]);

	// ae2things:disk_housing
	event.remove({ output: "ae2things:disk_housing" });
	event.shaped("ae2things:disk_housing", [
		["ae2:quartz_glass", "techreborn:basalt_dust", "ae2:quartz_glass"],
		["techreborn:basalt_dust", null, "techreborn:basalt_dust"],
		["minecraft:obsidian", "#hypothermia:t4_circuits_data", "minecraft:obsidian"]
	]);
	
	// ae2things:disk_drive_1k
	event.remove({id: 'ae2things:cells/disk_drive_1k'})
	event.shaped("ae2things:disk_drive_1k", [
		["ae2:quartz_glass", "techreborn:basalt_dust", "ae2:quartz_glass"],
		["techreborn:basalt_dust", "ae2:cell_component_1k", "techreborn:basalt_dust"],
		["minecraft:obsidian", "#hypothermia:t4_circuits_data", "minecraft:obsidian"]
	]);
	
	// ae2things:disk_drive_4k
	event.remove({id: 'ae2things:cells/disk_drive_4k'})
	event.shaped("ae2things:disk_drive_4k", [
		["ae2:quartz_glass", "techreborn:basalt_dust", "ae2:quartz_glass"],
		["techreborn:basalt_dust", "ae2:cell_component_4k", "techreborn:basalt_dust"],
		["minecraft:obsidian", "#hypothermia:t4_circuits_data", "minecraft:obsidian"]
	]);
	
	// ae2things:disk_drive_16k
	event.remove({id: 'ae2things:cells/disk_drive_16k'})
	event.shaped("ae2things:disk_drive_16k", [
		["ae2:quartz_glass", "techreborn:basalt_dust", "ae2:quartz_glass"],
		["techreborn:basalt_dust", "ae2:cell_component_16k", "techreborn:basalt_dust"],
		["minecraft:obsidian", "#hypothermia:t4_circuits_data", "minecraft:obsidian"]
	]);
	
	// ae2things:disk_drive_64k
	event.remove({id: 'ae2things:cells/disk_drive_64k'})
	event.shaped("ae2things:disk_drive_64k", [
		["ae2:quartz_glass", "techreborn:basalt_dust", "ae2:quartz_glass"],
		["techreborn:basalt_dust", "ae2:cell_component_64k", "techreborn:basalt_dust"],
		["minecraft:obsidian", "#hypothermia:t4_circuits_data", "minecraft:obsidian"]
	]);
	
	
	
	// ae2:wireless_receiver
	event.remove({ output: "ae2:wireless_receiver" });
	event.shaped("ae2:wireless_receiver", [
		[null, "ae2:fluix_pearl", null],
		["#c:iron_ingots", "wirelessnetworks:entangled_capacitor", "#c:iron_ingots"],
		[null, "#c:iron_ingots", null]
	]);
	
	
	/*
		CHAPTER DELTA - DEEP MOB LEARNING
	*/
	
	// dml-refabricated:deep_learner
	event.remove({ output: "dml-refabricated:deep_learner" });
	event.shaped("dml-refabricated:deep_learner", [
		["dml-refabricated:soot_plate", "minecraft:repeater", "dml-refabricated:soot_plate"],
		["minecraft:repeater", "dml-refabricated:data_model", "minecraft:repeater"],
		["dml-refabricated:soot_plate", "dml-refabricated:soot_redstone", "dml-refabricated:soot_plate"]
	]);
	
	// dmlsimulacrum:polymer_clay
	event.remove({ output: "dmlsimulacrum:polymer_clay" });
	
	// dml-refabricated:matter_condenser
	event.remove({ output: "dml-refabricated:matter_condenser" });
	event.shaped("dml-refabricated:matter_condenser", [
		["dmlsimulacrum:polymer_clay", "#dml-refabricated:pristine_matter", "dmlsimulacrum:polymer_clay"],
		["dml-refabricated:physically_condensed_matrix_fragment", "dml-refabricated:machine_casing", "dml-refabricated:physically_condensed_matrix_fragment"],
		["dmlsimulacrum:polymer_clay", "dml-refabricated:soot_redstone", "dmlsimulacrum:polymer_clay"]
	]);
	
	
	// dmlsimulacrum:simulation_chamber
	event.remove({ output: "dmlsimulacrum:simulation_chamber" });
	event.shaped("dmlsimulacrum:simulation_chamber", [
		["dml-refabricated:soot_plate", "#hypothermia:t2_circuits", "dml-refabricated:soot_plate"],
		["dmlsimulacrum:polymer_clay", "dml-refabricated:machine_casing", "dmlsimulacrum:polymer_clay"],
		["dml-refabricated:soot_plate", "#hypothermia:t2_circuits", "dml-refabricated:soot_plate"]
	]);
	
	
	
	/*
		CHAPTER PI - MISC
	*/
		
	// wirelessnetworks:entangled_capacitor
	event.remove({ output: "wirelessnetworks:entangled_capacitor" });
	event.shaped("wirelessnetworks:entangled_capacitor", [
		["#c:lead_ingots", "minecraft:ender_eye", "#c:lead_ingots"],
		["minecraft:redstone", "#hypothermia:t4_circuits_energy", "minecraft:redstone"],
		["#c:lead_ingots", "minecraft:ender_eye", "#c:lead_ingots"]
	]);
	
	event.shaped("wirelessnetworks:entangled_capacitor", [
		["#c:platinum_ingots", "minecraft:ender_eye", "#c:platinum_ingots"],
		["minecraft:redstone", "#hypothermia:t4_circuits_energy", "minecraft:redstone"],
		["#c:platinum_ingots", "minecraft:ender_eye", "#c:platinum_ingots"]
	]);
	
	// wirelessnetworks:node_block
	event.remove({ output: "wirelessnetworks:node_block" });
	event.shaped("wirelessnetworks:node_block", [
		["#c:lead_ingots", "#c:lead_ingots", "#c:lead_ingots"],
		["#c:redstone_blocks", "wirelessnetworks:entangled_capacitor", "#c:redstone_blocks"],
		["#c:lead_ingots", "#c:lead_ingots", "#c:lead_ingots"]
	]);
	
	event.shaped("wirelessnetworks:node_block", [
		["#c:platinum_ingots", "#c:platinum_ingots", "#c:platinum_ingots"],
		["#c:redstone_blocks", "wirelessnetworks:entangled_capacitor", "#c:redstone_blocks"],
		["#c:platinum_ingots", "#c:platinum_ingots", "#c:platinum_ingots"]
	]);
	
	
	
	/*
		MISC
	*/
	
	
		
});
