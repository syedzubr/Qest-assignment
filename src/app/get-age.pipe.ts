import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: string | Date, ...args: unknown[]): unknown {
    if(!value) return null;
  
    const dob = new Date(value);
    const now = new Date();

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} yrs ${months} mns`;
  }

}
