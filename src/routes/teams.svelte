<script>
  import Team from "../lib/team.svelte"

  function redirect(link) {
    window.location.href = link
  }

  let teams_humanoid = [
    {
      "name": "Robotic Arms",
      "type": "Advanced",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    },
    {
      "name": "Bipedal Motion",
      "type": "Advanced",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    }
  ]

  let teams_hardware = [
    {
      "name": "Exoskeleton",
      "type": "Intermediate",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    },
    {
      "name": "Biomimetics",
      "type": "Intermediate",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    },
    {
      "name": "Developed Projects",
      "type": "Begineer",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    }
  ]

  let teams_software = [
    {
      "name": "Computer Vision",
      "type": "Advanced",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    },
    {
      "name": "Reinforcement Learning",
      "type": "Intermediate",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    },
    {
      "name": "Software",
      "type": "Beginner",
      "logo": "logo-bio.svg",
      "col":  "var(--pal-primary)",
      "img":  "banner-exo.png"
    }
  ]
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
    {#each teams_humanoid as team}
      <Team
        name={team["name"]}
        type={team["type"]}
        logo={team["logo"]}
        col ={team["col"]}
        img ={team["img"]}
      />
    {/each}
  </div>

  <h1>Hardware</h1>
  <div class="con-teams-list">
    {#each teams_hardware as team}
      <Team
        name={team["name"]}
        type={team["type"]}
        logo={team["logo"]}
        col ={team["col"]}
        img ={team["img"]}
      />
    {/each}
  </div>

  <h1>Software</h1>
  <div class="con-teams-list" style="margin-bottom: 16px;">
    {#each teams_software as team}
      <Team
        name={team["name"]}
        type={team["type"]}
        logo={team["logo"]}
        col ={team["col"]}
        img ={team["img"]}
      />
    {/each}
  </div>
</main>

<style>
  main {
    width: 80%;
    margin: 0 auto;
  }

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
    flex-direction: row;
    gap: 32px;
  }
</style>
