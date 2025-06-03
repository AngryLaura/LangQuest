import { QuizQuestion } from '~/types';


const questions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Liūtas?",
    options: [
      {
        id: 'option1',
        image: 'https://i.pinimg.com/736x/fe/ab/55/feab553adf0eda8ebb5e9ac63407e117.jpg',
        text: 'the pumba',
        correct: true,
      },
      {
        id: 'option2',
        image: 'https://i.pinimg.com/736x/9a/91/c5/9a91c53e66c1fb81c996f0d8b1c3132f.jpg',
        text: 'the lion',
        correct: true,
      },
      {
        id: 'option3',
        image: 'https://i.pinimg.com/736x/47/4d/7a/474d7a7d1b13b9e0946aac0b6d4f5693.jpg',
        text: 'the cute cat',
      },
      {
        id: 'option4',
        image: 'https://i.pinimg.com/736x/b3/dd/92/b3dd92d6db84a0d98a86d797f27c1eea.jpg',
        text: 'the dude just has armor',
      },
    ],
  },
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'I hate learning',
    answer: 'Aš nekenčiu mokytis',
  },
  {
    id: 'q2',
    type: 'MULTIPLE_CHOICE', 
    text: "Kur yra 'Akmuo'?",
    options: [
      {
        id: 'option4',
        image: 'https://www.freeiconspng.com/uploads/rock-stones-transparent-background-29.png',
        text: 'the actual rock',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://i.pinimg.com/736x/a8/8b/a6/a88ba6a99e81335c21bc4698441a6a7f.jpg',
        text: 'the black rock',
      },
      {
        id: 'option3',
        image: 'https://i.pinimg.com/736x/9d/56/e6/9d56e602bf7a02fd73d21520edc6dd86.jpg',
        text: 'vin Rock',
      },
      {
        id: 'option2',
        image: 'https://i.pinimg.com/736x/1b/d6/71/1bd671eeb2ab172e8b8fa0f80ad9722b.jpg',
        text: 'the rock',
      },
    ],
  },
  {
    id: 'q6',
    type: 'OPEN_ENDED',
    text: 'Batonas',
    answer: 'Bread',
  },
  {
    id: 'q3',
    type: 'MULTIPLE_CHOICE', 
    text: "Kur yra 'Katė'?",
    options: [
      {
        id: 'option3',
        image: 'https://i.pinimg.com/736x/a2/e6/66/a2e6661f2a78207c018d73263a273fe9.jpg',
        text: 'fish',
      },
      {
        id: 'option2',
        image: 'https://i.pinimg.com/736x/24/52/09/245209c8d3917fdf0a6971fda62c2859.jpg',
        text: 'bear',
      },
      {
        id: 'option4',
        image: 'https://i.pinimg.com/736x/6c/2c/c2/6c2cc2de38f814899860559afcba552f.jpg',
        text: 'dog',
      },
      {
        id: 'option1',
        image: 'https://i.pinimg.com/736x/a8/4f/9a/a84f9a04c182a17e2b27182a63ac0e9f.jpg',
        text: 'cat',
        correct: true,
      },
    ],
  },
  {
    id: 'q4',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Orangutangas'?",
    options: [
      {
        id: 'option2',
        image: 'https://i.pinimg.com/736x/b9/32/2e/b9322e9209ee10149ce76fa4586aea9d.jpg',
        text: '',
      },
      {
        id: 'option3',
        image: 'https://i.pinimg.com/736x/69/08/23/6908233b023fc0e6ff5e703f609580a4.jpg',
        text: '',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://i.pinimg.com/736x/66/c6/f1/66c6f151f75b8adffb21e4e9fcb5d2fc.jpg',
        text: '',
      },
      {
        id: 'option4',
        image: 'https://i.pinimg.com/736x/d6/b7/46/d6b746e9ee66dbd1f6a9ed505d2a60c1.jpg',
        text: '',
      },
    ],
  },
  {
    id: 'q7',
    type: 'OPEN_ENDED',
    text: 'I love bread',
    answer: 'Aš myliu duona',
  },
   {
    id: 'q5',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Krokodilas'?",
    options: [
      {
        id: 'option2',
        image: 'https://i.pinimg.com/736x/dd/04/8f/dd048f3e43cb1018a6884d41f35156f9.jpg',
        text: 'Tiger',
      },
      {
        id: 'option3',
        image: 'https://i.pinimg.com/736x/28/7d/d1/287dd1d50d44751e8f60739786bea223.jpg',
        text: 'Dog',
        
      },
      {
        id: 'option1',
        image: 'https://i.pinimg.com/736x/5f/f3/73/5ff3738e2811c47cefc293177bb6a3e9.jpg',
        text: 'Crocodile',
        correct: true,
      },
      {
        id: 'option4',
        image: 'https://i.pinimg.com/736x/5a/92/9f/5a929fe602ccca3ed5c5ed4a81d3d058.jpg',
        text: 'Rouster',
      },
    ],
  },
];

export default questions;
