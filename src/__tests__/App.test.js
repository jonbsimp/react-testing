import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a button says play game', () => {
    const app = mount(<App />)
    expect(app.find('Button').text()).toEqual('Play Game')
})

// it('starts out with no text in main container', () => {
//     const app = mount(<App />)
//     expect(app.find('Container').text()).toEqual('')
// })

it ('button changes to excellent when clicked', () => {
    const app = mount(<App />)
    app.find('Button').simulate('click')
    expect(app.find('Button').text()).toEqual('Excellent!')
})

it('dispays game results when button clicked', () => {
    const app = mount(<App />)
    app.find('Button').simulate('click')
    expect(app.find('#result-text').text()).toContain('Congratulations!')
})

test('hides game results when button clicked again', () => {
    const app = mount(<App />)
    app.find('Button').simulate('click')
    app.find('Button').simulate('click')
    expect(app.find('#result-text').text()).toEqual('')
})

test('changes button second time clicked', () => {
    const app = mount(<App />)
    app.find('Button').simulate('click')
    app.find('Button').simulate('click')
    expect(app.find('Button').text()).toEqual('Play Game')    
})
