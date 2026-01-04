import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { getData, uptimeEntity } from '../service/uptimeService';
import { ModalBaseComponent } from './components/modal-base/modal-base.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ModalBaseComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    buttonDel = false;
    data: uptimeEntity[] = [];

    async reloadData() {
        this.data = await getData();
    }

    async ngOnInit() {
        this.data = await getData();
    }

    toggleDel() {
        this.buttonDel = !this.buttonDel;
    }
    title = 'Monitoramento de Endpoints';
}
