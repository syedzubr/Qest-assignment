import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOrderTableComponent } from './users-order-table.component';

describe('UsersOrderTableComponent', () => {
  let component: UsersOrderTableComponent;
  let fixture: ComponentFixture<UsersOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
