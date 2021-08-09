import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
    test('renders hello world as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //.. nothing

        //Assert
        const helloWordElement = screen.getByText('Hello world', { exact: false });

        expect(helloWordElement).toBeInTheDocument();

    });

    test('renders title without click in the button', () => {
        render(<Greeting />);

        const title = screen.getByText('It\'s good to se you', { exact: false });

        expect(title).toBeInTheDocument();
    });

    test('renders title with click in the button', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // const button = screen.getByText('Change Text');
        // button.click();

        const title = screen.getByText('Changed', { exact: false });

        expect(title).toBeInTheDocument();
    });

    test('not render paragraph after click in the button', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const firstParagraoh = screen.queryByText('It\'s good to se you', { exact: false });

        expect(firstParagraoh).toBeNull();
    })
});


