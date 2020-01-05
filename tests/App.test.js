import React from 'react';
import {fireEvent, render, wait} from '@testing-library/react-native';
import App from "../App";

test('examples of some things', async () => {
    const buttonId = 'colorButton',
        boxId = 'colorBox';

    const {getByTestId} = render(<App/>);

    const button = getByTestId(buttonId);

    await wait(() => expect(getByTestId(boxId)).toHaveStyle({backgroundColor: 'skyblue'}));

    fireEvent.press(button);

    await wait(() => {
        expect(getByTestId(buttonId)).toBeTruthy()
    });

    await wait(() => expect(getByTestId(boxId)).toHaveStyle({backgroundColor: 'purple'}));
});

