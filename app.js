const input = document.getElementById("input")
const output = document.getElementById("output")

function capital() {
    if (input.value == '') {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = 'PLEASE ENTER THE PROMPT👊👊👊'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement("paragraph")
        para.innerHTML = input.value
        para.classList.add('capital')
        output.appendChild(para)
    }
}


function lower() {
    if (input.value == '') {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = 'PLEASE ENTER THE PROMPT👊👊👊'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement("paragraph")
        para.innerHTML = input.value
        para.classList.add('lower')
        output.appendChild(para)
    }
}

function first() {
    if (input.value == '') {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = 'PLEASE ENTER THE PROMPT👊👊👊'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement("paragraph")
        para.innerHTML = input.value
        para.classList.add('first')
        output.appendChild(para)
    }
}

function bold() {
    if (input.value == '') {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = 'PLEASE ENTER THE PROMPT👊👊👊'
        output.appendChild(para)
    }
    else {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = input.value
        para.classList.add('bold')
        output.appendChild(para)
    }
}

function italic() {
    if (input.value == '') {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = 'PLEASE ENTER THE PROMPT👊👊👊'
        output.appendChild(para)
    }
    else {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = input.value
        para.classList.add('italic')
        output.appendChild(para)
    }
}

function underline() {
    if (input.value == '') {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = 'PLEASE ENTER THE PROMPT👊👊👊'
        output.appendChild(para)
    }
    else {
        output.innerHTML = ''
        let para = document.createElement("paragraph")
        para.innerHTML = input.value
        para.classList.add('underline')
        output.appendChild(para)
    }
}
