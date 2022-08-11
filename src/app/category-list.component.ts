import { Component, Input } from "@angular/core";

@Component({
  selector: "mw-category-list",
  template: `
    <span class="label" *ngFor="let category of categories">
      {{ category }}
    </span>
  `,
  styles: [
    `
      :host {
        display: block;
        margin-bottom: 20px;
      }
      :host-context(.medium-movies) span {
        background-color: #53ace4;
      }
      :host-context(.medium-series) span {
        background-color: #e77c78;
      }
    `
  ]
})
export class CategoryListComponent {
  @Input() categories: string[];
}
