

const Delete = (url) => {
    fetch(url, {
        method: "DELETE"
    })
    .then(() => console.group("Item Deleted!!!"))
    .catch(err => console.log(err))
}

export default Delete