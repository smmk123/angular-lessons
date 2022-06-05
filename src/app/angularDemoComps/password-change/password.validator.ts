import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
    static cannotContainSpace(control:AbstractControl): ValidationErrors | null{
        if ((control.value as string).indexOf(' ')>=0)
            return{cannotContainSpace: true};
        return null;
    }
    //Async Validator function 
    static shouldBeUnique(control:AbstractControl): Promise <ValidationErrors | null>{
        //reject should return an error
        return new Promise((resolve,reject)=>{
            //just to simulate call to server
            setTimeout(()=>{
                if(control.value ==="1234"){
                    console.log('data processing');
                    //resolve() instead of return
                    resolve({shouldBeUnique:true});
                }
                else resolve(null);
                },2000);
        });
    }

    static passwordsShouldMatch(control:AbstractControl){
        let newPassword=control.get('newPassword');
        let repeatPassword=control.get('repeatPassword');
        if(newPassword?.value !== repeatPassword?.value){
            return{passwordsShouldMatch : true};
        }
        return null;
    }
}