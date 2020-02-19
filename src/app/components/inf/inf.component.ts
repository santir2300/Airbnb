import { Component, OnInit } from '@angular/core';
import { options } from '../../perfiles.components';
import { O_TRUNC } from 'constants';

@Component({
  selector: 'app-inf',
  templateUrl: './inf.component.html',
  styleUrls: ['./inf.component.css']
})
export class InfComponent implements OnInit {

  apartamentos;
  card;

  constructor() { }

  ngOnInit() {

    this.apartamentos = options;
    this.card = this.apartamentos ;


  }

}
