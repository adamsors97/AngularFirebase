import { Component, OnInit } from '@angular/core';
import { AngularFirestore, USE_EMULATOR } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public items!: any[];
  usersCollection! : any[];
  isAdmin!: boolean;
  purItemName!: string;
  purItemPrice!: string;
  selectedItem! : any;

  constructor(private afs: AngularFirestore,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.checkAdminPrivilege();
    this.refreshDb();

  }
  getItems(){
      return this.afs.collection(environment.collection).snapshotChanges();
    }
  purchase(item : any){
      console.log(item.name +  "")
  }

  uploadItem(){
    let itemNameinp = (<HTMLInputElement>document.getElementById('itemNameInput')).value;
    let priceinp = (<HTMLInputElement>document.getElementById('priceInput')).value;
    let imageUrlinp = (<HTMLInputElement>document.getElementById('imageUrlInput')).value;
    this.afs.collection(environment.collection).doc("item" + new Date()).set({
      name: itemNameinp,
      price: priceinp,
      imageurl: imageUrlinp
    })
    .then(() => {
        console.log("Item successfully uploaded!");
    })
    .catch((error) => {
        console.error("Error uploading item: ", error);
    });
  }
  modifyItemPanel(item: any, content: any){
    this.selectedItem = item;
    this.openPanel(content);
  }
  modifyItem(){
    let itemNameinp = (<HTMLInputElement>document.getElementById('itemName2Input')).value;
    let priceinp = (<HTMLInputElement>document.getElementById('price2Input')).value;
    let imageUrlinp = (<HTMLInputElement>document.getElementById('imageUrl2Input')).value;
    this.afs.collection(environment.collection).doc(this.selectedItem.docname).set({
      name: itemNameinp,
      price: priceinp,
      imageurl: imageUrlinp
    })
    .then(() => {
        console.log("Item successfully modified!");
    })
    .catch((error) => {
        console.error("Error modifying item: ", error);
    });
  }
  
  openPanel(content: any) {
    this.modalService.open(content,{backdropClass: 'light-blue-backdrop'});
  }
  refreshDb() {
    this.items = [];
    this.afs.collection(environment.collection, ref => ref.orderBy('price', 'desc')).get().subscribe(res => {
      res.docs.forEach(doc => {
        const data = doc.data() as any;
        this.items.push({docname: doc.id, name:data.name,price:data.price,imageurl: data.imageurl});
      })
    })
  }
  removeItem(docname : string){
    this.afs.collection(environment.collection).doc(docname).delete().then(() => {
      console.log("Item successfully deleted!");
  }).catch((error) => {
      console.error("Error removing item: ", error);
  }); 
  this.items.forEach((element,index)=>{
    if(element.name==docname) this.items.splice(index,1);
 });
  }
  checkAdminPrivilege() {
    this.isAdmin = false;
    this.afs.collection("AdminUsers",ref => ref.where('email', '==', 
    localStorage.getItem('useremail'))).get().subscribe(res => {
      res.docs.forEach(doc => {
        this.isAdmin = true;
      })
    })

  }


}
