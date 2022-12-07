import { Pipe, PipeTransform } from '@angular/core';
import { Restoran } from 'src/app/interfaces/restoran';

@Pipe({ name: 'filterByUP', pure: false })
export class FilterByUserPrice implements PipeTransform {
    transform(restorans: Restoran[], cenaStola: any): Restoran[] {
        const resultArray = [];
        if (restorans.length === 0 || cenaStola == '') {
            return restorans;
        }

        for (const item of restorans) {
            if (item.cenaStola <= Number(cenaStola)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
