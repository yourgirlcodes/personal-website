const getMediumPosts = () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zoecohen01')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data
     })
}

export default getMediumPosts