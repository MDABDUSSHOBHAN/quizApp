
import { useAppDispatch } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDeleteQuiZApiMutation, useGetAllQuizQuery } from "@/features/api/quizApi";
import { setQuiz } from "@/features/quiz/quizSlicer";
import { Delete } from "lucide-react";

function AllQuize() {
    const dispatch = useAppDispatch();
    const { data, isLoading } = useGetAllQuizQuery(undefined);
    const [quizDele] = useDeleteQuiZApiMutation();
    console.log(quizDele);
    
  
    console.log('data', data, isLoading);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    if (!data || data.length === 0) {
        return <p>No quizzes available.</p>;
    }
//This is for handlerFunction

const handleSetQuiz = (questions:string) =>{
    dispatch(setQuiz(questions));
    console.log(questions)
}

const handelDelete = async (data:string) =>{

    await quizDele(data);
    
}


    return (
        <div className="my-3">
            <div className="grid grid-cols-8 gap-4">
               
                {data.map((quiz: { title: string; description: string;questions:string,_id:string }, index: string) => (
                   <Card
                   key={index}
                   onClick={() => handleSetQuiz(quiz.questions)}
                   className="p-4 hover:shadow-md cursor-pointer relative"
                 >
                   <Button
                     onClick={(e) => {
                       e.stopPropagation(); // prevent triggering card click
                       handelDelete(quiz._id)// যদি ডিলিট হ্যান্ডলার থাকে
                   
                     }}
                     className="absolute top-2 right-2"
                     variant="ghost"
                     size="icon"
                   >
                     <Delete className="w-4 h-4" />
                   </Button>
                   
                   <h3 className="mt-6">{quiz.title}</h3>
                   {/* <p>{quiz.description}</p> */}
                 </Card>
                 
                ))}
            </div>
        </div>
    );
}

export default AllQuize;
