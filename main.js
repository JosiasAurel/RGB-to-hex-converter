

function callElement(el) {
    return document.getElementById(el)
}

// trigger color converion by listening to the submit event
function triggerConversion(event) {

    // Prevent the default browser behaviour onFormSubmit : reload
    event.preventDefault()

    // get the rgb color color elements value
    let red = callElement("red").value
    let green = callElement("green").value
    let blue = callElement("blue").value

    // Get the converted color containers 
    let converted = callElement("converted")


    // Create a span to contain the converted color
    let newSpan = document.createElement("span")

    //create a new h3 tag to contain the RGB values gotten
    let newSpanRGB = document.createElement("h3")

    //create a new h3 tag to contain the converted hex value
    let newSpanHex = document.createElement("h3")

    // Set the inner value of the spanRGB
    newSpanRGB.innerText = `R: ${red} G: ${green} B:${blue}`

    // set the inner value of the spanHex container
    newSpanHex.innerText = `#${RGBToHex(Number(red), Number(green), Number(blue))}`

    // make the span append the spanH3 tags
    newSpan.appendChild(newSpanRGB)
    newSpan.appendChild(newSpanHex)

    // Call the converted value container append the span
    converted.appendChild(newSpan)

}


// create the converter function to convert RGB to Hexadecimale color codes
const RGBToHex = (red, green, blue) => ((red << 16) + (green << 8)+blue).toString(16).padStart(6, "0")

/* console.log(RGBToHex(255, 255, 255)) */

// get the form from the DOM
let form = document.querySelector("form")

// set a submit event listener for the form
form.addEventListener("submit", triggerConversion)