<script>
  function redirect(link) {
    window.location.href = link
  }
</script>

<svelte:head>
    <title>HumanEd | Teams</title> 
</svelte:head>

<main>
  <div class="con-teams-header">
    <h2 style="color: var(--team-arm)">Robotic Arms</h2>
    <span>•</span>
    <h2 style="color: var(--team-bip)">Bipedal Motion</h2>
    <span>•</span>
    <h2 style="color: var(--team-exo)">Exoskeleton</h2>
    <span>•</span>
    <h2 style="color: var(--team-bio)">Biomimetics</h2>
    <span>•</span>
    <h2 style="color: var(--team-dev)">Developed Projects</h2>
  </div>
  <div class="con-teams-header">
    <h2 style="color: var(--team-rei)">Reinforcement Learning</h2>
    <span>•</span>
    <h2 style="color: var(--team-vis)">Computer Vision</h2>
    <span>•</span>
    <h2 style="color: var(--team-sof)">Software</h2>
  </div>

  <hr>

  <h1>Humanoid Robot</h1>
  <div class="con-teams-list">
    <div class="con-team team-arm">
      <img src="src/assets/logos/logo-sof.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Robotic Arms</h2>
        <h3>Advanced</h3>
      </div>
    </div>
    <div class="con-team team-bip">
      <img src="src/assets/logos/logo-sof.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Bipedal Motion</h2>
        <h3>Advanced</h3>
      </div>
    </div>
  </div>

  <h1>Hardware</h1>
  <div class="con-teams-list">
    <div class="con-team team-exo">
      <img src="src/assets/logos/logo-exo.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Exoskeleton</h2>
        <h3>Intermediate</h3>
      </div>
    </div>
    <div class="con-team team-bio">
      <img src="src/assets/logos/logo-bio.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Biomimetics</h2>
        <h3>Intermediate</h3>
      </div>
    </div>
    <div class="con-team team-dev">
      <img src="src/assets/logos/logo-dev.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Developed Projects</h2>
        <h3>Beginner</h3>
      </div>
    </div>
  </div>

  <h1>Software</h1>
  <div class="con-teams-list" style="margin-bottom: 16px;">
    <div class="con-team team-rei">
      <img src="src/assets/logos/logo-sof.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Reinforcement Learning</h2>
        <h3>Intermediate</h3>
      </div>
    </div>
    <div class="con-team team-vis">
      <img src="src/assets/logos/logo-vis.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Computer Vision</h2>
        <h3>Advanced</h3>
      </div>
    </div>
    <div class="con-team team-sof">
      <img src="src/assets/logos/logo-sof.svg" alt="logo" class="img-team-logo">
      <div class="con-team-title">
        <h2>Software</h2>
        <h3>Beginner</h3>
      </div>
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

    padding-left: 244px;
    gap: 32px;

    /* background-color: var(--pal-gray); */
    text-align: left;

    background-position: center;
    
    transition: 0.5s;
  }
  .con-team:hover {
    height: 220px;
    padding-left: 288px;
  }

  .con-team-title {
    filter: drop-shadow( 3px 3px 2px rgba(45, 45, 45, 0.3));
    width: 100%;
  }
  .con-team-title h2 {
    font-size: 38px;
    margin: 0;
  }
  .con-team-title h3 {
    font-size: 30px;
    margin: 0;
  }

  .img-team-logo {
    filter: brightness(95%);
    filter: drop-shadow( 3px 3px 2px rgba(45, 45, 45, 0.3));

    width: 150px;
  }

  .team-arm {
    background-image: url("../assets/banners/banner-arm.png");
  }
  .team-bip {
    background-image: url("../assets/banners/banner-bip.png");
  }
  .team-exo {
    background-image: url("../assets/banners/banner-exo.png");
  }
  .team-bio {
    background-image: url("../assets/banners/banner-exo.png");
  }
  .team-dev {
    background-image: url("../assets/banners/banner-exo.png");
  }
  .team-rei {
    background-image: url("../assets/banners/banner-exo.png");
  }
  .team-vis {
    background-image: url("../assets/banners/banner-exo.png");
  }
  .team-sof {
    background-image: url("../assets/banners/banner-exo.png");
  }

  .team-arm:hover {
    background-color: var(--team-arm);
  }
  .team-bip:hover {
    background-color: var(--team-bip);
  }
  .team-exo:hover {
    background-color: var(--team-exo);
  }
  .team-bio:hover {
    background-color: var(--team-bio);
  }
  .team-dev:hover {
    background-color: var(--team-dev);
  }
  .team-rei:hover {
    background-color: var(--team-rei);
  }
  .team-vis:hover {
    background-color: var(--team-vis);
  }
  .team-sof:hover {
    background-color: var(--team-sof);
  }
  

  
</style>
