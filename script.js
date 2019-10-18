const usersList = document.querySelector('#usersList')
const pager = document.querySelector('#pager')


window.fetch('https://acme-users-api-rev.herokuapp.com/api/users')
  .then(res => res.json())
  .then(data => {
    data.users.forEach((elem) => {
      const createUserParentDiv = document.createElement('div')

      createUserParentDiv.classList.add('user')

      const firstName = document.createElement('div')
      const lastName = document.createElement('div')
      const email = document.createElement('div')
      const title = document.createElement('div')

      firstName.innerHTML = elem.firstName
      lastName.innerHTML = elem.lastName
      email.innerHTML = elem.email
      title.innerHTML = elem.title

      createUserParentDiv.appendChild(firstName)
      createUserParentDiv.appendChild(lastName)
      createUserParentDiv.appendChild(email)
      createUserParentDiv.appendChild(title)
      usersList.appendChild(createUserParentDiv)
    })

    console.log(data.users.length)
  })
