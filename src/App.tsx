
import { AccordionDemo } from "./schadui/Accourdia"
import Question from "./home/Question"
import { useAppSelector } from "./app/hooks"
import QuizSumary from "./home/Quize.summiry"
import AllQuize from "./home/AllQuiz"
import AddQuiz from "./home/Addquiz"


function App() {

  const {quizComplete} = useAppSelector((state) => state.quiz)
  return (
    <div className="container max-auto ">
    

  <h1 className="text-5xl mt-4 text-center">Jhakanaka Quiz App</h1>
  {/* This is for add Quiz */}
  <AddQuiz/>
  <AllQuize/>


   {
    !quizComplete? <Question/> : <QuizSumary/>
   }
   <AccordionDemo/>
    </div>
  )
}

export default App
