<script>
  function redirect(link) {
    window.location.href = link
  }
</script>

<main>
  <h1>Humanoid Robot</h1>
  <div class="con-teams-list">
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Robotic Arms</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Bipedal Motion</h2>
    </div>
  </div>

  <h1>Hardware</h1>
  <div class="con-teams-list">
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Exoskeleton</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Biomimetics</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Developed Projects</h2>
    </div>
  </div>

  <h1>Software</h1>
  <div class="con-teams-list">
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Reinforcement Learning</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Computer Vision</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Software</h2>
    </div>
  </div>
</main>

<style>
  .con-teams-list {
    display: flex;
    flex-direction: column;
  }

  .con-team {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    height: 200px;

    padding-left: 128px;
    gap: 32px;

    text-align: left;
  }
  .con-team h2 {
    font-size: 38px;
    width: 100%;
  }

  .img-team-logo {
    filter: brightness(95%);

    width: 150px;
  }

  
</style>
