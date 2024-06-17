import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common"; 

@Component({
    selector: 'form-action',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})

export class FormComponent {
    name: string = '';
    font: string = 'Arial';
    size: number = 16;
    fonts: string[] = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
    alignment: any = { left: false, center: true, right: false };
    textAlign: string = 'center';

    onNameChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.name = inputElement.value.toUpperCase();
    }

    onFontChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.font = selectElement.value;
    }

    onSizeChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.size = +inputElement.value;
    }

    onCheckboxChange(position: string) {
        this.alignment.left = false;
        this.alignment.center = false;
        this.alignment.right = false;
        this.alignment[position] = true;

        if (this.alignment.left) {
            this.textAlign = 'left';
        } else if (this.alignment.center) {
            this.textAlign = 'center';
        } else if (this.alignment.right) {
            this.textAlign = 'right';
        }
    }
}