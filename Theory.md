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

Component:( A component is a small setion of code that can include javascript and html)

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

Card Component:

it involves a picture, a title and a description using css we can make the card look professional.

---------------------------------------------------------------------------------------

How to style react components with CSS:(N0 external frameworks or preprocessors)

1) External
2) Module
3) Inline

---------------------------------------------------------------------------------------

Props :

- Read only properties that are shared between the components
- Parent component can send data to child component
- <component key = value />

# when we send key value to the component, it all started with the props object .
# to get the value associated we use the props object along with the associate object eg : {props.name}.

Props Types :

- The mechanism that ensure that the passed value is of the correct data type.
- age : PropTypes.number ,name : PropTypes.String, isStudent : PropTypes.bool

Default Props :

- default values for props in case they are not passed from the parent component
- name : {Guest}
# defaultProps are now deprecated in React 19+ 
---------------------------------------------------------------------------------------

Conditonal Rendering :

- allows you to what need to get rendered in your application based on certain conditions. But utilizin conditional rendering we can(Show, Hide or change components).


