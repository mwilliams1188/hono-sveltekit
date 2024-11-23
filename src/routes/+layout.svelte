<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
	<main>
		{@render children()}
	</main>
</div>
