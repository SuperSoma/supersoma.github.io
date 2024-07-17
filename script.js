const content = [
  {
    title: "Heartseeker",
    description: "Embody the Heartseeker blade in this fast-paced precision clicking platformer. Get to the heart of the Living Dungeon and slay the final heart to save existence.",
    links: [{
      title: "Game Page",
      link: "https://store.steampowered.com/app/1729160/Heartseeker/"
    }]
  },
  {
    title: "Puzzling Manor",
    description: "Short Halloween based puzzle game in which you must push blocks and gather keys to make your escape from the haunted house!",
    links: [{
      title: "Game Page",
      link: "https://vestboymyst.itch.io/puzzling-manor"
    }]
  }, {
    title: "PGStats Stream Slides",
    description: "Informative slides for Super Smash Bros. broadcasts that would show various information such as head to head records and tournament performance",
    links: [{
      title: "Examples",
      link: "/pgstats.html"
    }]
  },
  {
    title: "Sapphire Tears 2D",
    description: `A "demake" of a first person shooter known as Sapphire Tears with the main feature being customizable battlefields.`,
    links: [{
      title: "More Info",
      link: "http://nicholaszonak.com/st2d.html"
    }]
  }, {
    title: "Taboo Melee",
    description: "Web application developed for a drinking game to be used in conjunction with the game Super Smash Bros. Melee.",
    links: [{
      title: "Website",
      link: "/taboo"
    }]
  }, {
    title: "Video Game Event Streaming",
    description: "I've worked on several high profile esports events in the Smash space through Collision Series and Panda having both broadcasted and built tools to help make technical directors more efficient.",
    links: [
      {
        title: "Collision Series Twitch",
        link: "https://www.twitch.tv/collisionseriestv"
      }
    ]
  },
  {
    title: "NJ SSBM Tournament Calendar",
    description: "Website that allows members of the New Jersey Melee community to stay up to date on what events are happening around the state.",
    links: [
      {
        title: "GitHub",
        link: "https://github.com/SuperSoma/njssbm"
      }
    ]
  }, {
    title: "OBF Exporter",
    description: "Exports completed brackets from StartGG or Challonge into the Open Bracket Format.",
    links: [
      {
        title: "Link",
        link: "https://obfexporter.njssbm.com/"
      }
    ]
  }
];

const addContent = () => {
  const grid = document.querySelector(".grid");
  for (let i = 0; i < content.length; i++) {
    let links = "";

    content[i].links.forEach((link) => {
      links += `<a href="${link.link}" target="_blank">${link.title}</a>`;
    })

    const div = `
    <div>
      <div class="card">
        <div class="head">${content[i].title}</div>
        <div class="body">${content[i].description}</div>
        <div class="footer">${links}</div>
      </div>
    </div>
    `;

    grid.innerHTML += div;
  }
}

addEventListener("DOMContentLoaded", (event) => { addContent() });
