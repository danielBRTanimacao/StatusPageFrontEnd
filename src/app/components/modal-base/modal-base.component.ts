import { Component, EventEmitter, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { dataEntity, submitData } from '../../../service/uptimeService';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal-base',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './modal-base.component.html',
    styleUrl: './modal-base.component.css',
})
export class ModalBaseComponent {
    isOpen = false;

    @Output() saved = new EventEmitter<void>();

    formData = new FormGroup({
        name: new FormControl('', {
            nonNullable: true,
            validators: Validators.required,
        }),
        url: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.pattern('https?://.+'),
            ],
        }),
    });

    toggleModal() {
        this.isOpen = !this.isOpen;
    }

    async submitData() {
        if (this.formData.valid) {
            const payload: dataEntity = {
                name: this.formData.value.name ?? '',
                url: this.formData.value.url ?? '',
            };

            await submitData(payload);
            this.saved.emit();
            this.formData.reset();
            this.toggleModal();
        }
    }
}
