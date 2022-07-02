function distanceFromHqInBlocks(location) {
    let x = location - 42;
    return Math.abs(x);
}


function distanceFromHqInFeet(location) {
    let x = location - 42;
    return Math.abs(x)*264
}

function distanceTravelledInFeet(start, destination) {
    let x = destination - start;
    return Math.abs(x)*264
}

function calculatesFarePrice(start, destination) {
    let x = destination - start;
    let feet = Math.abs(x)*264
if (feet <= 400) {
    return 0;
}else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * .02;
}else if (feet > 2000 && feet <= 2500) {
    return 25;
}else if (feet > 2500) {
    return "cannot travel that far";
}
}