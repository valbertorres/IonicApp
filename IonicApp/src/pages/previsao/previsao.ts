import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebService } from '../../provids/service'
import { AlertController } from 'ionic-angular';
/*
  Generated class for the Previsao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html'
})
export class PrevisaoPage {

    public cidade : string = 'Goiânia' ;
    public title : string;
    public body : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webService : WebService,
   public alertCtrl : AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrevisaoPage');
    this.buscaCity();
  }

  getCity(){
    if(this.cidade.trim()!=''){
        this.buscaCity();
    }else{
      let alert = this.alertCtrl.create({
      title: 'Cidade?',
      subTitle: 'Informe a cidade!',
      buttons: ['OK']
    });
    alert.present();
    }
     
  }

  buscaCity(){
    this.webService.buscaPrevisao(this.cidade)
    .then(data => {
      this.title = "Cidade "+data.name+'-'+data.sys.country;
      this.body = "Temp "+data.main.temp+"°c "+" e "+
      data.weather[0].description+" Umidade "+data.main.humidity+
      '% Temp min '+data.main.temp_min+'°c'+' Temp max '+
      data.main.temp_max+'°c'+' céu com '
      
    });
  }

  limparCampo(){
    if(this.cidade.trim()!=''){
       this.cidade ='';
       console.log("Clicou")
    }
  }

}
