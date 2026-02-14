// All obstacles

import { Obstacle } from "./objects.js";

export class Spikes extends Obstacle {
   
    constructor(x, y, name, gameCtx) {
        super(x, y, name, gameCtx)
        this.width = 32
        this.height = 32
    }

    // If the player is within the obstacle's rectangle
    is_touching_player(player) {
        var points = [
            {x: player.x + player.width / 2, y: player.y + player.height / 2},
            {x: player.x + player.width / 2, y: player.y - player.height / 2},
            {x: player.x - player.width / 2, y: player.y + player.height / 2},
            {x: player.x - player.width / 2, y: player.y - player.height / 2},
        ]

        for (var i = 0; i < points.length; i++) {
            if (this.rect_has_point(this.x, this.y, this.width, this.height, points[i])) {
                return true
            }
        }

        return false
    }

    draw(deltaTime, time) {

        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }

}