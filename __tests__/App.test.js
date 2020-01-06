import React from 'react';

import {render, waitForElement, wait} from '@testing-library/react-native';
import App from "../App";
import axiosMock from 'axios'

jest.mock('axios');

describe('App', () => {

    it('sets are displayed', async () => {

        axiosMock.get.mockResolvedValueOnce({
            data: [{
                code: 'AW',
                name: 'Awakenings'
            }],
        });

        const {getByTestId} = render(<App/>);

        const record = await waitForElement(() => getByTestId('AW'));

        await wait(() => expect(record).toHaveTextContent('Awakenings'));

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith("https://swdestinydb.com/api/public/sets");
    });

});

