class Figure{
    get area() {
        return this.calcArea();
      }

    calcArea() {
        return ('Невозможно рассчитать площадь')
    }
}

class triangle extends Figure {
    constructor(katetFirst, katetSecond, gipotenuza) {
        super();
        this.gipotenuza = gipotenuza;
        this.katetSecond = katetSecond;
        this.katetFirst = katetFirst;
    }

    #gipotenuza;

    #katetFirst;

    #katetSecond;

    calcArea(katetFirst, katetSecond, gipotenuza) {
        let p = (katetFirst + katetSecond + gipotenuza)/2;
        return Math.sqrt(p*(p-katetFirst)*(p-katetSecond)*(p-gipotenuza));
    }
}

class rectangle extends Figure{
    constructor(height, weight) {
        super();
        this.weight = weight;
        this.height = height;
    }
    #height;
    #weight;

    calcArea(height, weight) {
        return height * weight;
    }
}

class circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    #radius;

    calcArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
}

function generateFigure() {
    let vertices = [];
    let generated = getRandomInt(0, 4);
    let i = 0;
    for (;i < 20;) {
        if (generated !== 1 && generated !== 2) {
            switch (generated){
                case 0:
                    let circleFigure = new circle(getRandomInt(1, 25));
                    circleFigure.
                    vertices.push(circleFigure);
                    break;
                case 3:
                    let triangleFigure = new triangle(getRandomInt(1, 25), getRandomInt(1, 25), getRandomInt(1, 25));
                    vertices.push(triangleFigure);
                    break;
                case 4:
                    let rectangleFigure = new rectangle(getRandomInt(1, 25), getRandomInt(1, 25));
                    vertices.push(rectangleFigure);
                    break;
                default:
                    break;
            }
            i++
        }
        generated = getRandomInt(0, 4);
    }

    return vertices;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



console.log(generateFigure());

