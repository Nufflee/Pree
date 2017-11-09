let depth = 0
let depthLimit = 9
let hue = 0.15

let gui = dat.gui.GUI()
let guiConfig = {
	message: 'hellow werld'
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	gui.add(guiConfig, 'message')
}

function draw() {
	angleMode(DEGREES)
	//rotate(180)
	translate(width / 2, height / 2 + 400)
	fill(56)
	drawTree(0, 0, 200, 0, 0)
}

function drawTree(x1, y1, x2, y2, depth) {
    if (depth >= depthLimit)
        return

    let dx = x2 - x1
    let dy = y1 - y2

    let x3 = x2 - dy
    let y3 = y2 - dx
    let x4 = x1 - dy
    let y4 = y1 - dx
    let x5 = x4 + 0.5 * (dx - dy)
    let y5 = y4 - 0.5 * (dx + dy)

		//translate(x1, y1)
		quad(x1, y1, x2, y2, x3, y3, x4, y4)

    //g.beginPath()
    //g.moveTo(x3, y3)
    //g.lineTo(x4, y4)
    //g.lineTo(x5, y5)
    //g.closePath()

    // g.fillStyle = HSVtoRGB(hue + depth * 0.035, 1, 1)
    // g.fill()
    // g.strokeStyle = "lightGray"
    // g.stroke()

    drawTree(x4, y4, x5, y5, depth + 1)
    drawTree(x5, y5, x3, y3, depth + 1)
}

/* copied from stackoverflow */
// function HSVtoRGB(h, s, v) {
//     let r, g, b, i, f, p, q, t
//
//     i = Math.floor(h * 6)
//     f = h * 6 - i
//     p = v * (1 - s)
//     q = v * (1 - f * s)
//     t = v * (1 - (1 - f) * s)
//     switch (i % 6) {
//         case 0: r = v, g = t, b = p  break
//         case 1: r = q, g = v, b = p  break
//         case 2: r = p, g = v, b = t  break
//         case 3: r = p, g = q, b = v  break
//         case 4: r = t, g = p, b = v  break
//         case 5: r = v, g = p, b = q  break
//     }
//     return "rgb("
//         + Math.round(r * 255) + ","
//         + Math.round(g * 255) + ","
//         + Math.round(b * 255) + ")"
// }
