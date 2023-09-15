<script>
  import { onMount } from "svelte";
  import { fetchMockData } from "../dummy-api/api.js";

  let data = [];

  onMount(async () => {
    // Fetch data when the component is mounted
    data = await fetchMockData();
    console.log(data);
  });
</script>

<h1>Kittens</h1>
<p>this is the Kittens page.</p>

<div>
  <h1>Mock API Data</h1>
  <ul>
    {#await fetchMockData()}
      <p>Loading...</p>
    {:then data}
      <div class="parent">
        {#each data as { id, url }}
          <div class="child">
            <img src={url} alt={id} />
          </div>
        {/each}
      </div>
    {/await}
  </ul>
</div>

<style>
  .child {
    height: 250px;
    width: 250px;
    padding: 15px;
  }
  .child img {
    height: 100%;
    width: 100%;
  }

  .parent {
    display: flex;
    height: 200px;
    width: 800px;
  }
</style>
