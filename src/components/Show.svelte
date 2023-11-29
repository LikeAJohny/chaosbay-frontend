<script lang="ts">
  export let name: string, location: string, date: string, ticketLink: string;
  const [year, month, day] = date.split("-");
</script>

<li class="grid w-full justify-between text-gray-800 grid-cols-[5rem_1fr]">
  <div
    class="grid aspect-square w-20 auto-rows-fr justify-center justify-items-center border-r border-dashed border-gray-800 px-2 text-center"
  >
    <div class="grid items-center border-b border-gray-600 text-2xl">
      {day}.{month}.
    </div>
    <div class="grid items-center text-lg">{year}</div>
  </div>
  <div class="grid px-3 text-left grid-rows-[40px_40px]">
    <div class="grid items-center border-b border-gray-600 text-2xl uppercase">
      {location}
    </div>
    <div class="flex justify-between">
      <div class="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg flex-[1] leading-[40px]" title={name}>
        {name}
      </div>
      <a
        class="grid items-center text-lg text-amber-600 hover:text-amber-800"
        href={ticketLink}
      >
        Buy Tickets &rarr;
      </a>
    </div>
  </div>
</li>

<style lang="css">
  li {
    background-size: 100% 51%;
    background-position: top, bottom;
    background-repeat: no-repeat;
    background-image: radial-gradient(
        circle at 5rem 3%,
        rgba(255, 255, 224, 0) 0.4em,
        #ffffe0 0.5em
    ),
    radial-gradient(
        circle at 5rem 97%,
        rgba(255, 255, 224, 0) 0.4em,
        #ffffe0 0.5em
    );
  }
</style>
