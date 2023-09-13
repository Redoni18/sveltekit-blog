<script lang="ts">
    import { theme, updateTheme } from "../store/theme"
    import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
</script>


<button aria-label="Toggle Theme" on:click={updateTheme}>
    {#if $theme === 'dark'}
        <div in:fly={{ y: 10 }}>
            <Sun />
            <span>Light</span>
        </div>
    {:else}
        <div in:fly={{ y: -10 }}>
            <Moon />
            <span>Dark</span>
        </div>
    {/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>