const { hostname } = require("os")
const { JSDOM } = require('jsdom')


async function crawlpage(url) {
    const resp = await fetch(url)
    const urls =geturlsfromhtml(await resp.text(),url)
    console.log(urls)
   


}


function normalizeURL(urlString) {
    const urlObject = new URL(urlString)

    const hostname = `${urlObject.hostname}${urlObject.pathname}`
    if (hostname.length > 0 && hostname.slice(-1) === '/') {
        return hostname.slice(0, -1)
    }
    else {
        return hostname
    }
}


function geturlsfromhtml(html, baseurl) {

    const urls = []
    const dom = new JSDOM(html)
    const linkelements = dom.window.document.querySelectorAll('a')
    for (const linkelement of linkelements) {
        console.log(linkelement.href)
        if (linkelement.href.slice(0, 1) === '/') {
            try {
                const urlobject = new URL(`${baseurl}${linkelement.href}`)
                urls.push(urlobject.href)
            } catch (err) {
                console.log(`Error occured ${err.message}`)

            }
        }
        else {
            try {
                const urlobject = new URL(`${linkelement.href}`)
                urls.push(urlobject.href)
            } catch (err) {
                console.log(`Error occured ${err.message}`)

            }
        }
    }
    console.log(urls)
    return urls

}


module.exports = {
    normalizeURL,
    geturlsfromhtml,
    crawlpage

}