import { Component } from '@angular/core';

@Component({
  selector: 'app-users-order-table',
  templateUrl: './users-order-table.component.html',
  styleUrls: ['./users-order-table.component.scss']
})
export class UsersOrderTableComponent {
  dummyData = [
    {
      name: 'John',
      age: '24',
      location: 'bangalore',
      isShown: true,
      color: ''
    },
    {
      name: 'Mina',
      age: '34',
      location: 'bangalore',
      isShown: true,
      color: ''
    },
    {
      name: 'Tom',
      age: '14',
      location: 'delhi',
      isShown: true,
      color: ''
    },
    {
      name: 'Jerry',
      age: '26',
      location: 'chennai',
      isShown: true,
      color: ''
    },
  ]

  mapData: any = {}

  currentOrder = ''

  constructor() {}

  ngOnInit() {
    this.dummyData.forEach(person => this.mapData[person.name] = this.getOrderData(person.name)   )
    this.dummyData.forEach(person => person.color = this.getUniqueColor())
  }

  toggleIsShown(ind: number) {
    this.dummyData[ind].isShown = !this.dummyData[ind].isShown;
  }


  getOrderData(name: string){
    return ["Order_" + name + "_11", "Order_" + name + "_22"]
  }

  getUniqueColor(): any {
    console.log('hello')
    let colorRange = '0123456789'
    let color = '#'
    for(let i=0;i<6;i++){
      color += Math.floor(Math.random() * 10)
    }
    return color;
  }
}