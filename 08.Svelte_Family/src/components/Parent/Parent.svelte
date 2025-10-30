<script>
  import Child from "../Child/Child.svelte";


    const { parentName, children } = $props();

        const loveHistory = $state([
        { 
            name: "self-love",
            love: "💞"
    }]);

    function handleShowLove(childsName) {
        loveHistory.push({
            name: childsName,
            love: "💞"
        });
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪"]);
    

    function handleEatCookie() {
        cookieJar.pop();
        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];
        }
    }

    /* 
    assignment: allow children to eat a cookie from the jar
    bonus: if the jar is empty, let the parent fill it
 */
</script>

<h1>{ parentName}</h1>

{#each loveHistory as love}
    <span>{love.name}: {love.love}</span>   
{/each}

<!-- Man kan kun sende data ned af i DOM fra parent til child gennem props -->
 <!-- Hvis der skal sendes op så skal der sendes en funktions ref  -->
  <!-- konvention: handle_ i komponenten og on_ props -->
{#each cookieJar as love}
    <span>{love.name}: {love.love}</span>   
{/each}


{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}

