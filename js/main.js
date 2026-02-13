import { Object } from "./classes.js"
import { Player } from "./objects.js"

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const player = new Player(0, 160)

var lastTime = 0
function update(time) {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    var deltaTime = (time - lastTime) / 1000

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, 32)
    ctx.fillRect(0, canvas.height - 32, canvas.width, 32)

    player.update(deltaTime, time)
    player.draw(deltaTime, time)

    lastTime = time

    requestAnimationFrame(update)

}

update(0)