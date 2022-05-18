<script>
	import Navbar from '$lib/navbar.svelte';
	import Title from '$lib/title.svelte';
	// import '../../styles/global.css';
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>
<header>
	<nav>
		<Title title="SvelteKit Crash Course - James Q Quick" />
		<Navbar />
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2022 Benjyskan</p>
</footer>

<style>
	header {
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
	nav {
		display: flex;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
