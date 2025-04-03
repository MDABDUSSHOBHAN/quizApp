import { Button } from "@/components/ui/button"
import { AccordionDemo } from "./schadui/Accourdia"
import Question from "./home/Question"
import { useAppSelector } from "./app/hooks"
import QuizSumary from "./home/Quize.summiry"


function App() {

  const {quizComplete} = useAppSelector((state) => state.quiz)
  return (
    <div className="flex flex-col items-center justify-center ">
    

  <h1 className="text-5xl mt-4">Jhakanaka Quiz App</h1>


   {
    !quizComplete? <Question/> : <QuizSumary/>
   }
   <AccordionDemo/>
    </div>
  )
}

export default App
