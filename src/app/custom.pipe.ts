import { Pipe, PipeTransform } from '@angular/core';

//add this custom pipe to app.modules
@Pipe({
    name:'customPipe'
})

export class CustomPipe implements PipeTransform{
    transform(value: string, args?: any[]) {
       //check if string is empty
        if(!value)
            return null;
        //otherwise 
        return value.substr(0, 50)+'...';
    }
}