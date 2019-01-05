import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encrypt-dectype-with-crypto-js',
  templateUrl: './encrypt-dectype-with-crypto-js.component.html',
  styleUrls: ['./encrypt-dectype-with-crypto-js.component.css']
})
export class EncryptDectypeWithCryptoJSComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uname={username : 'amit', password:'amitpassword'};
   

  key = CryptoJS.enc.Utf8.parse('7061737323313233');
  iv = CryptoJS.enc.Utf8.parse('7061737323313233');
  
encrypted;


 en(){

this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(this.uname)), this.key,
    {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    console.log(this.encrypted);

}

 de(){
 
var decrypted = CryptoJS.AES.decrypt(this.encrypted, this.key, {
    keySize: 128 / 8,
    iv: this.iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

console.log(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)));
 }

}
