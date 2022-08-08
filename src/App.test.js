import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';

// TEST 1 --> check if my todo list text is in there
test('Test if the My ToDo list message is present', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Todo List/);
  expect(linkElement).toBeInTheDocument();

});


// TEST 2 --> check if two buttons are in the page; "clear button" and "submit button"
test("Test if two buttons are on the webpage", () => {
  render(<App />);
  // use the query search for the buttons
  let buttons = screen.queryAllByRole("button");
  expect(buttons.length).toBe(2);

});


// TEST 3 --> check if the first button has text clear
  render(<App />);
  // use the query search for the buttons
  let buttons = screen.queryAllByRole("button");
  expect(buttons[0].text).toBe("Clear");

});


// TEST 4 --> check if the second button has text submit
  render(<App />);
  // use the query search for the buttons
  let buttons = screen.queryAllByRole("button");
  expect(buttons[1].text).toBe("Submit");

});



// TEST 5 --> check if v1 version of software text is present in the webpage
test('Test if v1 message appears', () => {
  render(<App />);
  const linkElement = screen.getByText(/V1/);
  expect(linkElement).toBeInTheDocument();

});














// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/welcome to my sight/i);
//   // expect(linkElement).toBeInTheDocument();

//   // lets store what is stored in a variable
//   // tests if an image is present in the dom
//   let element = screen.getByRole("img");
//   expect(element).toBeInTheDocument();
// });

// test("redners 4 buttons", () => {
//   render(<App />);
//   // use the query search for the buttons
//   let buttons = screen.queryAllByRole("button");
//   // expect(buttons.length).toBe(4);
//   //  or you can try this
//   // expect(buttons[0]).toBeInTheDocument();
//   // but if you use buttons[4] you'd have to be zero-indexed since there are only 4 buttons but 0-4 makes it 5 cuz of zero-indexiing
// });

// // fireEvent test

// test("button displays submit message", () => {
//   render(< App />)
//   // get the element that has the onClick event
//   // you can use queryByText since there is only one button with text add CV 
//   const button = screen.getByText("add CV");
//   fireEvent.click(button)
//   // get the data generated 
//   const text = screen.getByText("you have submitted your CV");
//   expect(text).toBeInTheDocument();


//   // you can check if you want to make text was going inside your event
//   // fireEvent.change(input, {target: {value:}})
// })
