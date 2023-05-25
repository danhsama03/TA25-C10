var breeds = "https://api.thecatapi.com/v1/breeds";

fetch(breeds)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var htmls = data.map(function (data) {
      return `<div>
        <h3> BREEDS </h3>
            <li> Weight: </li> 
                <p>- Imperial: ${data.weight.imperial} </p> 
                <p>- Metric: ${data.weight.metric} </p> 
            <li> Id: ${data.id} </li> 
            <li> Name: ${data.name} </li>
            <li> Cfa_url: ${data.cfa_url} </li>
            <li> Vetstreet_url: ${data.vetstreet_url} </li>
            <li> Vcahospitals_url: ${data.vcahospitals_url} </li>
            <li> Temperament: ${data.temperament} </li>
            <li> Origin: ${data.origin} </li>
            <li> Country_codes: ${data.country_codes} </li>
            <li> Country_code: ${data.country_code} </li>
            <li> Description: ${data.description} </li>
            <li> Life_span: ${data.life_span} </li>
            <li> Indoor: ${data.indoor} </li>
            <li> Lap: ${data.lap} </li>
            <li> Alt_names: ${data.alt_names} </li>
            <li> Adaptability: ${data.adaptability} </li>
            <li> Affection_level: ${data.affection_level} </li>
            <li> Child_friendly: ${data.child_friendly} </li>
            <li> Dog_friendly: ${data.dog_friendly} </li>
            <li> Energy_level: ${data.energy_level} </li>
            <li> Grooming: ${data.grooming} </li>
            <li> Health_issues: ${data.health_issues} </li>
            <li> Intelligence: ${data.intelligence} </li>
            <li> Shedding_level: ${data.shedding_level} </li>
            <li> Social_needs: ${data.social_needs} </li>
            <li> Stranger_friendly: ${data.stranger_friendly} </li>
            <li> Vocalisation: ${data.vocalisation} </li>
            <li> Experimental: ${data.experimental} </li>
            <li> Hairless: ${data.hairless} </li>
            <li> Natural: ${data.natural} </li>
            <li> Rare: ${data.rare} </li>
            <li> Rex: ${data.rex} </li>
            <li> Suppressed_tail: ${data.suppressed_tail} </li>
            <li> Short_legs: ${data.short_legs} </li>
            <li> Wikipedia_url: ${data.wikipedia_url} </li>
            <li> Hypoallergenic: ${data.hypoallergenic} </li>
            <li> Reference_image_id: ${data.reference_image_id} </li>
        </div>`;
    });

    var html = htmls.join("");
    document.getElementById("breeds-list").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
