<script lang="ts">
  import { Router, type RouteConfig } from '@mateothegreat/svelte5-router';
  import Home from "./routes/home.svelte";
  import pg404 from "./routes/404.svelte"
  import pgTeams from "./routes/teams.svelte"

  const routes: RouteConfig[] = [
    { component: Home },
    { path: "/*", component: pg404},
    { path: "/teams", component: pgTeams},
  ]

  function redirect(link) {
    window.location.href = link
}
</script>

<div class="pan-navbar">
  <div class="con-navbar-title">
    <button class="btn-nav" on:click={() => {redirect("/")}}>HumanEd</button>
  </div>
  <img src="src/assets/humaned-logo.svg" alt="logo" class="img-logo" style="filter: brightness(95%);">
  <div class="con-navbar-buttons">
    <button class="btn-nav" on:click={() => {redirect("/")}}>JOIN</button>
    <button class="btn-nav" on:click={() => {redirect("/")}}>COMMITTEE</button>
    <button class="btn-nav" on:click={() => {redirect("/teams")}}>TEAMS</button>
    <button class="btn-nav" on:click={() => {redirect("/")}}>MERCH</button>
    <!-- <button class="btn-nav" on:click={() => {redirect("/")}}>ABOUT</button> -->
  </div>
</div>

<Router {routes} />

<footer>
  <div class="con-footer-wordmark">
    HumanEd
  </div>
  <div class="con-footer-contacts">
    <a href="https://www.facebook.com/profile.php?id=100072585729422">Facebook</a>
    <a href="uoe.humaned@gmail.com">Gmail</a>
    <a href="https://www.eusa.ed.ac.uk/activities/view/humaned">EUSA</a>
    <a href="https://www.linkedin.com/company/77203031/">Linkedin</a>
    <a href="https://www.instagram.com/humanedinburgh/">Instagram</a>
    <a href="https://discord.com/invite/buEtyUV6Gn">Discord</a>
  </div>
</footer>

<style>
  :root {
    --col-bg: #0b0b10;

    --chasm1:  #85daeb;
    --chasm2:  #5fc9e7;
    --chasm3:  #5fa1e7;
    --chasm4:  #5f6ee7;
    --chasm5:  #4c60aa;
    --chasm6:  #444774;
    --chasm7:  #32313b;
    --chasm8:  #463c5e;
    --chasm9:  #5d4776;
    --chasm10: #855395;
    --chasm11: #ab58a8;
    --chasm12: #ca60ae;
    --chasm13: #f3a787;
    --chasm14: #f5daa7;
    --chasm15: #8dd894;
    --chasm16: #5dc190;
    --chasm17: #4ab9a3;
    --chasm18: #4593a5;
    --chasm19: #5efdf7;
    --chasm20: #ff5dcc;
    --chasm21: #fdfe89;
    --chasm22: #ffffff;

    --team-arm:   #5fc9e7;
    --team-biped: #8dd894;
  }

  .pan-navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: var(--chasm7);

    padding: 20px;
  }

  .con-navbar-title  {
    width: 100%;
    text-align: right;
  }
  .con-navbar-title button {
    font-size: 32px;
    margin: 0;
    padding: 0;
  }
  .con-navbar-buttons {
    display: flex;
    flex-direction: row;
    gap: 24px;

    width: 100%;
    text-align: left;
  }
  .con-navbar-buttons button{
    margin: 0;
    padding: 0;
  }

  .con-navbar-buttons button:hover{
    margin: 0;
    padding: 0;

    color: #cbcbcb;

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
    background-color: var(--chasm7);

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
</style>