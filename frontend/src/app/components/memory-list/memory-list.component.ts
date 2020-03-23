import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-memory-list',
  templateUrl: './memory-list.component.html',
  styleUrls: ['./memory-list.component.css']
})

export class MemoryListComponent implements OnInit {

  Memory:any = [];

  constructor(private apiService: ApiService) {
    this.readMemory();
  }

  ngOnInit() {}

  readMemory(){
    this.apiService.getMemories().subscribe((data) => {
      this.Memory = data;
    })
  }

  removeMemory(memory, index) {
    if(window.confirm('Are you sure?')) {
      this.apiService.deleteMemory(memory._id).subscribe((data) => {
          this.Memory.splice(index, 1);
        }
      )
    }
  }

}
