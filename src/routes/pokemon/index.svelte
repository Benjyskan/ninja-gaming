<script lang="ts">
	import PokemanCard from '$lib/pokemanCard.svelte';
	import { pokemon } from '../../stores/pokestore';
	// import { pokemon } from '$app/stores/pokestore';
	$: {
		console.log('$pokemon', $pokemon);
	}

	let searchTerm = '';
	let filteredPokemon = $pokemon;

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<h1>Pokemon!</h1>
<input bind:value={searchTerm} type="text" placeholder="Search Pokemon" />
<div class="grid">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 0.3rem;
	}
</style>
