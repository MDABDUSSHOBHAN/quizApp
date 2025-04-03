import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button"
import { completeQuiz, nextQuestion, previousQuestion } from "@/features/quiz/quizSlicer";


function QuizControl() {
  const {question,currentQuestionIndex,userAnswer} = useAppSelector((state)=>state.quiz);

const dispatch = useAppDispatch();
const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
const handNextQuestion = ()=>{

  dispatch(nextQuestion())

}

const handPreQuestion = ()=>{
  dispatch(previousQuestion())
}
const handleCompleQuiz = () =>{
  dispatch(completeQuiz());
}

const isCompletQuiz = isAnswerSelected || currentQuestionIndex !== question.length-1;

    return (
      <div className="flex justify-between mt-4 space-x-4 ">
        <Button disabled={currentQuestionIndex==0} onClick={handPreQuestion}>Previous</Button>

        {
          currentQuestionIndex < question.length -1 && (
        <Button disabled={!isAnswerSelected} onClick={handNextQuestion}>Next</Button>
          )
        }
         {
          currentQuestionIndex === question.length-1 && (
        <Button disabled={!isCompletQuiz} onClick={handleCompleQuiz}>complete Quiz</Button>
          )
        }
      
    
      </div>
    )
  }
  
  export default QuizControl;
  