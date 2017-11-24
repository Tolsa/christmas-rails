function ClearFields() {

     document.getElementById("textfield").value = "";
}


function addNameToTheList() {
  const form = document.getElementById('form');
  const array = [];

  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const names = document.getElementById('inputnames').value;

    const liste = document.getElementById('liste');
    liste.insertAdjacentHTML('afterend', `<li>${names}</li>`)
    array.push(names);
  });
}

function melangeTheNames() {
  const button = document.getElementById('melange');
  button.addEventListener("click", (event) =>{
    event.preventDefault();

    document.getElementById("create_ul_cadeau").innerHTML = '<ul id="cadeau"></ul>';

    const arr1 = array.slice();
    const arr2 = array.slice();

    arr1.sort(function() { return 0.5 - Math.random();});
    arr2.sort(function() { return 0.5 - Math.random();});

    const cadeau = document.getElementById('cadeau');

    while (arr1.length) {
        const name1 = arr1.pop(),
              name2 = arr2[0] === name1 ? arr2.pop() : arr2.shift();

              if (name1 === name2){
                document.getElementById('cadeau').innerHTML += `<li class="delete">Oups, veuillez remélanger pour cette fois. Il y a eu un doublon.</li>`;
              };

        document.getElementById('cadeau').innerHTML += `<li class="delete">${name1} offre un cadeau à ${name2}</li>`;
    }
  });
}

export { addNameToTheList };
export { melangeTheNames };

// const refresh = document.getElementById('refresh');

// refresh.addEventListener("click", (event) =>{
//  const remove = document.getElementById('cadeau');
//  remove.remove()

// });
