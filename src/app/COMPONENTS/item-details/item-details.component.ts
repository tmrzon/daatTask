import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item
  subscription: Subscription = new Subscription()
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription.add(this.activatedRoute.params.subscribe(p => {
      this.item = JSON.parse(p['item'])
    }))
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
