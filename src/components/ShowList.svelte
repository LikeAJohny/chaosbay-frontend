<script lang="ts">
  import Show from "@components/Show.svelte";
  import Button from "@components/Button.svelte";

  export let upcoming: Show[], passed: Show[], limit: number;

  let upcomingLimit = limit;
  let passedLimit = limit;
  $: upcomingShown = upcoming.slice(0, upcomingLimit);
  $: passedShown = passed.slice(0, passedLimit);

  let list: "upcoming" | "passed" = "upcoming";
</script>

<div class="mb-4 flex cursor-pointer gap-4 text-amber-50">
  <h2 class="text-xl {list === 'upcoming' ? 'text-primary-color' : ''}" on:click={() => list = 'upcoming'}>Upcoming</h2>
  <h2 class="text-xl {list === 'passed' ? 'text-primary-color' : ''}" on:click={() => list = 'passed'}>Passed</h2>
</div>
{#if list === 'upcoming'}
  <ul class="text-white w-full list-none grid md:grid-cols-[repeat(2,49%)] gap-4 mb-6">
    {#each upcomingShown as show}
      <Show {...show} />
    {/each}
  </ul>
  {#if upcoming.length > upcomingLimit}
    <Button clickHandler={() => upcomingLimit += limit}>Load More</Button>
  {/if}
{/if}
{#if list === 'passed'}
  <ul class="w-full list-none text-white">
    {#each passedShown as show}
      <Show {...show} />
    {/each}
  </ul>
  {#if passed.length > passedLimit}
    <Button clickHandler={() => passedLimit += limit}>Load More</Button>
  {/if}
{/if}
