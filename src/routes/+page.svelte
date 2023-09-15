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
  <div class="parent">
    {#each data as { title, url }}
      <div class="child">
        <img src={url} alt={title} />
      </div>
    {/each}
  </div>
{/await}

<style>
  .child {
    height: 140px;
    width: 140px;
    padding: 15px;
  }
  .child img {
    height: 100%;
    width: 100%;
  }

  .parent {
    display: flex;
    height: 200px;
    width: 500px;
  }
</style>
