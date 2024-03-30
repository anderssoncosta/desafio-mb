
const postData = async (form) => {

  try {
    const response = await fetch('http://localhost:3000/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)

    })
    return response.json()

  } catch (error) {
    console.error(error)
  }
}
const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/registration')
    return response.json()

  } catch (error) {
    console.error(error)
  }
}

export { postData, getData }