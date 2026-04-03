<script>
  import Member from "../lib/member.svelte"

  function redirect(link) {
    window.location.href = link
  }

  let com_21_22 = []

  let com_22_23 = []

  let com_23_24 = []

  let com_24_25 = [
    {
      "name": "Alvar Ehrnrooth",
      "role": "President",
      "prog": "BEng Electrical & Mechanical Engineering",
      "img": "2024-2025/alvar_ehrnrooth.jpg"
    },
    {
      "name": "Michael Gammoh",
      "role": "Vice President / Secretary",
      "prog": "MEng Electrical & Mechanical Engineering",
      "img": "2024-2025/michael_gammoh.jpeg"
    },
    {
      "name": "Emir Ersanli",
      "role": "Treasurer",
      "prog": "BEng Electronics & Computer Science",
      "img": "2024-2025/emir_ersanli.jpg"
    },
    {
      "name": "Nicolas Sam",
      "role": "Dir. Sponsorship & Marketing / S1 Bipedal Motion",
      "prog": "BEng Eletronics & Electrical Engineering",
      "img": "2024-2025/nicolas_sam.jpg"
    },
    {
      "name": "Ethan Cheam",
      "role": "Tech. Dir. Reinforcement Learning",
      "prog": "BSc AI & Computer Science",
      "img": "2024-2025/ethan_cheam.jpg"
    },
    {
      "name": "Pawel Hoffmann",
      "role": "Tech. Dir. Biomimetic Hand",
      "prog": "MEng Mechanical Engineering",
      "img": "2024-2025/pawel_hoffmann.jpg"
    },
    {
      "name": "Shehan Medagedara",
      "role": "Tech. Dir. Exoskeleton",
      "prog": "MEng Mechanical Engineering",
      "img": "2024-2025/shehan_medagedara.jpg"
    },
    {
      "name": "Cailean Johnson",
      "role": "Tech. Dir. Developed Projects",
      "prog": "MEng Mechanical Engineering",
      "img": "2024-2025/cailean_johnson.png"
    },
    {
      "name": "Milena Zhang",
      "role": "S1 Tech. Dir. Software",
      "prog": "BEng Electronics & Computer Science",
      "img": "not_found.png"
    },
    {
      "name": "Arjav Poudel",
      "role": "Tech. Dir. Computer Vision",
      "prog": "BSc Artificial Intelligence",
      "img": "2024-2025/arjav_poudel.jpeg"
    },
    {
      "name": "Joe Huang",
      "role": "Tech. Dir. Bipedal Motion",
      "prog": "MEng Electrical & Mechanical Engineering",
      "img": "2024-2025/joe_huang.jpg"
    }
  ]

  let com_25_26 = [
    {
      "name": "Alvar Ehrnrooth",
      "role": "President",
      "prog": "BEng Electrical & Mechanical Engineering",
      "img": "2025-2026/alvar_ehrnrooth.jpg"
    },
    {
      "name": "Michael Gammoh",
      "role": "Vice President",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "2025-2026/michael_gammoh.jpeg"
    },
    {
      "name": "Neema Fanaie",
      "role": "Teasurer",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "2025-2026/neema_fanaie.jpeg"
    },
    {
      "name": "Ed Platt",
      "role": "Director of Marketing",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "2025-2026/ed_platt.jpeg"
    },
    {
      "name": "Roan Hoey",
      "role": "Director of Sponsorship",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "2025-2026/roan_hoey.jpeg"
    },
    {
      "name": "Alan Gray",
      "role": "Director of Hardware Teams",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "2025-2026/alan_gray.jpeg"
    },
    {
      "name": "Arjav Poudel",
      "role": "Director of Software Teams",
      "prog": "BSc Artificial Intelligence",
      "img": "2025-2026/arjav_poudel.jpeg"
    },
    {
      "name": "Shehan Medagedara",
      "role": "Director of Humanoid Robot Teams",
      "prog": "MEng Mechancial Engineering",
      "img": "2025-2026/shehan_medagedara.jpg"
    },
    {
      "name": "Finn Grennan",
      "role": "Tech. Dir. Exoskeleton",
      "prog": "MEng Mechancial Engineering",
      "img": "2025-2026/finn_grennan.png"
    },
    {
      "name": "Anil Artan",
      "role": "Tech. Dir. Biomimetic Hand",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "2025-2026/anil_artan.jpeg"
    },
    {
      "name": "Pamisha Singh",
      "role": "Tech. Dir. Robotic Arms",
      "prog": "MEng Electrical & Mechancial Engineering",
      "img": "not_found.png"
    },
    {
      "name": "Laura Buxel",
      "role": "Tech. Dir. Bipedal Motion",
      "prog": "MEng Mechancial Engineering",
      "img": "2025-2026/laura_buxel.jpeg"
    },
    {
      "name": "Rupert Guinness",
      "role": "Tech. Dir. Software",
      "prog": "BEng Eletronics & Electrical Engineering",
      "img": "2025-2026/rupert_guinness.png"
    },
    {
      "name": "Carl Kaziboni",
      "role": "Tech. Dir. Reinforcement Learning",
      "prog": "BSc AI & Computer Science",
      "img": "2025-2026/carl_kaziboni.jpeg"
    },
    {
      "name": "Hwayeon Kang",
      "role": "Tech. Dir. Computer Vision",
      "prog": "BSc Mathematical Physics",
      "img": "2025-2026/hwayeon_kang.jpg"
    },
    {
      "name": "Cailean Johnson",
      "role": "Tech. Dir. Developed Projects",
      "prog": "MEng Mechancial Engineering",
      "img": "2025-2026/cailean_johnson.png"
    }

  ]

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
    <button on:click={ () => { com_display = com_22_23 } }>22/23</button>
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
