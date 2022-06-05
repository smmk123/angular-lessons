import { Pipe, PipeTransform } from '@angular/core';

//add this custom pipe to app.modules
@Pipe({
    name:'TitleCasePipe'
})

export class TitleCasePipe implements PipeTransform{
    transform(value: string, args?: any[]) {
       //check if string is empty
        if(!value)
            return null;
        // //basic implimentation
        // let prepositions =[
        //     'of','the'
        // ]
        // let words = value.split(" ");
        // for(var i=0;i < words.length; i++){
        //     if (i>0 && prepositions.includes(words[i].toLowerCase()))
        //         words[i] =words[i].toLowerCase();
        //     else{
        //         words[i]=words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
        //     }
        // }
        //better implimentation
        let words = value.split(" ");
        for(var i=0;i < words.length; i++){
            let word =words[i]
            if (i>0 && this.isPreposition(words[i]))
                words[i] =word.toLowerCase();
            else
                words[i]= this.toTitleCase(word);
        }
        
    return words.join(' ');
    }

    private isPreposition(word:string): boolean{
        let prepositions =[
            'of','the'
        ]
        return prepositions.includes(word.toLowerCase());
    }

    private toTitleCase(word:string):string{
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

}