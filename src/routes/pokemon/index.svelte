<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
		const res = await fetch(url);
		const data: PokemonApiRes = await res.json();
		const pokemon = data.results.map<Pokemon>((data, index) => ({
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		}));
		return {
			props: {
				pokemon
			}
		};
	};
</script>

<script lang="ts">
	import PokemanCard from '$lib/pokemanCard.svelte';
	import type { Pokemon, PokemonApiRes } from 'src/types/types';
	export let pokemon: Pokemon[];

	let searchTerm = '';
	let filteredPokemon = [...pokemon];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemon = pokemon.filter((pokeman) =>
				pokeman.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
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
