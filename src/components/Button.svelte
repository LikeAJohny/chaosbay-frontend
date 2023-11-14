<script lang="ts">
  export let clickHandler: () => void;
</script>

<button class="flex w-full text-xl" on:click={clickHandler}>
  <span>
    <slot />
  </span>
</button>

<style>
  button {
    padding: 1px;
    background-color: #23262d;
    background-image: none;
    background-size: 400%;
    border-radius: 7px;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  button > span {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
    color: white;
    background-color: #23262d;
    opacity: 0.8;
  }

  button:is(:hover, :focus-within) {
    background-position: 0;
    background-image: var(--accent-gradient);
  }
</style>
