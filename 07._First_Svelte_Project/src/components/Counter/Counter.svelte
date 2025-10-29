<script>
  let count = $state(0)  /*$state gør variablen reaktiv (dette er en rune)
  dvs når den ændres, så renderer svelte automatisk knappen igen   */

  let double = $derived(count * 2)  //beregnet værdi ($derived er en rune)
  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment}>
  count is {count} 
</button>
<p> { count } * 2 = { double }</p>
 