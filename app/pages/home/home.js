import {Page} from 'ionic-angular';
import {NgZone} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    static get parameters(){
        return [NgZone];
    }
    
    constructor(ngzone) {
        this.zone = ngzone;
        this.image = null;
    }
    
    takepic() {
        var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            quality:100,
            allowEdit: false,
            saveToPhotoAlbum: false
        };
        
        navigator.camera.getPicture((data) => {
            var imgdata = "data:image/jpeg;base64," + data;
            this.zone.run(() => this.image = imgdata);
        }, (error) => {
            alert(error);
        }, options);
    }
}
