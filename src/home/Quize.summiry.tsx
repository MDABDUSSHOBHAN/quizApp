import { useAppSelector } from "@/app/hooks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";



function QuizSumary() {
 

  const{question,userAnswer} = useAppSelector((state) => state.quiz);

  const correctAnswerCount = question.reduce((count,qna,index)=>{
    return qna.correctAnswer === userAnswer[index] ? count + 1:count
  },0)

  const correctParsent = parseFloat(
    ((correctAnswerCount/question.length)*100).toFixed(2)
  )

    return (
      <div className="flex justify-center">
     <Card className="w-[450px]">
        <CardHeader className="font-bold">Quiz summary</CardHeader>
        <CardContent>
        <h4 className="font-bold text-green-500">
  You got {correctAnswerCount} out of {question.length}!
</h4>
<div className="text-yellow-500">
  <Progress value={correctParsent} className=" bg-yellow-500" />
  <h2 className="font-bold">Correct answer: {correctAnswerCount}</h2>
</div>

 
        </CardContent>
     </Card>
      </div>
    )
  }
  
  export default QuizSumary;
  