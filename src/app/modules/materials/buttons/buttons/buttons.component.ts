import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  importString = `import {MatButtonModule} from '@angular/material/button';`;
  buttonsOneHtmlContent = `
  <section>
            <b>Basic</b>
            <div class="buttons-container">
              <button mat-button>Basic</button>
              <button mat-button color="primary">Primary</button>
              <button mat-button color="accent">Accent</button>
              <button mat-button color="warn">Warn</button>
              <button mat-button disabled>Disabled</button>
              <a mat-button href="#" target="_blank">Link</a>
            </div>
          </section>
          <mat-divider></mat-divider>
          <section>
            <b>Raised</b>
            <div class="buttons-container">
              <button mat-raised-button>Basic</button>
              <button mat-raised-button color="primary">Primary</button>
              <button mat-raised-button color="accent">Accent</button>
              <button mat-raised-button color="warn">Warn</button>
              <button mat-raised-button disabled>Disabled</button>
              <a mat-raised-button href="#" target="_blank">Link</a>
            </div>
          </section>
          <mat-divider></mat-divider>
          <section>
            <b>Stroked</b>
            <div class="buttons-container">
              <button mat-stroked-button>Basic</button>
              <button mat-stroked-button color="primary">Primary</button>
              <button mat-stroked-button color="accent">Accent</button>
              <button mat-stroked-button color="warn">Warn</button>
              <button mat-stroked-button disabled>Disabled</button>
              <a mat-stroked-button href="#" target="_blank">Link</a>
            </div>
          </section>
          <mat-divider></mat-divider>
          <section>
            <b>Flat</b>
            <div class="buttons-container">
              <button mat-flat-button>Basic</button>
              <button mat-flat-button color="primary">Primary</button>
              <button mat-flat-button color="accent">Accent</button>
              <button mat-flat-button color="warn">Warn</button>
              <button mat-flat-button disabled>Disabled</button>
              <a mat-flat-button href="#" target="_blank">Link</a>
            </div>
          </section>`;
  buttonsOneTsContent = `b`;

  constructor() { }

  ngOnInit(): void {
  }

}
