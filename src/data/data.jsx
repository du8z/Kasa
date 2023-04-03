
const fetchData = async () => {
    await fetch('./data.json')
    .then(res => res.json()).then(console.log)
}
