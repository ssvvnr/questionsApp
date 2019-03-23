import { Injectable } from '@angular/core';
import * as qdata from './mockData/questions.json';
import * as gdata from './mockData/groups.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // Imported from file
  private mockQuestions: any = qdata.default;
  private mockGroups: any = gdata.default;

  constructor() { 
  	// console.log(qdata.default);
  }

  // This service will return questions data list
  getQuestions() {
    return this.mockQuestions;
  }

  // This service will return the groups data list
  getGroups() {
    return this.mockGroups;
  }
}
