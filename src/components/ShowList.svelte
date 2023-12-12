<script lang="ts">
  import Show from "@components/Show.svelte";
  import Button from "@components/Button.svelte";
  import type { ShowsSchema } from "@/types/shows.schema.ts";
  import { onMount } from "svelte";

  export let shows = ShowsSchema['shows'], limit: number;
  let upcoming = [];
  let past = [];

  onMount(() => {
    upcoming = shows.filter((show) => new Date(show.date) >= new Date());
    past = shows.filter((show) => new Date(show.date) < new Date());
  })

  let upcomingLimit = limit;
  let pastLimit = limit;
  $: upcomingShown = upcoming.slice(0, upcomingLimit);
  $: pastShown = past.slice(0, pastLimit);

  let list: "upcoming" | "past" = "upcoming";
</script>

<div class="mb-4 flex cursor-pointer gap-4 text-amber-50">
  <h2 class="text-xl {list === 'upcoming' ? 'text-primary-color' : ''}" on:click={() => list = 'upcoming'}>Upcoming</h2>
  <h2 class="text-xl {list === 'past' ? 'text-primary-color' : ''}" on:click={() => list = 'past'}>Past</h2>
</div>
{#if list === 'upcoming'}
  <ul class="text-white w-full list-none grid md:grid-cols-[repeat(2,1fr)] gap-4 mb-6">
    {#each upcomingShown as show}
      <Show {...show} />
    {/each}
  </ul>
  {#if upcoming.length > upcomingLimit}
    <Button clickHandler={() => upcomingLimit += limit}>Load More</Button>
  {/if}
{/if}
{#if list === 'past'}
  <ul class="text-white w-full list-none grid md:grid-cols-[repeat(2,1fr)] gap-4 mb-6">
    {#each pastShown as show}
      <Show {...show} />
    {/each}
  </ul>
  {#if past.length > pastLimit}
    <Button clickHandler={() => pastLimit += limit}>Load More</Button>
  {/if}
{/if}
