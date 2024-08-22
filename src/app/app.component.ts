import { Component } from '@angular/core';
import { Circle, Rectangle, Triangle } from './classes/Figures.Class';
import toInteger from 'lodash/toInteger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'areaOfFigures';
  public generatedFigures = [];

  public calculated = false;

  public generateFigures(figureCount: number): void {
    const figures = [];
    let generatedVertices = this.getRandomInt(0, 4);
    let i = 0;
    for (; i < figureCount;) {
      if (generatedVertices !== 1 && generatedVertices !== 2) {
        switch (generatedVertices) {
          case 0:
            const circleFigure = new Circle(this.getRandomInt(1, 25), generatedVertices, i);
            figures.push(circleFigure);
            break;
          case 3:
            // tslint:disable-next-line:max-line-length
            const triangleFigure = new Triangle(this.getRandomInt(1, 25), this.getRandomInt(1, 25), this.getRandomInt(1, 25), generatedVertices, i);
            figures.push(triangleFigure);
            break;
          case 4:
            const rectangleFigure = new Rectangle(this.getRandomInt(1, 25), this.getRandomInt(1, 25), generatedVertices, i);
            figures.push(rectangleFigure);
            break;
          default:
            break;
        }
        i++;
      }
      generatedVertices = this.getRandomInt(0, 4);
    }

    this.generatedFigures = figures;
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getArea(figure: any): any {
    return figure.calcArea();
  }

  public getWhoami(figure: any): any {
    const figureData = [];
    const fig = figure.whoami();
    for (const elem in fig) {
      if (elem) {
        const ast = elem + ':' + fig[elem] + '\n';
        figureData.push(ast);
      }
    }
    return figureData;
  }

  public areaSum() {
    let sum = 0;
    for (const figure of this.generatedFigures) {
      sum = sum + toInteger(this.getArea(figure));
    }
    return sum;
  }
}
