import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Bien } from '../domain/bien';

@Injectable({
  providedIn: 'root'
})
export class BienesService {

  lstBienes = new Array()

  bienes: any

  bienesCollection: AngularFirestoreCollection<Bien>;
  constructor(private afs: AngularFirestore) {
    this.bienesCollection = afs.collection<Bien>('bienes')
   }

   getBienesFire(){
    return this.bienesCollection.valueChanges();
   }
}
