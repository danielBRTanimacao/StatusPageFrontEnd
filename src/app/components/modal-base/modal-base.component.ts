import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { dataEntity, submitData } from '../../../service/uptimeService';

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
        if (this.formData.valid) {
            const payload: dataEntity = {
                name: this.formData.value.name ?? '',
                url: this.formData.value.url ?? '',
            };

            submitData(payload);
            this.formData.reset();
        }
    }
}
