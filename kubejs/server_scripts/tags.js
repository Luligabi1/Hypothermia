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
	
	// Tier 2 Circuits
	event.add('hypothermia:t2_circuits', 'indrev:circuit_mk2')
	event.add('hypothermia:t2_circuits', 'techreborn:advanced_circuit')
	
	// Tier 3 Circuits
	event.add('hypothermia:t3_circuits', 'indrev:circuit_mk3')
	event.add('hypothermia:t3_circuits', 'techreborn:industrial_circuit')
	
	// Tier 4 Circuits (Energy)
	event.add('hypothermia:t4_circuits_energy', 'indrev:circuit_mk4')
	event.add('hypothermia:t4_circuits_energy', 'techreborn:energy_flow_chip')
	
	// Tier 4 Circuits (Data)
	event.add('hypothermia:t4_circuits_data', 'indrev:circuit_mk4')
	event.add('hypothermia:t4_circuits_data', 'techreborn:data_storage_chip')
	
});
