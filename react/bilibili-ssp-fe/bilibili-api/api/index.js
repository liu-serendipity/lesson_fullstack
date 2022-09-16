const fetch = require('node-fetch')

const URL_RANKING = 'https://api.bilibili.com/x/web-interface/ranking?rid={rid}&day=3'

const fetchRankingById = (rId) => {
    return fetch(URL_RANKING.replace("{rid}", rId))
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchRankingById
}