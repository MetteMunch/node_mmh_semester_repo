<script>
    const { name, familySheep, isGirl, onShowLove, onEatCookie } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let fridgemessageInput = $state("");

    function handleWriteFridgeMessage() {
        fridgeMessages.set([...$fridgeMessages, fridgemessageInput]);
        fridgemessageInput = "";

    }
    
</script>

<div 
    class={familySheep || "not-a-sheep" }
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    >
<h3>{name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show your parent some love</button>
<button onclick={onEatCookie}>Eat a cookie</button>
<br/>
<br/>

<input bind:value={fridgemessageInput}>
<button onclick={handleWriteFridgeMessage}>write message</button>

<style>
    .black-sheep {
        background-color: crimson;
    }

    .grey-sheep {
        background-color: navajowhite;
    }

    .not-a-sheep {
        background-color: yellow;
    }

    .is-girl {
        border: 1em solid rebeccapurple;
    }

    .is-boy {
        border: 1em solid cadetblue;
    }
</style>