<script>
    export let name = "NAME"
    export let role = "ROLE"
    export let prog = "PROG"
    export let img = "IMG"
</script>

<div class="con-member">
    <img class="img-portrait" alt="Portrait" src="src/assets/portraits/{img}">
    <div class="con-member-details">
        <h3>{role}</h3>
        <h2>{name}</h2>
        <p>{prog}</p>
    </div>
</div>

<style>
.con-member {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    gap: 24px;

    width: 100%;
    height: 180px;
}

.img-portrait {
    width: 180px;
    height: 180px;

    object-fit: cover;

    border-color: var(--pal-primary);
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
}

.con-member-details {
    text-align: left;
}
.con-member-details h2 {
    font-size: 36px;
    margin: 0;
}
.con-member-details h3 {
    font-size: 24px;
    margin: 0;
}
.con-member-details p {
    margin: 0;
}


</style>
