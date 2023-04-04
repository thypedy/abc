import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  radioSelecionada:string='';
  op1:string='';
  op2:string='';
  op3:string='';
  op4:string='';
  op5:string='';
  op6:string='';
  op7:string='';
  op8:string='';
  res:string='';

  constructor(
    public alertController: AlertController
  ) {}

  selecionar(){
    if(this.op1 == "sim1"){
      this.res="errado";
    }else{
      if(this.op2 == "sim2"){
        if(this.op3 == "sim3"){
          this.res ="errado";
        }else{
          if(this.op4 == "sim4"){
            this.res="errado";
          }
          else{
            if(this.op5 == "sim5"){
              if(this.op6 == "sim6"){
                this.res="errado"
              }
              else{
                if(this.op7 == "sim7"){
                  this.res="errado";
                }else{
                  if(this.op8 == "sim8"){
                    this.res="errado";
                  }else{
                    this.res="humano"
                  }
                }
              }
            }
          }
        }
      }
    }
    return this.res;
  }

  verificarRadio() {
    this.exibirAlerta();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'O seu animal mentalizado é',
      message: 'abc' + this.selecionar(),
      buttons: ['OK']
    });
    alert.present();
  }

}
