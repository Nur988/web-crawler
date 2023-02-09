
const {crawlpage} = require('./crawl.js')

function main() {
    if (process.argv < 3) {
        console.log(`no website provided`)
        process.exit(1)
    }
    console.log("start crawling")
    const url=process.argv[2]
    crawlpage(url)
}
main()