import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public myForm: any = FormGroup;

  public options: string[];
  public questionsData: any = [];
  public groupsData: any = [];
  public listofQuestions = [];
  public validations = {};
  // public qList = ["Q4","Q6", "Q14", "Q5", "Q47", "Q48", "Q65", "Q15"];
  public isDisabled: boolean = false;
  public disableQuestions = [3];

  public constructor(private _questionsService: QuestionsService, private fb: FormBuilder) { 

    // TODO:: Currently form group is hard coded. Will enhance further to be more dynamic
    this.myForm = this.fb.group({
      Q4: ['', Validators.required],
      Q6: ['', Validators.required],
      Q14: ['', Validators.required],
      Q5: ['', Validators.required],
      Q47: ['', Validators.required],
      Q48: ['', Validators.required],
      Q65: ['', Validators.required],
      Q15: ['', Validators.required]
    });
    this.myForm.valueChanges.subscribe(something => {
        console.log(this.myForm.value.Q4);
    });

    console.log(this.myForm);

  }

  public ngOnInit() {

    this.getQuestions();

    this.getGroups();

    // this.formValidations();
  }


  private getQuestions() {
    // Response from the service
    this.questionsData = this._questionsService.getQuestions();
    console.log(this.questionsData[0].listofAlwaysAsk); 

    // Final list of questions
    this.listofQuestions = this.questionsData[0].listofAlwaysAsk;
  }

  private getGroups() {
    this.groupsData = this._questionsService.getGroups();
    console.log(this.groupsData); 
  }

  // On radio button change [Yes, No]. 
  // TODO:: Currently it is hard coded. Will enhance further to be more dynamic
  private onItemChange($event, option, index) {
    if (index === 1 && option === "Yes") {
      this.isDisabled = true;
    } else if (index === 1 && option === "No") {
      this.isDisabled = false;
    }
  }

  // Form sumbit event.
  private onFormSubmit() {
    console.log(event);
  }

  private formValidations() {
    // this.options =  ['Yes', 'No']; // Not required

    // this.listofQuestions.forEach((item) => {
    //   console.log(item.questionNo);
    //   let qNo = item.questionNo;
    //   this.validations[qNo] = ['', Validators.required];
    // })
    // console.log(this.validations);
    // this.myForm = this.fb.group(this.validations);
    // this.myForm.valueChanges.subscribe(console.log)

    // this.myForm = this.fb.group({
    //   option: ['', Validators.required]
    // });
  }

}
