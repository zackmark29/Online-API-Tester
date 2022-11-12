var url = document.querySelector("input[type=url]")
var method = document.querySelector("select")
var headers = document.querySelectorAll("textarea")[0]
var data = document.querySelectorAll("textarea")[1]
const submit = document.querySelector("button")
const response = document.querySelector(".response")

function request(url, options, callback) {
    fetch(url, options)
        .then(
            c => c.text()
        )
        .then(
            res => {
                callback(res)
            }
        )
}

submit.addEventListener("click", () => {
    let options = {}

    if (method.value == "GET") {
        options.method = "GET"
        if (headers.value)
            options.headers = JSON.parse(headers.value)
    }
    else {
        options.method = method
        if (headers.value)
            options.headers = JSON.parse(headers.value)
        if (data.value)
            options.data = JSON.stringify(JSON.parse(data.value))
    }

    request(url.value, options, (res) => {
        response.textContent = res
    })
})