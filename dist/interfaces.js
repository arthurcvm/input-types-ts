"use strict";
var tlou = {
    id: 123,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Siimilar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou.title);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The Las of US - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
