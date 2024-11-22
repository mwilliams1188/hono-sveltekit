<script lang="ts">
	import { onMount } from 'svelte';

	let message = $state('');

	onMount(() => {
		fetchData();
	});

	const fetchData = async () => {
		const res = await fetch('/api/hello');
		const json = await res.json();
		message = json.message;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full py-12 md:py-24 lg:py-32">
	<div class="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
		<p class="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
			Here is the response to your API call:
		</p>
		<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
			{!message ? 'Loading...' : message}
		</h1>
		<a
			href="/api/hello"
			class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
		>
			View the API call
		</a>
	</div>
</section>
