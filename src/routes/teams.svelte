<script>
  function redirect(link) {
    window.location.href = link
  }
</script>

<main>
  <div class="con-teams-header">
    <h2 style="color: var(--team-arm)">Robotic Arms</h2>
    <span>•</span>
    <h2>Bipedal Motion</h2>
    <span>•</span>
    <h2>Exoskeleton</h2>
    <span>•</span>
    <h2>Biomimetics</h2>
    <span>•</span>
    <h2>Developed Projects</h2>
  </div>
  <div class="con-teams-header">
    <h2>Reinforcement Learning</h2>
    <span>•</span>
    <h2>Computer Vision</h2>
    <span>•</span>
    <h2>Software</h2>
  </div>

  <hr>

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
      <img src="src/assets/logos/logo-exo.svg" alt="logo" class="img-team-logo">
      <h2>Exoskeleton</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-bio.svg" alt="logo" class="img-team-logo">
      <h2>Biomimetics</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-dev.svg" alt="logo" class="img-team-logo">
      <h2>Developed Projects</h2>
    </div>
  </div>

  <h1>Software</h1>
  <div class="con-teams-list" style="margin-bottom: 16px;">
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Reinforcement Learning</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-vision.svg" alt="logo" class="img-team-logo">
      <h2>Computer Vision</h2>
    </div>
    <div class="con-team">
      <img src="src/assets/logos/logo-software.svg" alt="logo" class="img-team-logo">
      <h2>Software</h2>
    </div>
  </div>
</main>

<style>
  .con-teams-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .con-teams-header span {
    margin-left: 8px;
    margin-right: 8px;
  }
  .con-teams-header h2 {
    margin: 0;
  }

  .con-teams-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .con-team {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    height: 200px;

    padding-left: 128px;
    gap: 32px;

    background-color: var(--chasm7);
    text-align: left;

    background-image: url("../assets/banners/banner-exo.png");
    background-position: center;
    
    transition: 0.5s;
  }
  .con-team:hover {
    height: 220px;
    padding-left: 256px;
    background-color: var(--team-arm);
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
