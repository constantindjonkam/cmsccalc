// I know my code is not DRY
const distro = [
  { class: ".three", weight: 0.18 },
  { class: ".four", weight: 0.12 },
  { class: ".threequiz", weight: 0.15 },
  { class: ".ten", weight: 0.3 },
  { class: ".final", weight: 0.25 },
];

const calculate = () => {
  let notIncluded = 0.0;

  const sumArr = distro.map((dist) => {
    let inputs = document.querySelectorAll(dist.class + " input");
    let count = 0;

    let sum = Array.from(inputs).reduce((acc, input) => {
      if (input && input.value) {
        count++;
      }
      return acc + Number(input.value);
    }, 0.0);

    let average = (sum / count) * (dist.class === ".threequiz" ? 10.0 / 3 : 1) * dist.weight;

    if (isNaN(average)) {
      average = 0.0;
      notIncluded += dist.weight * 100;
    }

    return average;
  });

  const final = sumArr.reduce((acc, num) => acc + num, 0.0);
  const percent = 100 - notIncluded;
  const res = ((final / percent) * 100).toFixed(2);
  document.querySelector("#grade").textContent = res;
};
