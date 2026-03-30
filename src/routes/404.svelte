<script>
import { onMount, onDestroy } from 'svelte';

onMount(() => {
    document.documentElement.classList.add('pg-404');
});

onDestroy(() => {
    document.documentElement.classList.remove('pg-404');
});

function redirect(link) {
    window.location.href = link
}
</script>

<svelte:head>
    <title>Elecarno | 404</title> 
</svelte:head>

<main>
    <h1>404: Not Found</h1>
    <p>
        It would appear you are trying to access a page that does not exist on my domain!<br>
        Double check the address, or use the button below to go my home page.
    </p>
    <button on:click={() => {redirect("/")}}>Go to Home</button>
    <p>Alternatively, click <a href="links">here</a> to see a list of all pages on this domain.</p>
</main>

<style global>
h1 {
    font-family: "DM Serif Text";
}

:root.pg-404 {
    background: #2a2b2a;
    background: linear-gradient(0deg, rgba(46, 115, 89, 1) 0%, rgba(38, 38, 38, 1) 60%);
}
</style>