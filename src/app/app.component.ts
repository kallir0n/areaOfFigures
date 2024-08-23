import { Component } from '@angular/core';
import { Circle, Rectangle, Triangle, IFigure } from './classes/Figures.Class';
import toInteger from 'lodash/toInteger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'areaOfFigures';
  public generatedFigures: IFigure[] = [];

  public generateFigures(figureCount: number): void {
    const figures: IFigure[] = [];
    let i = 0;
    for (; i < figureCount;) {
      const figureType = this.getRandomInt(0, 2);

      switch (figureType) {
        case 0:
          const circleFigure = new Circle(this.getRandomInt(1, 25));
          figures.push(circleFigure);
          break;
        case 1:
          const triangleFigure = new Triangle(
              this.getRandomInt(1, 25),
              this.getRandomInt(1, 25),
              this.getRandomInt(1, 25)
          );

          figures.push(triangleFigure);

          break;
        case 2:
          const rectangleFigure = new Rectangle(this.getRandomInt(1, 25), this.getRandomInt(1, 25));
          figures.push(rectangleFigure);
          break;
        default:
          break;
      }
      i++;
    }

    this.generatedFigures = figures;
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getArea(figure: IFigure): string {
    try {
      return figure.calcArea().toString();
    } catch (e) {
      return e.message;
    }
  }

  public getWhoAmI(figure: IFigure): any {
    return figure.whoAmI();
  }

  public areaSum() {
    let sum = 0;
    for (const figure of this.generatedFigures) {
      sum = sum + toInteger(this.getArea(figure));
    }
    return sum;
  }

  public getId(figure: IFigure): number {
    return figure.getId();
  }
}
