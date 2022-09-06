let target = Math.floor(Math.random() * 21) + 1;

let player = Math.floor(Math.random() * 21) + 1;

let lucky = Math.floor(Math.random() * 21) + 1;

let unlucky = Math.floor(Math.random() * 21) + 1;

let wallet = player * 20;

console.log("Target score:", target);

console.log("Player score:", player);

console.log("Lucky score:", lucky);

console.log("Unlucky score:", unlucky);

console.log("Player initial wallet:", wallet);

if (lucky != unlucky && player == lucky) {

    console.log("Player wins: matches lucky score.");

    wallet += (lucky + player) * 10;
} else if (lucky != unlucky && player == unlucky) {

    console.log("Player loses: matches unlucky score.");

    wallet = 0;
} else {

    console.log("Player loses: misses target by " + (target - player));

    wallet = Math.max(0, wallet - (target - player) * 10);

}



if (lucky != unlucky && player == lucky) {

    console.log("Player wins: matches lucky score.");

} else if (lucky != unlucky && player == unlucky) {

    console.log("Player loses: matches unlucky score.");

} else if (player == target) {

    console.log("Player wins: ties target " + target);

} else if (player > target) {

    console.log("Player wins: beats target by " + (player - target));

} else if (player >= target) {

    console.log("Player wins: beats target by " + (player - target));

} else {

    console.log("Player loses: misses target by " + (target - player));

}

console.log("Player wallet final:" + wallet);