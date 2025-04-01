const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue("gender");
  const age = getInputNumberValue("age");
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const activityLevel = getSelectedValue("activity_level");

  const basalMetabolism = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
      : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );

  const maintainWeight = Math.round(basalMetabolism * Number(activityLevel));
  const loseWeight = maintainWeight - 450;
  const gainWeight = maintainWeight + 450;

  const resultArea = document.getElementById("result");
  const layout = `
      <h2>Aqui está o resultado:</h2>

      <div class="result-content">
        <ul>
          <li>
            Seu metabolismo basal é de <strong>${basalMetabolism} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média
            <strong>${maintainWeight} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média
            <strong>${loseWeight} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média
            <strong>${gainWeight} calorias</strong>.
          </li>
        </ul>
      </div>
  `;

  resultArea.innerHTML = layout;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}
