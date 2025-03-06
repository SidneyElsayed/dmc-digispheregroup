// Experiences
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

// Itineraries
const filterButton = document.querySelectorAll('.filterButton')
const filterItinerary = document.querySelectorAll('.filterItinerary')

console.log(filterButton,filterItinerary)


function filter() {
  console.log(this.dataset.filterValue);

  filterButton.forEach( button => {
  button.classList.remove('active')
  })

  this.classList.add('active')

  filterItinerary .forEach (itinerary => {
    console.log(itinerary)

    if (itinerary.classList.contains(this.dataset.filterValue))  {
      itinerary.classList.remove('hidden')
    } else {
      itinerary.classList.add('hidden')
    }

  })
  
}


filterButton.forEach( button => {
  button.addEventListener('click', filter)
  
}

)

// 