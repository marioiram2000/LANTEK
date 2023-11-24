import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Maquina } from 'src/app/models/maquina';
import { InicioService } from 'src/app/services/inicio-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  maquinas: Maquina[] = [];
  filteredMaquinas: Maquina[] = [];
  displayedColumns: string[] = ['name', 'manufacturer', 'cuttingTechnology'];

  constructor(public inicioService: InicioService) {}

  ngOnInit(): void {
    const maquinas2D$: Observable<Maquina[]> =
      this.inicioService.getMaquinas2D();
    const maquinas3D$: Observable<Maquina[]> =
      this.inicioService.getMaquinas3D();

    forkJoin([maquinas2D$, maquinas3D$])
      .pipe(
        map(([maquinas2D, maquinas3D]) => {
          this.maquinas = maquinas2D.concat(maquinas3D);
          this.filteredMaquinas = this.maquinas;
        })
      )
      .subscribe();
  }

  filter(checked: boolean, technology: number) {
    if (checked) {
      this.filteredMaquinas = this.filteredMaquinas.concat(
        this.maquinas.filter((maquina) => {
          return maquina.technology === technology;
        })
      );
    } else {
      this.filteredMaquinas = this.filteredMaquinas.filter((maquina) => {
        return maquina.technology !== technology;
      });
    }
  }
}
