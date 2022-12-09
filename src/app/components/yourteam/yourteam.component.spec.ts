import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourteamComponent } from './yourteam.component';

describe('YourteamComponent', () => {
  let component: YourteamComponent;
  let fixture: ComponentFixture<YourteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
