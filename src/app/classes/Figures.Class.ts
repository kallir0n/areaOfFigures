export interface IFigure {
    whoAmI(): string;
    getId(): number;
    calcArea(): number;
}

export class Figure {
    static counter = 0;
    protected id: number;
    protected name: string;
    protected class: string;

    constructor() {
        this.id = ++Figure.counter;
    }

    public whoAmI(): string {
        return this.class;
    }

    public getId(): number {
        return this.id;
    }
}

export class Triangle extends Figure implements IFigure {
    private readonly gipotenuza: number;
    private readonly katetSecond: number;
    private readonly katetFirst: number;
    protected id: number;
    protected class = 'Triangle';

    constructor(katetFirst, katetSecond, gipotenuza) {
        super();
        this.gipotenuza = gipotenuza;
        this.katetSecond = katetSecond;
        this.katetFirst = katetFirst;
    }

    public calcArea(): number {
        const p: number = (this.katetFirst + this.katetSecond + this.gipotenuza) / 2;
        const result: number = Math.sqrt(p * (p - this.katetFirst) * (p - this.katetSecond) * (p - this.gipotenuza));
        if (result) {
            return result;
        }

        throw new Error(' рассчитать невозможно (Проверьте параметры фигуры)');
    }
}

export class Rectangle extends Figure implements IFigure {
    private readonly weight: number;
    private readonly height: number;
    protected class = 'Rectangle';

    constructor(height, weight) {
        super();
        this.weight = weight;
        this.height = height;
    }

    public calcArea(): number {
        return this.height * this.weight;
    }
}

export class Circle extends Figure implements IFigure {
    private readonly radius: number;
    protected class = 'Circle';

    constructor(radius) {
        super();
        this.radius = radius;
    }

    public calcArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
