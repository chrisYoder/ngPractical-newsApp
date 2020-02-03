import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BleacherReportComponent } from './bleacher-report.component';

describe('BleacherReportComponent', () => {
  let component: BleacherReportComponent;
  let fixture: ComponentFixture<BleacherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BleacherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BleacherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
