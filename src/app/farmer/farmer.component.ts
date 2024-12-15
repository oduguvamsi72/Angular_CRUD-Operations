import { Component } from '@angular/core';
import { Farmer } from '../models/farmer';
import { FarmerService } from '../service/farmer.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  records: Farmer[] = []
  constructor(private service: FarmerService) {

  }

  ngOnInit(): void {
    this.getrecords();
  }
  getrecords(): void {
    this.service.getall().subscribe(data => this.records = data)
  }
  
}
