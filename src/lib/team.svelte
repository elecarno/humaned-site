<script>
    export let name = "NAME"
    export let type = "ROLE"
    export let logo = "PROG"
    export let link = "link"
    export let col  =  "#ffffff"
    export let img   = "img"

    function redirect(pg_link) {
        window.location.href = pg_link
    }
</script>

<button 
    class="con-team" 
    on:click={() => {redirect({link})}}
    style="border-color: {col}; background-image: url('src/assets/banners/{img}')"
>
    <div class="con-titleblock">
        <img src="src/assets/logos/{logo}" alt="{logo}" class="img-logo">
        <div class="con-title">
            <h1>{name}</h1>
            <h3>{type}</h3>
        </div>
    </div>
</button>

<style>
.con-team {
    display: flex;
    flex-direction: column;
    justify-content: end;

    width: 100%;
    height: 480px;

    border-width: 2px;
    border-style: solid;
    border-radius: 8px;

    padding: 32px;
    
    background-color: var(--pal-gray);
    background-size: cover;
    background-position: center;
    /* background-blend-mode: overlay; */

    text-align: left;
}
.con-title h1 {
    font-size: 40px;
    margin: 0;
    margin-bottom: 8px;
}
.con-title h3 {
    font-size: 30px;
    margin: 0;
}

.con-titleblock {
    display: flex;
    flex-direction: row;
    
    gap: 32px;
}

.img-logo {
    filter: brightness(95%);
    height: 128px
}
</style>
