const box = document.querySelector('.box');
const btn = document.querySelector('#generate');


const iplTeams = [
    {
      teamName: "CSK",
      primaryColor: "#f4d60d",
      secondaryColor: "#1b1f3b"
    },
    {
      teamName: "MI",
      primaryColor: "#045093",
      secondaryColor: "#d1ab3e"
    },
    {
      teamName: "RCB",
      primaryColor: "#da1818",
      secondaryColor: "#000000"
    },
    {
      teamName: "KKR",
      primaryColor: "#3a225d",
      secondaryColor: "#d9b84a"
    },
    {
      teamName: "RR",
      primaryColor: "#ea1a84",
      secondaryColor: "#002b5c"
    },
    {
      teamName: "SRH",
      primaryColor: "#f74902",
      secondaryColor: "#000000"
    },
    {
      teamName: "DC",
      primaryColor: "#17449b",
      secondaryColor: "#c4302b"
    },
    {
      teamName: "LSG",
      primaryColor: "#004e75",
      secondaryColor: "#f26522"
    },
    {
      teamName: "GT",
      primaryColor: "#0c2340",
      secondaryColor: "#a89968"
    },
    {
      teamName: "PBKS",
      primaryColor: "#d71920",
      secondaryColor: "#c5c5c5"
    }
  ];


  btn.addEventListener("click", function(){
    const num = Math.floor(Math.random() * iplTeams.length)
    const winner = iplTeams[num]
    console.log(winner)

    box.innerHTML = winner.teamName
    box.style.backgroundColor = winner.primaryColor
    box.style.color = winner.secondaryColor
  })
  