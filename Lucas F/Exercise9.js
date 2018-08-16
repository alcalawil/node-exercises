var http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
let page1 = ''
let page2 = '' 
let page3 = '' 
let counter = 0

http.get(url1, function (response) {
    response.setEncoding('utf8')
    response.on('data', (data) => {page1 += data})
    response.on('end', () => {
        counter++
        if (counter == 3) {
            showData()
        }
    })
})


http.get(url2, function (response) {
    response.setEncoding('utf8')
    response.on("data", (data) => {page2 += data})

    response.on("end", () => {
        counter++
        if (counter == 3) {
            showData()
        }
    })
})

http.get(url3, function (response) {
    response.setEncoding('utf8')
    response.on("data", (data) => {page3 += data})
    response.on("end", () => {
        counter++
        if (counter == 3) {
            showData()
        }
    })
})

function showData() {
    console.log(page1)
    console.log(page2)
    console.log(page3)
}