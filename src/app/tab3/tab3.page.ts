import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController
  ) {}
  async actionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Google',
          handler: () => {
            //this.sendSMS(number);
            // window.location.open('https://google.co.in', '_system', 'location=yes');
            window.open('https://google.co.in', '_system', 'location=yes');
            // return false;
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
  async alert() {
    const alert = await this.alertCtrl.create({
      // header: ,
      message: 'Are you sure to submit all the details?',
      buttons: ['Cancel', 'Submit'],
    });

    await alert.present();
  }
}
