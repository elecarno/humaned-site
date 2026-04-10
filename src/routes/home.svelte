<script>
    import { onMount, onDestroy } from 'svelte';

    onMount(() => {
        document.documentElement.classList.add('pg-home');
    });

    onDestroy(() => {
        document.documentElement.classList.remove('pg-home');
    });

  function redirect(link) {
    window.location.href = link
  }
</script>

<main>
  <div class="con-titlepage">
    <img src="src/assets/humaned-logo.svg" alt="logo" class="img-logo">
    <h1 class="lbl-title">Welcome to HumanEd</h1>
    <h2 class="lbl-subtitle fnt-jersey">Humanoid Robotics at the University of Edinburgh</h2>
  </div>

  <div class="con-about">
    <img src="src/assets/photos/committee_26-27.jpg" alt="committee_26-27.jpg" class="img-photo">
    
    <div class="con-about-text">
      <h2 class="lbl-about-header">Who are we?</h2>
      <p class="lbl-about-body">
        We are a welcoming engineering society that aims to be both beginner friendly and developmental.
      
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</main>

<style>
  :root.pg-home {
    background-image: 
      url("../assets/banners/hand_poster.png"),
      linear-gradient(0deg, var(--pal-primary) 3%, var(--pal-black) 100%);

    /* background-image: url("../assets/banners/hand_poster_original.png"); */

    background-attachment: fixed;

    background-size: cover, cover;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
  }

  .con-titlepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 90vh;
  }
  
  .img-logo {
    width: 300px;
    margin-bottom: 32px;
    
    /* Drop shadow for the logo image */
    filter: 
      brightness(95%)
      drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6));
  }

  .lbl-title {
    margin: 0 auto;
    
    font-size: 72px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  }

  .lbl-subtitle {
    margin: 0 auto;
    
    font-size: 32px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  }

  .con-about {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 32px;

    padding: 64px;
    padding-left: 256px;
    padding-right: 256px;

    background-color: var(--pal-black);
  }

  .con-about-text {
    width: 50%;
  }

  .img-photo {
    width: 50%;

    border-radius: 8px;
  }

  .lbl-about-header {
    font-size: 48px;
    text-align: right;
    margin: 0;
  }
  
  .lbl-about-body {
    font-size: 18px;
    text-align: justify;
  }


</style>
