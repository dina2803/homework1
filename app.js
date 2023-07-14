var trafficLight = prompt('trafficLight - enter color:')
if(trafficLight === 'green'){
    alert('Your answer is correct')
} else if(trafficLight === 'yellow' || trafficLight === 'red') {
    alert('try again')
}
else {
    alert("Wrong answer!you need to write one of the colors of the trafficLight(green, yellow or red)")
}
console.log(trafficLight.toLowerCase())
switch (trafficLight) {
    case 'green':
        console.log('you can move')
        break
    case 'yellow':
        console.log('get ready')
        break
    case 'red':
        console.log('stand still')
        break
    default:
        console.log('does not work')
}