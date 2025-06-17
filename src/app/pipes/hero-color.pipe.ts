import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class heroColorPipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
