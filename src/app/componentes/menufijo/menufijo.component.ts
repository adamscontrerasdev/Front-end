import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from "./../../cargar-scripts.service"
@Component({
  selector: 'app-menufijo',
  templateUrl: './menufijo.component.html',
  styleUrls: ['./menufijo.component.css']
})
export class MenufijoComponent implements OnInit {

  constructor(private _cargaScript:CargarScriptsService) {
    _cargaScript.Carga(["menu"]);
  }

  ngOnInit(): void {
  }

}
