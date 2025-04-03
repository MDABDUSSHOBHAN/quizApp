import { createSlice } from '@reduxjs/toolkit'

import { quizData } from '@/home/quizData'

interface TQuiz {
  question:typeof quizData,
  currentQuestionIndex:number,
  userAnswer:(string| null)[],
  quizComplete:boolean

}
const initialState:TQuiz = {
  question:quizData,
  currentQuestionIndex:0,
  userAnswer:Array(quizData.length).fill(null),
  quizComplete:false

}


export const quizSlice = createSlice({
  name: 'quizData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    setAnswer:(state,action) =>{
         
      //user ar question ar answer track a rakbo
      const {qustionIndex,answer} = action.payload;
      state.userAnswer[qustionIndex] = answer;
      console.log(qustionIndex,answer);
    },
    nextQuestion:(state) =>{
      if(state.currentQuestionIndex < state.question.length - 1){
        state.currentQuestionIndex +=1;
      }
    },
    previousQuestion:(state) =>{
      if(state.currentQuestionIndex>0){
        state.currentQuestionIndex -=1;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true
    }

  }
})

export const {setAnswer,nextQuestion,previousQuestion,completeQuiz} = quizSlice.actions;
export default quizSlice.reducer