const http = require("http")
const fs = require("fs")
const products = [
    { name: "banana", price: 12 + "$", img: "https://cdn.pixabay.com/photo/2015/01/27/18/32/bananas-614090_1280.jpg" },
    { name: "strawberry", price: 18 + "$", img: "https://cdn.pixabay.com/photo/2021/09/23/05/30/strawberry-6648685_1280.jpg" },
    { name: "peach", price: 18 + "$", img: "https://cdn.pixabay.com/photo/2017/09/06/15/08/peach-2721852_1280.jpg" }
]
const productsJson = JSON.stringify(products)
const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            fs.readFile("./html/index.html", "utf8", (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write(err)
                }
                else {
                    res.write(data)
                }
                res.end()
            })
            break;
        case "/about":
            fs.readFile("./html/about.html", "utf8", (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write(err)
                }
                else {
                    res.write(data)
                }
                res.end()
            })
            break;
        case "/sales":
            fs.readFile("./html/sales.html", "utf8", (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write(err)
                }
                else {
                    res.write(data)
                }
                res.end()
            })
            break;
        case "/products":
                for (const element of products) {
                    res.write(`
                    <P>${element.name}</P>
                    <P>${element.price}</P>
                    <img src="${element.img}" style="height:200px;width:300px">
                    `)

                }
                res.end()

            break;
            case "/product":
                    res.write(`
                    <P>${products[2].name}</P>
                    <P>${products[2].price}</P>
                    <img src="${products[2].img}" style="height:200px;width:300px">
                    `)
                    res.end()
            break;

        default:
            res.writeHead(404);
            res.write("page not found")
            break;
    }
});
server.listen(2000)


