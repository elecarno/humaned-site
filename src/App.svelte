<script lang="ts">
  import { Router, type RouteConfig } from '@mateothegreat/svelte5-router';
  import Home from "./routes/home.svelte";
  import pg404 from "./routes/404.svelte"
  import pgTeams from "./routes/teams.svelte"
  import pgCommittee from "./routes/committee.svelte"

  const routes: RouteConfig[] = [
    { component: Home },
    { path: "/*", component: pg404  },
    { path: "/teams", component: pgTeams },
    { path: "/committee", component: pgCommittee }
  ]

  function redirect(link) {
    window.location.href = link
  }
</script>

<div class="pan-navbar">
  <button class="btn-nav-title" on:click={() => {redirect("/")}}>HumanEd</button>
  <img src="src/assets/humaned-logo.svg" alt="logo" class="img-logo" style="filter: brightness(95%);">
  <div class="con-navbar-buttons">
    <button class="btn-nav" on:click={() => {redirect("https://www.eusa.ed.ac.uk/shop?activity_id=441")}}>JOIN</button>
    <button class="btn-nav" on:click={() => {redirect("/committee")}}>COMMITTEE</button>
    <button class="btn-nav" on:click={() => {redirect("/teams")}}>TEAMS</button>
    <button class="btn-nav" on:click={() => {redirect("https://www.eusa.ed.ac.uk/shop?activity_id=441")}}>MERCH</button>
    <!-- <button class="btn-nav" on:click={() => {redirect("/")}}>ABOUT</button> -->
  </div>
</div>

<Router {routes} />

<footer>
  <div class="con-footer-wordmark">
  <button on:click={() => {redirect("/")}} class="btn-footer">
    <img src="src/assets/humaned-logo.svg" alt="logo" class="img-logo" style="filter: brightness(95%);">
  </button>
  </div>
  <div class="con-footer-contacts">
    <button on:click={() => {redirect("https://www.facebook.com/profile.php?id=100072585729422")}} class="btn-footer">
      <img src="src/assets/icons/facebook.png" alt="logo" class="img-btn-footer">
    </button>
    
    <button on:click={() => {redirect("mailto:uoe.humaned@gmail.com")}} class="btn-footer">
      <img src="src/assets/icons/gmail.png" alt="logo" class="img-btn-footer">
    </button>

    <button on:click={() => {redirect("https://www.linkedin.com/company/77203031/")}} class="btn-footer">
      <img src="src/assets/icons/linkedin.png" alt="logo" class="img-btn-footer">
    </button>

    <button on:click={() => {redirect("https://www.instagram.com/humanedinburgh/")}} class="btn-footer">
      <img src="src/assets/icons/instagram.png" alt="logo" class="img-btn-footer">
    </button>

    <button on:click={() => {redirect("https://discord.com/invite/buEtyUV6Gn")}} class="btn-footer">
      <img src="src/assets/icons/discord.png" alt="logo" class="img-btn-footer">
    </button>

    <button on:click={() => {redirect("https://www.eusa.ed.ac.uk/activities/view/humaned")}} class="btn-footer">
      <img src="src/assets/icons/eusa.png" alt="logo" class="img-btn-footer">
    </button>
  </div>
</footer>

<style>
  .pan-navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* background-color: var(--pal-gray); */
    /* background-color: transparent; */
    padding: 20px;
  }

  .btn-nav-title {
    font-family: "Do Hyeon";
    font-size: 32px;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }
  .con-navbar-buttons {
    display: flex;
    flex-direction: row;
    gap: 24px;

    /* width: 100%; */
    text-align: left;
  }
  .con-navbar-buttons button{
    margin: 0;
    padding: 0;
  }

  .con-navbar-buttons button:hover{
    margin: 0;
    padding: 0;

    filter: brightness(60%);

    transition: 0.3s;
  }

  .img-logo {
    width: 48px;
    margin-left: 32px;
    margin-right: 32px;
  }

  .btn-nav {
    font-family: "Do Hyeon";
    background-color: transparent;
    font-size: 24px;
  }

  footer {
    background-color: var(--pal-black);

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;

    /* width: 100%; */

    padding-top: 16px;
    padding-bottom: 32px;
    padding-left: 48px;
    padding-right: 48px;
  }

  .con-footer-wordmark {
    width: 30%;
    text-align: left;
  }

  .con-footer-contacts {
    display: flex;
    flex-direction: row;
    gap: 16px;

    justify-content: right;

    width: 70%;
  }
  
  .btn-footer {
    background-color: transparent;
  }

  .img-btn-footer {
    height: 38px;
  }
</style>