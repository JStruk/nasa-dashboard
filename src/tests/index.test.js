import ReactDOM from 'react-dom';

describe('index', () => {
    const renderSpy = jest.spyOn(ReactDOM, 'render')

    it('should call the ReactDOM render method with the App component', () => {
        require('../index')

        expect(renderSpy).toHaveBeenCalled()
    })
})
