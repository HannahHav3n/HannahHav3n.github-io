//Functions for the main code

function wipe_page(message) {
    document.write(message)
}

function simple_innerhtml_swapper(element, text) {
    document.getElementById(element).innerHTML = text
}

function simple_message_box(message) {
    window.alert(message)
}

function random(element, element2) {
    // Numbers 0 - 10
    var r = Math.floor(Math.random() * 11);
    document.getElementById(element).innerHTML = r

}