async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Error fetching data: " + err);
  }
}

async function populateData() {
  const jsonData = await fetchData();
  let total = 0;

  jsonData.forEach((item) => {
    const elementId = item.category.toLowerCase();

    const itemElement = document.getElementById(elementId); //trget selects the whole parent block
    const marksElement = itemElement.querySelector("#marks"); // target selects the mark value field of each element

    total += Math.floor((item.score / 400) * 100);

    marksElement.textContent = `${item.score}`;
  });

  const totalDisplay = document.getElementById('total');
  totalDisplay.textContent = total;
}

populateData().catch((error) => console.error(error));
