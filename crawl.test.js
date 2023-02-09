const { normalizeURL,geturlsfromhtml } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip trailing slash', () => {
    const input = "https://bootdev.com/path/"
    const actual = normalizeURL(input)
    const expected = "bootdev.com/path"

    expect(actual).toEqual(expected)
})

test('normalizeURL strip capitals', () => {
    const input = "https://bootdev.com/path/"
    const actual = normalizeURL(input)
    const expected = "bootdev.com/path"

    expect(actual).toEqual(expected)
})

test('geturlsfromhtml', () => {
    const html =`
    <html>
    <body>
    <a href="https://blog.boot.dev">
      
        Boot.dev blog 
    
    </a>
    
    </body>
    
    
    </html>
    `
    const url= "https://blog.boot.dev"
    const actual = geturlsfromhtml(html,url)
    const expected = ["https://blog.boot.dev/"]
    console.log(actual)
    console.log(expected)
    expect(actual).toEqual(expected)
})