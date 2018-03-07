import {Component, OnChanges, OnInit} from '@angular/core';
import {QuestionsService} from "../questions.service";

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit, OnChanges {

  public page = 0;

  questions = [
    {
      "id":1,
      "question": "Question1",
      "options": {
        "option1": {
          option: '1',
          score: 1
        },
        "option2": {
          option: '2',
          score: 2
        },
        "option3": {
          option: '3',
          score: 3
        },
        "option4": {
          option: '4',
          score: 4
        }
      }
    },
    {
      "id":2,
      "question": "Question2",
      "options": {
        "option1" : {
          option: '5',
          score: 4
        },
        "option2" : {
          option: '6',
          score: 5
        },
        "option3" : {
          option: '7',
          score: 3
        },
        "option4" : {
          option: '8',
          score: 2
        }
      }
    },
    {
      "id":3,
      "question": "Question3",
      "options": {
        "option1" : {
          option: '9',
          score: 4
        },
        "option2" : {
          option: '10',
          score: 3
        },
        "option3" : {
          option: '11',
          score: 2
        },
        "option4" : {
          option: '12',
          score: 1
        }
      }
    },
    {
      "id":4,
      "question": "Question4",
      "options": {
        "option1" : {
          option: '13',
          score: 2
        },
        "option2" : {
          option: '14',
          score: 4
        },
        "option3" : {
          option: '15',
          score: 3
        },
        "option4" : {
          option: '16',
          score: 1
        }
      }
    },
    {
      "id":5,
      "question": "Question4",
      "options": {
        "option1" : {
          option: '5',
          score: 5
        },
        "option2" : {
          option: '6',
          score: 6
        },
        "option3" : {
          option: '7',
          score: 7
        },
        "option4" : {
          option: '8',
          score: 8
        }
      }
    }
  ];

  public options = Object.values(this.questions[this.page].options);
  errorMsg: string;

  // constructor(private _questionsService: QuestionsService) {}

  ngOnInit() {
    // this._questionsService.getQuestions()
    //   .subscribe(resEmployeeData => this.questions = resEmployeeData,
    //     resEmployeeError => this.errorMsg = resEmployeeError);
  }

  ngOnChanges() {
    // this.options = Object.values(this.questions[this.page].options);
  }

  getQuestion() {
    return this.questions[this.page].question;
  }

  nextQuestion(delta: number) {
    this.page = delta === 1 ? this.page + 1 : this.page - 1;
    this.options = Object.values(this.questions[this.page].options);
  }

  selectOption(event) {
    console.log(event);
    
  }

}
