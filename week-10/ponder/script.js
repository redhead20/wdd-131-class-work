const hikes = [
{
  name: "Coffee Pot Rapids",
  distance: 3,
  difficulty: 2,
  description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
  tags: ["river","water","rapids"]
},
{
  name: "R Mountain",
  distance: 2,
  difficulty: 2,
  description: "Short hike with a great sunrise view.",
  tags: ["sunrise","view"]
},
{
  name: "Table Rock",
  distance: 3.7,
  difficulty: 3,
  description: "Popular hike overlooking the valley.",
  tags: ["view","popular"]
}
];

function displayHikes(list) {

  const results = document.querySelector("#results");
  results.innerHTML = "";

  list.forEach(hike => {

    const div = document.createElement("div");

    div.innerHTML = `
      <h2>${hike.name}</h2>
      <p>${hike.description}</p>
      <p>Distance: ${hike.distance} miles</p>
      <p>Difficulty: ${boots(hike.difficulty)}</p>
    `;

    results.appendChild(div);

  });

}

function boots(level) {

  let output = "";

  for(let i=0;i<level;i++){
    output += "🥾";
  }

  for(let i=level;i<5;i++){
    output += "▫️";
  }

  return output;

}

function searchHikes() {

  const search = document
    .querySelector("#search")
    .value
    .toLowerCase();

  let filtered = hikes.filter(hike =>

    hike.name.toLowerCase().includes(search) ||
    hike.description.toLowerCase().includes(search) ||
    hike.tags.join(" ").toLowerCase().includes(search)

  );

  filtered.sort((a,b) => a.distance - b.distance);

  displayHikes(filtered);

}

function randomHike() {

  const randomIndex = Math.floor(Math.random()*hikes.length);

  displayHikes([hikes[randomIndex]]);

}

randomHike();