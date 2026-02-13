// Runs the whole game! Wow!

import { GameContext, Object } from "./classes.js"
import { Player } from "./objects.js"
import { Spikes } from "./obstacles.js"

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var gameContext = new GameContext(50)

var player = new Player(0, 238, "Player")

var all_objects = [player]

var lastTime = 0
function update(time) {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    var deltaTime = (time - lastTime) / 1000

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, 32)
    ctx.fillRect(0, canvas.height - 32, canvas.width, 32)

    /*
    for (let i = 0; i < all_objects.length, i++;) {
        var obj = all_objects[i]
        obj.update(deltaTime, time)
        obj.draw(deltaTime, time)
    }
    */
    player.update(deltaTime, time)
    player.draw(deltaTime, time)

    lastTime = time

    requestAnimationFrame(update)

}

setInterval(function() {

    var side = Math.round(Math.random())
    var y = 40

    if (side <= 0) {
        side = -1
    }

    var obstacle = new Spikes(480, 238, "Spikes", gameContext)
    all_objects.push(obstacle)
}, 2000)
update(0)