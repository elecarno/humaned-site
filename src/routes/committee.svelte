<script>
  import Member from "../lib/member.svelte"

  function redirect(link) {
    window.location.href = link
  }

  let com_21_22 = []

  let com_22_23 = []

  let com_23_24 = []

  let com_24_25 = []

  let com_25_26 = []

  let com_26_27 = [
    {
      "name": "Rupert Guiness",
      "role": "President",
      "prog": "BEng Electronics & Electrical Engineering",
      "img": "2026-2027/rupert_guinness.png"
    },
    {
      "name": "Neema Fanaie",
      "role": "Vice President",
      "prog": "MEng Electrical & Mechanical Engineering" ,
      "img": "2026-2027/neema_fanaie.jpeg"
    },
    {
      "name": "Andrew Fiske",
      "role": "Treasurer",
      "prog": "BEng Mechanical Engineering" ,
      "img": "2026-2027/andrew_fiske.jpg"
    },
    {
      "name": "Benjamin McEwan",
      "role": "Director of Marketing & Sponsorship",
      "prog": "MEng Mechanical Engineering" ,
      "img": "2026-2027/benjamin_mcewan.png"
    },
    {
      "name": "Alan Gray",
      "role": "Director of Hardware Teams",
      "prog": "MEng Electrical & Mechanical Engineering" ,
      "img": "2026-2027/alan_gray.jpeg"
    },
    {
      "name": "Carl Kaziboni",
      "role": "Director of Software Teams",
      "prog": "BSc AI & Computer Science" ,
      "img": "2026-2027/carl_kaziboni.jpeg"
    },
    {
      "name": "Laura Buxel",
      "role": "Director of Humanoid Robot Teams",
      "prog": "MEng Mechanical Engineering" ,
      "img": "2026-2027/laura_buxel.jpeg"
    },
    {
      "name": "Brodie Gordon-Gibson",
      "role": "Tech. Dir. Biomimetic Hand / Prosphetics",
      "prog": "BEng Mechanical Engineering" ,
      "img": "2026-2027/brodie_gordon-gibson.jpg"
    },
    {
      "name": "Viter Kondriianenko",
      "role": "Tech. Dir. Bipedal Motion & Tech. Dir. Robotic Arms",
      "prog": "BEng Electrical & Mechanical Engineering" ,
      "img": "2026-2027/viter_kondriianenko.jpg"
    },
    {
      "name": "Teymur Babayev",
      "role": "Tech. Dir. Computer Vision",
      "prog": "BEng Electronics & Electrical Engineering" ,
      "img": "2026-2027/teymur_babayev.jpg"
    },
    {
      "name": "Alex Arutiunian",
      "role": "Tech. Dir. Developed Projects",
      "prog": "BEng Electrical & Mechanical Engineering" ,
      "img": "not_found.png"
    },
    {
      "name": "Ryan Lam",
      "role": "Tech. Dir. Software",
      "prog": "BEng Software Engineering" ,
      "img": "2026-2027/ryan_lam.png"
    },
    {
      "name": "Finn Grennan",
      "role": "Tech. Dir. Exoskeleton",
      "prog": "MEng Mechanical Engineering" ,
      "img": "2026-2027/finn_grennan.png"
    },
    {
      "name": "Fanhua Huang",
      "role": "Tech. Dir. Reinforcement Learning",
      "prog": "BSc Computer Science" ,
      "img": "2026-2027/fanhua_huang.jpg"
    }
  ]


  let com_display = com_26_27
  
</script>

<svelte:head>
    <title>HumanEd | Committee</title> 
</svelte:head>

<main>
  <h1>HumanEd Committee</h1>
  
  <div class="con-selector">
    <button on:click={ () => { com_display = com_26_27 } }>26/27</button>
    <button on:click={ () => { com_display = com_25_26 } }>25/26</button>
    <button on:click={ () => { com_display = com_24_25 } }>24/25</button>
    <button on:click={ () => { com_display = com_23_24 } }>23/24</button>
    <button on:click={ () => { com_display = com_21_22 } }>21/22</button>
  </div>

  <div class="con-members">
    {#each com_display as member}
      <Member 
        name={member["name"]}
        role={member["role"]}
        prog={member["prog"]}
        img ={member["img"]}
      />
    {/each}
  </div>
</main>

<style>
  .con-members {
    display: grid;
    grid-template-columns: auto auto;

    padding-top: 64px;
    padding-bottom: 64px;

    gap: 128px;
    row-gap: 32px;
    width: fit-content;
    margin: 0 auto;
  }
</style>
