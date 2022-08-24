import { Component, OnInit } from '@angular/core';
import { RowSpanComputer, Span } from './row-span-computer';

@Component({
  selector: 'row-span',
  templateUrl: './row-span.component.html',
  styleUrls: ['./row-span.component.css'],
})
export class RowSpanComponent implements OnInit {
  columnNames = ['c1', 'c2', 'c3', 'c4'];
  data = [
    { c1: 'a', c2: 1, c3: 'y', c4: '-' },
    { c1: 'a', c2: 1, c3: 'y', c4: '+' },
    { c1: 'a', c2: 1, c3: 'x', c4: '+' },
    { c1: 'a', c2: 2, c3: 'y', c4: '-' },
    { c1: 'b', c2: 2, c3: 'x', c4: '+' },
    { c1: 'b', c2: 3, c3: 'x', c4: '-' },
    { c1: 'b', c2: 3, c3: 'x', c4: '+' },
  ];
  rowSpans: Array<Span[]>;

  private rowSpanComputer = new RowSpanComputer();

  ngOnInit() {
    this.computeRowSpans();
  }

  private computeRowSpans(): void {
    this.rowSpans = this.rowSpanComputer.compute(
      this.data,
      this.columnNames,
      1    
      );
  }
}
