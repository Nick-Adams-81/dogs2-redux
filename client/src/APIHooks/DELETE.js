

const Delete = (url, id) => {
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    .then(() => console.group("Item Deleted!!!"))
    .catch(err => console.log(err))
}

export default Delete