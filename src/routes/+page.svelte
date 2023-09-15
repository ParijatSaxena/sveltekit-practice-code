<script>
  import { onMount } from "svelte";

  let posts = [];
  onMount(async () => {
    posts = await getPost();
  });

  const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    const filteredData = data.slice(0, 3);
    console.log(filteredData);
    return filteredData;
  };
</script>

<h1>home</h1>
<p>this is the home page.</p>

{#await getPost()}
  <p>Loading...</p>
{:then data}
  {#each data as { title, url }}
    <div class="grid">
      <img src={url} alt={title} />
    </div>
  {/each}
{/await}

<style scoped>
  .grid {
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
