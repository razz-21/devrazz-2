<script lang="ts">
	import '../styles/style.scss';

	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<main>
	<slot />
	<ThemeSwitcher />
</main>

<style lang="scss">
</style>
