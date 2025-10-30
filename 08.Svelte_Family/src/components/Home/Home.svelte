<script>
    import { fridgeMessages } from "../../stores/fridgeStore.js";

    console.log(fridgeMessages); //$foran fridgeMessages giver værdien
</script>

<slot></slot>

{#each $fridgeMessages as fridgemessage }
<p>{fridgemessage}</p>
{/each}

<h2 id="welcome-mat">Velkommen til måtten</h2>

<style>
    #welcome-mat {
        color:black;
        background-color: aquamarine;
        padding: 2em;
        border-radius: 0 0 2em 2em;

    }

</style>