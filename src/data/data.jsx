
const fetchData = async () => {
    await fetch('./data.json')
    .then(res => res.json() )
    .then()
    .catch ( err => {
        console.log(err.message);
    })
}

export default fetchData