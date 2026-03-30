<script>
function redirect(link) {
    window.location.href = link
}
</script>

<svelte:head>
    <title>HumanEd | 404</title> 
</svelte:head>

<main>
    <h1>404: Not Found</h1>
    <button on:click={() => {redirect("/")}}>Go to Home</button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 80vh;
    }
</style>