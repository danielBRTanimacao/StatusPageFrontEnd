import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { getData, uptimeEntity } from '../service/uptimeService';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    data: uptimeEntity[] = [];

    async ngOnInit() {
        this.data = await getData();
    }
    title = 'Monitoramento de Endpoints';
}
