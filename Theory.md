React = > Javascript Library not Framework! (Reusing of components)

React uses a syntax extension of javascript 
JSX => javascript XML(allows html like code with your js files)

React also utilizes virtual DOM , lightweight of real DOM of web page .

Project Structure :
- Node modules -> external libraries and packages that our project relies on.
- public -> contains public assets (img,fonts,videos) via url
- src -> 99% spending time on this folder
- json -> structured in key value pairs, contians metadata about our project such as project name, version number, build name, react version number etc...

---------------------------------------------------------------------------------------

1) Component:( A component is a small setion of code that can include javascript and html)
(Header,Footer.jsx)(Food.jsx)
- A component is a self contained section of code that functions as a reusable building block.
- function based components pay attention to capitalization of component name 
- end of the file export the component, it could be import else where 
- inside the function we can return something return(pure HTMl);
- within our return statements we can insert some js using {}
- outside the return statements we dont need {we can use js  methods too} to use js codes
- react components only capable of creating of single element can have mutiple children element.
- return statements are designed only to return one component at a time.
- jsx element must be wrapped in an enclosing tag <></>
- we can reusing the component if we would like .

---------------------------------------------------------------------------------------

2) Card Component:(Card.jsx)

it involves a picture, a title and a description using css we can make the card look professional.

---------------------------------------------------------------------------------------

How to style react components with CSS:(N0 external frameworks or preprocessors)

1) External
2) Module
3) Inline

---------------------------------------------------------------------------------------

3) Props :(Student.jsx)

- Read only properties that are shared between the components
- Parent component can send data to child component
- <component key = value />

when we send key value to the component, it all started with the props object .
to get the value associated we use the props object along with the associate object 
eg : {props.name}.

Props Types :

- The mechanism that ensure that the passed value is of the correct data type.
- age : PropTypes.number ,name : PropTypes.String, isStudent : PropTypes.bool

Default Props :

- default values for props in case they are not passed from the parent component
- name : {Guest}
defaultProps are now deprecated in React 19+ 

---------------------------------------------------------------------------------------

4) Conditonal Rendering :(UserGreeting.jsx)

- allows you to what need to get rendered in your application based on certain conditions. But utilizing conditional rendering we can(Show, Hide or change components).

---------------------------------------------------------------------------------------
5) Rendering Lists:(List.jsx)

Rendering lists in React is the process of taking a collection of data (like an array) and transforming it into a set of interactive user interface elements . The core mechanism involves using the JavaScript .map() array method within JSX. 

----------------------------------------------------------------------------------------

6) clickEvents : (Button.jsx)

An interaction when a user clicks on a specific elements.
We can respond to clicks by passing a callback to the onclick eventHandler.

----------------------------------------------------------------------------------------

7) useState() Hook : (MyComponent.jsx)

React Hook -> The special Functions that allows functional components to use react feature without writing class components(React v16.8)
(useState(), useEffect(), useContext(), useReducer(), useCallback() and more... )

useState() -> A react Hook that allows the creation of a  stateful variable and a setter function to update its value in the value virtual DOM.
[name, setName]

----------------------------------------------------------------------------------------
