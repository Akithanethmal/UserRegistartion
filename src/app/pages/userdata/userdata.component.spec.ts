import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserdataComponent } from './userdata.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

describe('UserdataComponent', () => {
  let component: UserdataComponent;
  let fixture: ComponentFixture<UserdataComponent>;
  let userService: UserServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule,MatSnackBarModule ],
      declarations: [ UserdataComponent ],
      providers: [{ provide: UserService, useValue: new UserServiceStub() }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service', () => {
    const userServiceSpy = spyOn(userService , 'getUserData').withArgs(1).and.callThrough();
    component.getUserDetails(1);

    expect(userServiceSpy).toHaveBeenCalledTimes(1);
  })
});

class UserServiceStub {
  constructor(){}

  getUserData(page: number): Observable<any> { return of();}

 }
