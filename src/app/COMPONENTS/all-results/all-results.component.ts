import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { HttpService } from 'src/app/SERVICES/http.service';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent implements OnInit {

  groupedItems = []
  itemsToShow = []
  isList = true
  constructor(public httpSer: HttpService) { }
  subscription: Subscription = new Subscription()
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.subscription.add(this.httpSer.getData().subscribe(d => {
      this.groupedItems = Array.from(d.results.reduce(
        (entryMap, e) => entryMap.set(e.Type, [...entryMap.get(e.Type) || [], e]),
        new Map()
      ))
      debugger
      this.itemsToShow = this.groupedItems[0][1]
    }, e => { console.log(e) }))

  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
