import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpfilmComponent } from './httpfilm.component';

describe('HttpfilmComponent', () => {
  let component: HttpfilmComponent;
  let fixture: ComponentFixture<HttpfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpfilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
