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

var names = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for (let i = 6; i < names.length; i++) {
    console.log(names)}
for (let i = 0; i < names.length; i++) {
    if(names[i][0] === 's' || names[i][0] === 'S'||
        names[i][1] === 's' || names[i][10] === 'S'||
        names[i][2] === 's' ||
        names[i][3] === 's' ||
        names[i][4] === 's' ||
        names[i][5] === 's' ||
        names[i][6] === 's' ||
        names[i][7] === 's' ||
        names[i][8] === 's' ||
        names[i][9] === 's' ||
        names[i][10] === 's'||
        names[i][11] === 's'){
        console.log(`names with letter s - ${names[i]}`)
    }
    else{
        console.log(`other names - ${names[i]}`)
    }
}