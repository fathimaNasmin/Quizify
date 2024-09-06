const questions = [
  {
    id: 1,
    questionText: "What is the main purpose of React?",
    options: [
      "To provide server-side rendering",
      "To manage databases",
      "To create dynamic user interfaces",
      "To handle backend logic",
    ],
    answer: "To create dynamic user interfaces",
  },
  {
    id: 2,
    questionText: "What is JSX in React?",
    options: [
      "A template engine",
      "A JavaScript XML syntax",
      "A state management library",
      "A CSS-in-JS framework",
    ],
    answer: "A JavaScript XML syntax",
  },
  {
    id: 3,
    questionText:
      "Which method is used to update the state in a React component?",
    options: ["updateState()", "setState()", "modifyState()", "changeState()"],
    answer: "setState()",
  },
  {
    id: 4,
    questionText:
      "Which hook is used to manage side effects in a functional component?",
    options: ["useReducer", "useContext", "useEffect", "useState"],
    answer: "useEffect",
  },
  {
    id: 5,
    questionText: "What is a controlled component in React?",
    options: [
      "A component that uses local storage",
      "A component whose state is controlled by the parent",
      "A component that is controlled by the browser",
      "A component that controls its own state",
    ],
    answer: "A component whose state is controlled by the parent",
  },
  {
    id: 6,
    questionText: "What is the virtual DOM in React?",
    options: [
      "A simplified version of the actual DOM",
      "A custom-built DOM",
      "A copy of the real DOM in memory",
      "A new HTML5 specification",
    ],
    answer: "A copy of the real DOM in memory",
  },
  {
    id: 7,
    questionText:
      "How can you pass data from parent to child components in React?",
    options: ["Using state", "Using context", "Using hooks", "Using props"],
    answer: "Using props",
  },
  {
    id: 8,
    questionText: "What is the purpose of React's useState hook?",
    options: [
      "To manage global state",
      "To render JSX conditionally",
      "To manage state in a functional component",
      "To fetch data from an API",
    ],
    answer: "To manage state in a functional component",
  },
  {
    id: 9,
    questionText:
      "Which lifecycle method is called after a component is mounted in class components?",
    options: [
      "shouldComponentUpdate",
      "componentWillUnmount",
      "componentDidMount",
      "componentDidUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    id: 10,
    questionText: "What does the useContext hook do in React?",
    options: [
      "It triggers a re-render",
      "It allows you to manage state locally",
      "It allows you to access the context API",
      "It lets you fetch data from an API",
    ],
    answer: "It allows you to access the context API",
  },
  {
    id: 11,
    questionText: "How can you improve the performance of a React application?",
    options: [
      "Optimize state updates",
      "Avoid re-rendering by using shouldComponentUpdate",
      "All of the above",
      "Use React.memo for functional components",
    ],
    answer: "All of the above",
  },
  {
    id: 12,
    questionText: "What is the useReducer hook used for?",
    options: [
      "Handling API requests",
      "Updating the DOM directly",
      "Managing complex state logic",
      "Accessing context",
    ],
    answer: "Managing complex state logic",
  },
  {
    id: 13,
    questionText: "What is the difference between props and state in React?",
    options: [
      "Props are read-only, state can be changed",
      "State is used to pass data to child components, props are used for local data",
      "Props are for event handling, state is for rendering",
      "Props and state are the same",
    ],
    answer: "Props are read-only, state can be changed",
  },
  {
    id: 14,
    questionText: "How can you handle forms in React?",
    options: [
      "Neither of the above",
      "Both controlled and uncontrolled components",
      "Using uncontrolled components",
      "Using controlled components",
    ],
    answer: "Both controlled and uncontrolled components",
  },
  {
    id: 15,
    questionText: "What does the key prop do in a list of elements?",
    options: [
      "It triggers re-rendering",
      "It helps React identify which items have changed",
      "It manages state in a list",
      "It binds events to list items",
    ],
    answer: "It helps React identify which items have changed",
  },
  {
    id: 16,
    questionText: "What is React.Fragment used for?",
    options: [
      "To add CSS to React components",
      "To return multiple components from render",
      "To wrap multiple elements without adding extra DOM nodes",
      "To manage state in functional components",
    ],
    answer: "To wrap multiple elements without adding extra DOM nodes",
  },
  {
    id: 17,
    questionText:
      "Which hook is used to access the previous state or props in React?",
    options: ["useState", "useEffect", "usePrevious", "useRef"],
    answer: "useRef",
  },
  {
    id: 18,
    questionText: "What is the purpose of React.StrictMode?",
    options: [
      "It enforces strict typing",
      "It highlights potential problems in an application",
      "It disables the virtual DOM",
      "It speeds up rendering",
    ],
    answer: "It highlights potential problems in an application",
  },
  {
    id: 19,
    questionText: "How can you handle side effects in functional components?",
    options: [
      "Using props",
      "Using useMemo",
      "Using useState",
      "Using useEffect",
    ],
    answer: "Using useEffect",
  },
  {
    id: 20,
    questionText: "How do you pass methods as props in React?",
    options: [
      "By using context to pass methods",
      "Methods cannot be passed as props",
      "By declaring them in the child component",
      "By binding them in the parent component and passing as props",
    ],
    answer: "By binding them in the parent component and passing as props",
  },
];


const getRandomQuestions = (questionsArr, num=10) => {
  let shuffled = questionsArr.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, num);
};


export const randomQuestions = getRandomQuestions(questions);

