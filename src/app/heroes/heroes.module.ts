import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from "./heroe/heroe.component";

@NgModule ({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [ //aquí van los módulos unicamente
      CommonModule
    ]

})
export class HeroesModule {}