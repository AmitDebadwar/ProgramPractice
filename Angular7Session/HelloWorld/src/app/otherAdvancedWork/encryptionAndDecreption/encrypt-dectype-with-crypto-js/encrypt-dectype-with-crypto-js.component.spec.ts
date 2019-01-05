import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptDectypeWithCryptoJSComponent } from './encrypt-dectype-with-crypto-js.component';

describe('EncryptDectypeWithCryptoJSComponent', () => {
  let component: EncryptDectypeWithCryptoJSComponent;
  let fixture: ComponentFixture<EncryptDectypeWithCryptoJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptDectypeWithCryptoJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptDectypeWithCryptoJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
