import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasklocationsComponent } from './tasklocations.component';

describe('TasklocationsComponent', () => {
  let component: TasklocationsComponent;
  let fixture: ComponentFixture<TasklocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklocationsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasklocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
