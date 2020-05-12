import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs";

// models
import { Memory } from "../../model/memory";

@Injectable()
export class MemoriesService {

  private readonly URL = "http://localhost:8080/api/memories";

  constructor(
    protected httpClient: HttpClient,
  ) {}

  public create(memory: Memory): Observable<Memory> {
    return this.httpClient.post<Memory>(this.URL, memory);
  }

  public delete(memory: Memory): Observable<Memory> {
    return this.httpClient.delete<Memory>(`${this.URL}/${memory._id}`);
  }

  public get(id: string): Observable<Memory> {
    return this.httpClient.get<Memory>(`${this.URL}/${id}`);
  }

  public list(): Observable<Array<Memory>> {
    return this.httpClient.get<Array<Memory>>(this.URL);
  }

  public update(memory: Memory): Observable<Memory> {
    return this.httpClient.put<Memory>(`${this.URL}/${memory._id}`, memory);
  }

}
