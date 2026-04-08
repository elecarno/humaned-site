<script>
  function redirect(link) {
    window.location.href = link
  }
</script>

<main>
  <div class="con-titlepage">
    <img src="src/assets/humaned-logo.svg" alt="logo" class="img-logo" style="filter: brightness(95%);">
    <h1 class="lbl-title">Welcome to HumanEd</h1>
    <h2 class="lbl-subtitle fnt-jersey">Humanoid Robotics at the University of Edinburgh</h2>
  </div>
</main>

<style>
  .con-titlepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--pal-black);
    background: linear-gradient(0deg, var(--pal-primary) 3%, var(--pal-black) 100%);

    height: 600px;
  }
  
  .img-logo {
    width: 180px;
    margin-bottom: 32px;
  }

  .lbl-title {
    margin: 0 auto;
  }

  .lbl-subtitle {
    margin: 0 auto;
  }
</style>
