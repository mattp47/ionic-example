import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  // added by Matt Paice
  isResourceShow = true;
  products: any;
  username = '';

  constructor(private activatedRoute: ActivatedRoute, private data: DataService ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.products = this.data.products;
  }

  signIn(){
    if (this.username !== '') {
      console.log('The usernaem is: ', this.username);
    }
  }

}
