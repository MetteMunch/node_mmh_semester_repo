<script>
  import Child from "../Child/Child.svelte";
  import { fridgeMessages } from "../../stores/fridgeStore.js";


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
</script>

<h1>{ parentName}</h1>


{#each loveHistory as love}
    <span>{love.name}: {love.love}</span>   
{/each}
<br/>

<!-- Man kan kun sende data ned af i DOM fra parent til child gennem props -->
 <!-- Hvis der skal sendes op så skal der sendes en funktions ref  -->
  <!-- konvention: handle_ i komponenten og on_ props -->
{#each cookieJar as cookie}
    <span>{cookie}</span>   
{/each}
<br/>

<button onclick={fridgeMessages.wipe}>Wipe fridge</button>
<br/>
<br/>
<br/>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}

