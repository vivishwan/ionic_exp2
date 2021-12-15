import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

// import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    private toastCtrl: ToastController,
    public alertController: AlertController
  ) {}
  async showToast() {
    await this.toastCtrl
      .create({
        message: 'Interest saved',
        position: 'top',
        duration: 890,
        // color: 'secodnary',
      })
      .then((res) => res.present());
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Clear Interests',
      // subHeader: ,
      message: 'Are you sure to clear all your interests?',
      buttons: ['YES', 'Cancel'],
    });

    await alert.present();
  }
}
