
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppDispatch, useAppSelector } from "@/app/hooks";

import QuizControl from "@/home/Quize.control";
import { setAnswer } from "@/features/quiz/quizSlicer";


export function CardWithForm() {
    const dispatch = useAppDispatch();

      const {question,currentQuestionIndex,userAnswer} = useAppSelector((state)=>state.quiz);

      const currentQuestion = question[currentQuestionIndex];
      const currentAnswer = userAnswer[currentQuestionIndex];
      const handleAnswerChange = (answer:string) =>{
        dispatch(setAnswer({qustionIndex:currentQuestionIndex,answer}));
        console.log(answer)
      }

   

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle> {currentQuestion.question}</CardTitle>
        <CardDescription>
            Question {currentQuestionIndex+1} of {question.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
          {
             currentQuestion.options.map((option,index) => (
                <Button onClick={()=>handleAnswerChange(option)} 
                key={index} size={"lg"} className="mt-3 w-full"
                variant={option === currentAnswer?"default":"outline"}
                
                >{option}</Button>
             ))
          }
            <QuizControl/>
      </CardContent>
      
    </Card>
  )
}
