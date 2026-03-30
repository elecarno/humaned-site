<script>
import { onMount, onDestroy } from 'svelte';

onMount(() => {
    document.documentElement.classList.add('pg-links');
});

onDestroy(() => {
    document.documentElement.classList.remove('pg-links');
});

function redirect(link) {
    window.location.href = link
  }
</script>

<svelte:head>
    <title>Elecarno | Links</title> 
</svelte:head>

<main>
    <h1>Links</h1>
    <p>A list of all sites and pages on this domain.</p>

    <ul>
        <li><a href="/">/</a> - Home Page</li>
        <li><a href="/*">/*</a> - 404 Page</li>
        <li><a href="/links/">/links/</a> - Links Page</li>
    </ul>
    
    <h3>Project Sites</h3>
    <ul>
        <li><a href="/past-paper-viewer/">/past-paper-viewer/</a> - Website for the Past Paper Viewer project</li>
        <li><a href="/crossing-red-helios/">/crossing-red-helios/</a> - Website for the Crossing Red-Helios project</li>
        <li><a href="/crh-wiki/">/crh-wiki/</a> - Wiki for the Crossing Red-Helios project</li>
        <li><a href="/aster-docs/">/aster-docs/</a> - Documentation for the <a href="https://www.github.com/jachdich/aster-server">Aster</a> project</li>
        <li><a href="/music-theory-tester/">/music-theory-tester/</a> - A simple web app for memorising heptatonic musical scales.</li>
    </ul>

    <hr>

    <h2>Elecarno</h2>
    <a href="/elecarno/">/elecarno/</a>

    <hr>

    <h2>Monarch Atolla</h2>
    <a href="/ma/">/ma/</a>

    <h3>Albums & EPs</h3>
    <ul>
        <li><a href="/ma/amber/">/ma/amber/</a> - An Amber Ballad</li>
        <li><a href="/ma/hope/">/ma/hope/</a> - Hope Need Not Be Real</li>
        <li><a href="/ma/candle/">/ma/candle/</a> - Candlelight Fragments</li>
        <li><a href="/ma/brothers/">/ma/brothers/</a> - Brothers at the End of an Era</li>
    </ul>

    <h3>Singles</h3>
    <ul>
        <li><a href="/ma/golden">/ma/golden/</a> - Golden Friend of Silver Water</li>
        <li><a href="/ma/winter">/ma/winter/</a> - Call Your Names In Winter Night</li>
        <li><a href="/ma/classroom">/ma/classroom/</a> Soft Eyes Under Classroom Glow</li>
        <li><a href="/ma/shimmering">/ma/shimmering/</a> - Shimmering Flower</li>
        <li><a href="/ma/simille">/ma/simile/</a> - Fall in Simile</li>
        <li><a href="/ma/heart">/ma/heart/</a> - Brother by Heart</li>
        <li><a href="/ma/silent">/ma/silent/</a> - When Silent Was Joy</li>
        <li><a href="/ma/parallels">/ma/parallels/</a> - Parallels</li>
    </ul>

    <hr>

    <h2>B. McEwan</h2>
    <a href="/mcewan/">/mcewan/</a>

    <h3>3D Artist</h3>
    <a href="/mcewan/3d/">/mcewan/3d/</a>
    <ul>
        <li><a href="/mcewan/3d/dragonfly">/mcewan/3d/dragonfly/</a> - Mechanical Dragonfly</li>
        <li><a href="/mcewan/3d/butterfly">/mcewan/3d/butterfly/</a> - Mechanical Butterfly</li>
        <li><a href="/mcewan/3d/ontop">/mcewan/3d/ontop/</a> - We're on Top</li>
        <li><a href="/mcewan/3d/fighter">/mcewan/3d/fighter/</a> - Space Fighter</li>
        <li><a href="/mcewan/3d/robot">/mcewan/3d/robot/</a> - Robot</li>
    </ul>

    <h3>Writer</h3>
    <a href="/mcewan/3d/">/mcewan/writer/</a>

    <ul>
        <li><a href="/mcewan/writer/definitions">/mcewan/3d/definitions/</a> - Definitions</li>
        <li><a href="/mcewan/writer/rifle">/mcewan/3d/rifle/</a> - Freedom Is Not a Rifle</li>
        <li><a href="/mcewan/writer/green">/mcewan/3d/green/</a> - A Comforting Green</li>
        <li><a href="/mcewan/writer/pentadecimal">/mcewan/3d/pentadecimal/</a> - The Pentadecimal Watch</li>
        <li><a href="/mcewan/writer/tool">/mcewan/3d/tool/</a> - It is a tool and a tool only</li>
        <li><a href="/mcewan/writer/taxi">/mcewan/3d/taxi/</a> - Cold, Jacket, & Taxi</li>
    </ul>

    <hr>

    <h2>Arkady Orlunda</h2>
    <a href="/ao/">/ao/</a>
</main>

<style global>
h1, h2, h3 {
    font-family: "DM Serif Text";
}

:root.pg-links {
    background: #2a2b2a;
}

main {
    min-height: 100vh;
    height: 100%;
    text-align: left;

    width: 90%;
    min-width: 325px;
    max-width: 850px;
    margin: 0 auto;    
}
</style>