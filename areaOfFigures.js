class Figure{
    calcArea() {
        return ('Невозможно рассчитать площадь')
    }
}

class triangle extends Figure {
    constructor(katetFirst, katetSecond, gipotenuza, vertices) {
        super();
        this.gipotenuza = gipotenuza;
        this.katetSecond = katetSecond;
        this.katetFirst = katetFirst;
        this.vertices = vertices;
    }

    calcArea(katetFirst, katetSecond, gipotenuza) {
        let p = (katetFirsts + katetSecond + gipotenuza)/2;
        return Math.sqrt(p*(p-katetFirst)*(p-katetSecond)*(p-gipotenuza));
    }
    whoami(vertices) {
        return {
            id: Math.random(1,1000),
            vertices: vertices,
            class: 'triangle',
        }
    }
}

class rectangle extends Figure{
    constructor(height, weight, vertices) {
        super();
        this.weight = weight;
        this.height = height;
        this.vertices = vertices;
    }

    calcArea(height, weight) {
        return height * weight;
    }
    whoami(vertices) {
        return {
            id: Math.random(1,1000),
            vertices: vertices,
            class: 'rectangle',
        }
    }
}

class circle extends Figure {
    constructor(radius, vertices) {
        super();
        this.vertices = vertices
        this.radius = radius;
    }

    calcArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
    whoami(vertices) {
        return {
            id: Math.random(1,1000),
            vertices: vertices,
            class: 'circle',
        }
    }
}

function generateFigure(figureCount) {
    let figures = [];
    let generated = getRandomInt(0, 4);
    let i = 0;
    for (;i < figureCount;) {
        if (generated !== 1 && generated !== 2) {
            switch (generated){
                case 0:
                    let circleFigure = new circle(getRandomInt(1, 25), generated);
                    figures.push(circleFigure);
                    break;
                case 3:
                    let triangleFigure = new triangle(getRandomInt(1, 25), getRandomInt(1, 25), getRandomInt(1, 25), generated);
                    figures.push(triangleFigure);
                    break;
                case 4:
                    let rectangleFigure = new rectangle(getRandomInt(1, 25), getRandomInt(1, 25), generated);
                    figures.push(rectangleFigure);
                    break;
                default:
                    break;
            }
            i++
        }
        generated = getRandomInt(0, 4);
    }

    return figures;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function whoami(fig) {
    if (fig) {
        return fig.whoami(fig.vertices)
    }
}

let figures = generateFigure(20);
let whoamiFig;
for (fig of figures) {
    whoamiFig = whoami(fig);
    console.log (whoamiFig)
}
console.log(figures);
console.log(generateFigure(20));

