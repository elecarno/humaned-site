<script>
    import { onMount, onDestroy } from 'svelte';
    import A4 from './404.svelte';
    import App from '../App.svelte';

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
      <h2>Who are we?</h2>
      <p>
        We are a welcoming engineering society that aims to be both beginner friendly and developmental.
      
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>


  <div class="con-faq">
    <h2 class="lbl-faq-title">FAQ</h2>

    <h3>How do I join HumanEd?</h3>
    <p>
      If you would like to join HumanEd, you should start by simply showing up to one of our meetings.
      <br><br>
      From there, we will show you around all the teams and what we do.
      <br><br>
      If you then decide you want to stay with HumanEd, you can purchase a membership for £2 from our EUSA store, which you can find from the button on the header (top right) that says "Membership".
    </p>

    <hr>

    <h3>When and where are the weekly meetings?</h3>
    <p>
      We have two meeting rooms both in the lower ground of 40 George Square on the main campus; LG.07 and LG.09. 
      <br><br>
      We have meetings every week on Wednesday from 18:00 to 20:00. 
      <br><br>
      For the first meeting you attend, you should go to LG.07.
    </p>

    <hr>

    <h3>What are the different kinds of teams?</h3>
    <p>
      We have recently incorporated new team structures so that we can better accommodate varying member skill levels and efficiently increase our output for ambitious projects. These teams are split into Beginner, Intermediate, and Advanced tiers.
      <br><br>
      • A <strong>Beginner Team</strong> is fully open to all, focusing on teaching fundamental hardware and software skills through projects like the Developed Projects Team and Software Team.
      <br><br>
      • An <strong>Intermediate Team</strong> is open to all members with some prior experience in areas like CAD or electronics recommended.
      <br><br>
      • An <strong>Advanced Team</strong> requires strong proficiency and active commitment for complex projects. 
      Entry to these teams is selection-based through an application process, you can sign up via the <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=sAafLmkWiUWHiRCgaTTcYcqCT0bs7MREouu3SPUuamBURERSQ0dYNkJRUjNCWVQxR1hMSk1aUFNTUS4u">form</a>.
      <br><br>
      If you want to find our more about our teams, please visit the <a href="/teams">teams</a> page!
    </p>

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

  .img-photo {
    width: 50%;

    border-radius: 8px;
  }

  .con-about-text {
    width: 50%;
  }
  .con-about-text h2 {
    font-size: 48px;
    text-align: right;
    margin: 0;
  }
  .con-about-text p {
    font-size: 18px;
    text-align: justify;
  }

  .con-faq {
    padding: 64px;
    padding-left: 256px;
    padding-right: 256px;

    text-align: left;

    background-color: var(--pal-gray);
  }
  .con-faq h2 {
    font-size: 48px;
    text-align: center;
    margin: 0;
  }
  .con-faq h3 {
    font-size: 32px;
  }
  .con-faq p {
    font-size: 18px;
    text-align: justify;
  }


</style>
