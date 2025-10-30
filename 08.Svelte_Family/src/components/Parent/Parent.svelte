<script>

    const { parentName, children } = $props();
    
</script>

<h1>{ parentName}</h1>

{#each children as child (child.name)} 
<h3>{child.name}</h3>
{/each}
