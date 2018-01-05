import { Component } from '@angular/core';
import { DataStorageSevice } from '../shared/datastorage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    /* @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    } */

    constructor(private dataStorageService: DataStorageSevice, private authService: AuthService) {

    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }
    
}