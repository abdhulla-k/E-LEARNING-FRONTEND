import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";
import { ControllerService } from "src/app/controller.service";

@Directive({
    selector: '[appPasswordBorderColor]'
})
export class PasswordValidatingDirective {
    @Input() clickStatus = false;
    specialCharctors = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    passwordStrength = 0; // to track the strength of password
    enteredPassword = '';
    sixCharactor = false;
    specialCharactor = false;
    capitalLetter = false;
    number = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2, private controllerService: ControllerService) {
    }

    @HostListener('input') changeAppearence() {
        this.enteredPassword = this.elementRef.nativeElement.value;

        // increase the strength if the length of password get greater than or equalto 6
        if (this.enteredPassword.length > 6 && this.sixCharactor !== true) {
            this.sixCharactor = true;
            this.passwordStrength++;

            // also decrease if the password become smaller than 6 charactor
        } else if (this.enteredPassword.length <= 6 && this.sixCharactor === true) {
            this.sixCharactor = false;
            this.passwordStrength--;
        }

        // increase the strength if the password has a special value
        if (this.specialCharctors.test(this.enteredPassword) && this.specialCharactor !== true) {
            this.specialCharactor = true;
            this.passwordStrength++;

            // also decrease if user delete the entered special charactor
        } else if (!this.specialCharctors.test(this.enteredPassword) && this.specialCharactor === true) {
            this.specialCharactor = false;
            this.passwordStrength--;
        }

        // increase the strength if the password has a Capital Letter 
        if (this.enteredPassword?.match(/[A-Z]/) !== null && this.capitalLetter !== true) {
            this.capitalLetter = true;
            this.passwordStrength++;

            // also decrease if user delete the entered capital Letter
        } else if (this.enteredPassword?.match(/[A-Z]/) === null && this.capitalLetter === true) {
            this.capitalLetter = false;
            this.passwordStrength--;
        }

        // increase the strength if the password has a Number 
        if (/[0-9]/.test(this.enteredPassword) && this.number !== true) {
            this.number = true;
            this.passwordStrength++;

            // also decrease if user delete the entered number
        } else if (!/[0-9]/.test(this.enteredPassword) && this.number === true) {
            this.number = false;
            this.passwordStrength--;
        }

        // change password strength
        this.controllerService.loginPasswordStrength.emit(this.passwordStrength);

        switch(this.passwordStrength) {
            case 0:
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid red');
                break;
            case 1:
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid yellow');
                break;
            case 2:
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid orange');
                break;
            case 3:
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid blue');
                break;
            case 4:
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid green');
                break;
        }
    }
}