const filterButton = document.querySelectorAll('.filterButton')
const filterExperience = document.querySelectorAll('.filterExperience')

console.log(filterButton,filterExperience)


function filter() {
  console.log(this.dataset.filterValue);

  filterButton.forEach( button => {
  button.classList.remove('active')
  })

  this.classList.add('active')

  filterExperience .forEach (experience => {
    console.log(experience)

    if (experience.classList.contains(this.dataset.filterValue))  {
      experience.classList.remove('hidden')
    } else {
      experience.classList.add('hidden')
    }

  })
  
}


filterButton.forEach( button => {
  button.addEventListener('click', filter)
  
}

)