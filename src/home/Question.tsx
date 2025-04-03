import { useAppSelector } from "@/app/hooks"
import { CardWithForm } from "@/schadui/Card"


function Question() {

    const {question} = useAppSelector((state)=>state.quiz);

    console.log(question);

  return (
    <div className="flex flex-col items-center justify-center ">
     <h2>This is for question Section</h2>
     <CardWithForm/>
    </div>
  )
}

export default Question
