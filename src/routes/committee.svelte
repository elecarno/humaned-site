<script>
  function redirect(link) {
    window.location.href = link
  }
</script>

<svelte:head>
    <title>HumanEd | Committee</title> 
</svelte:head>

<main>
  <div class="con-members">

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

    <div class="con-member">
      <img class="img-portrait" alt="Portrait" src="src/assets/portraits/g_rupert.png">
      <div class="con-member-details">
        <h3>President</h3>
        <h2>Rupert Guinness</h2>
        <p>BEng Electronics & Electrical Engineering</p>
      </div>
    </div>

  </div>
</main>

<style>
  .con-members {
    display: grid;
    grid-template-columns: auto auto;

    gap: 16px;
    padding: 96px;
  }

  .con-member {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 24px;

    width: 100%;
    height: 180px;
  }

  .img-portrait {
    height: 100%;

    border-color: var(--chasm16);
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
