import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class ShareDataService{

    sharedName(){
        return this.http.get('')
    }

}