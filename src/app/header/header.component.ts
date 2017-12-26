<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, EventEmitter, Output } from '@angular/core';
>>>>>>> 392631671c372045fd555be54d919d72aff00049

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
<<<<<<< HEAD
    
=======
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
>>>>>>> 392631671c372045fd555be54d919d72aff00049
}