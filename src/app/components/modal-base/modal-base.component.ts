import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { submitData } from '../../../service/uptimeService';

@Component({
    selector: 'app-modal-base',
    imports: [ReactiveFormsModule],
    templateUrl: './modal-base.component.html',
    styleUrl: './modal-base.component.css',
})
export class ModalBaseComponent {
    formData = new FormGroup({
        name: new FormControl(''),
        url: new FormControl(''),
    });

    submitData() {
        this.formData.value.name ?? '', this.formData.value.url ?? '';
    }
}
