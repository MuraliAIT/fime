import { AbstractControl } from "@angular/forms";

export function startWithCapitalLetter(control: AbstractControl){
    if(control.value.charAt(0)===control.value.charAt(0).toUpperCase()){
        return {capValid:true};
    }
    return null;
}