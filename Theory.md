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

8) useEffect() Hook : 

useEffect() is a react Hook that tells react Do some code when (Pick one)
this component re - render
this component mounts
the state of a value 

useEffect (functions, [dependencies])

1. useEffect (() => {})          //runs after every re - render
2. useEffect (() => {}, [])      //runs only on mount
3. useEffect (() => {}, [value]) //runs on mount + when value changes

USES:

1) Event Listener
2) DOM Manipulations
3) Subscriptions real time updates
4) Fetching data from an API
5) clean up when an compount unmounts

----------------------------------------------------------------------------------------

9) useContext Hook :(Component A, B, C, D.jsx)

useContext() => react Hook allows you to share values between multiple levels of components without passing props through each level.

Provider Component :
1) import {create Context } from 'react';
2) export const MYcontext = CreateContext();
3) <MyContext.Provider value =(value)>
    <Child/>
    </MyContext.Provider>

----------------------------------------------------------------------------------------

HTML :

HTML -> Hyper Text Markup Language
HTML is a markup language that defines the structure and content of a web page.
Building Block of web page with various basic tags.
it is a blueprint of the website
Hypertext -> text which will take us to other pages.
markup -> set of symbols inserted in a document that instructs to controll its structure and formating.

HTML TAGS :
<h1>HEADING TAG</h1> h1 - h6 only up to 6 tags there in HTML.
<p>PARAGRAPH TAG</p>
<a href = "">Anchor Tag</a> creates Hyperlink to WEB Page.

HTML LISTS :

1) Unordered List : <ul></ul>
2) Ordered List : <ol></ol>
3) List Item : <li></li>

HTML IFRAME : <iframe src = ""></iframe>
An inline frame used to embedd another document within the current html document.

<hr> used to create a horizontal line 

<br> insert a single line break .

<center></center> used to center align the content .

HTML TABLE :

<table>there is no table column without table row!
    <tr>table row 
        <td>table column
        </td>
    </tr>
</table>

HTML FORM :

<form>
    <input type = "">determine the data type !
    <button type = "">determine the action to be taken!</button>
    <input placeholder = "">determine the placeholder!
</form>

u can create a table inside a form therefore u can maintain a perfect alignmnet!

<td>
    <select>
        <option>
            to make a dropdown with select options !
        </option>
    </select>
</td>


these are most repeated used tags in HTML !

----------------------------------------------------------------------------------------

