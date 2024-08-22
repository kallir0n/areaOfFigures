export class Figure {
    protected vertices;
    protected id;
    protected calcArea(): any {
        return ('Невозможно рассчитать площадь');
    }
    protected whoami() {
        const params = {};
        for (const elem in this) {
            if (elem) {
                const nameField: string = elem;
                params[nameField] = this[elem];
            }
        }
        return params;
    }
}

export class Triangle extends Figure {
    private gipotenuza: number;
    private katetSecond: number;
    private katetFirst: number;
    protected vertices: number;
    protected id: number;
    protected class = 'Triangle';
    constructor(katetFirst, katetSecond, gipotenuza, vertices, id) {
        super();
        this.gipotenuza = gipotenuza;
        this.katetSecond = katetSecond;
        this.katetFirst = katetFirst;
        this.vertices = vertices;
        this.id = id;
    }

    protected calcArea() {
        const p: number = (this.katetFirst + this.katetSecond + this.gipotenuza) / 2;
        const result: number = Math.sqrt(p * (p - this.katetFirst) * (p - this.katetSecond) * (p - this.gipotenuza));
        if (result) {
            return result;
        } else {
            return ' рассчитать невозможно (Проверьте параметры фигуры)';
        }
    }
}

export class Rectangle extends Figure {
    private weight: any;
    private height: any;
    protected vertices: any;
    protected class = 'Rectangle';
    protected id;
    constructor(height, weight, vertices, id) {
        super();
        this.weight = weight;
        this.height = height;
        this.vertices = vertices;
        this.id = id;
    }

    protected calcArea() {
        return this.height * this.weight;
    }
}

export class Circle extends Figure {
    private radius: any;
    protected vertices: any;
    protected id;
    protected class = 'Circle';
    constructor(radius, vertices, id) {
        super();
        this.vertices = vertices;
        this.radius = radius;
        this.id = id;
    }

    protected calcArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
