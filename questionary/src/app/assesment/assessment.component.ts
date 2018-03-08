import {AfterContentChecked, AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit, AfterContentChecked {

  public page = 0;
  public showResultsPage = false;
  public score0 = 0;
  public score1 = 0;
  public score2 = 0;
  public score3 = 0;
  public totalScore = 0;
  public options: any;
  questions = [];
  errorMsg: string;

  constructor(private _questionsService: QuestionsService) {}

  ngOnInit() {
    this._questionsService.getQuestions()
      .subscribe(resQuestionsData => this.questions = resQuestionsData,
        resEmployeeError => this.errorMsg = resEmployeeError);
  }

  ngAfterContentChecked() {
    this.options = Object.values(this.questions[this.page].options);
  }

  getQuestion() {
    return this.questions[this.page].question;
  }

  nextQuestion(delta: number) {
    this.page = delta === 1 ? this.page + 1 : this.page - 1;
    this.options = Object.values(this.questions[this.page].options);
  }

  selectOption(event) {
    if (this.page === 0) {
      this.score0 = event;
    }
    if (this.page === 1) {
      this.score1 = event;
    }
    if (this.page === 2) {
      this.score2 = event;
    }
    if (this.page === 3) {
      this.score3 = event;
    }
    this.totalScore = this.score0 + this.score1 + this.score2 + this.score3;
  }

}
