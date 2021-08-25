import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/SERVICES/http.service';

@Component({
  selector: 'app-results-by-type',
  templateUrl: './results-by-type.component.html',
  styleUrls: ['./results-by-type.component.scss']
})
export class ResultsByTypeComponent implements OnInit {

  @Input() items = []
  @Input() isList = true
  searchText = ''
  isAsc = true
  itemToEdit
  @Output() emitRefresh = new EventEmitter<any>();
  subscription: Subscription = new Subscription()
  constructor(private httpSer: HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  refresh() {
    debugger
    this.emitRefresh.emit()
  }
  postName(value) {
    if (value.dirty)
      this.subscription.add(
        this.httpSer.postItem(this.itemToEdit).subscribe(d => { }, e => {
          console.log(e)
        }))
    this.itemToEdit = null
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  showDetails(item) {
    debugger
    this.router.navigate(['/item', JSON.stringify(item)])
  }

}
