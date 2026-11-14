let lyrics = "";

for (let bottles = 99; bottles >= 1; bottles--) {

    let currentBottle;

    if (bottles === 1) {
        currentBottle = "bottle";
    } else {
        currentBottle = "bottles";
    }

    let nextNumber = bottles - 1;
    let nextBottles;

    if (nextNumber === 0) {
        nextBottles = "no more bottles";
    } else if (nextNumber === 1) {
        nextBottles = "1 bottle";
    } else {
        nextBottles = nextNumber + " bottles";
    }

    lyrics += bottles + " " + currentBottle +
        " of beer on the wall, " +
        bottles + " " + currentBottle +
        " of beer<br>";

    lyrics += "Take one down and pass it around, " +
        nextBottles +
        " of beer on the wall<br><br>";
}

lyrics += "No more bottles of beer on the wall, " +
    "no more bottles of beer<br>";

lyrics += "Go to the store and buy some more, " +
    "99 bottles of beer on the wall";

document.getElementById("song").innerHTML = lyrics;
