<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ error }) => {
		return {
			props: { message: error ? error.message : 'no msg' }
		};
	};
</script>

<script lang="ts">
	export let message: string;
</script>

<div class="error">
	<h2>Ooops</h2>
	<p>{message}</p>
	<a href="/guides">View all Guides...</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
