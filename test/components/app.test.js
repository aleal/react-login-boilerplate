
import { renderComponent , expect, $, simulate } from '../test-helper';
import App from '../../src/components/app';

describe('App rendering' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  describe('renders component', () => {
    
    it('check compoment exists', () => {
        expect(component).to.exist;
    });

    it('check compoment class name', () => {
        expect(component.className).to.be.equal('app');
    });

  });

  describe('renders component action button', () => {
    let button;
    
    beforeEach(() => {
        button = $(component,'input[type=button]')[0];
    });

    it('check compoment action button', () => {
        expect(button).to.exist;
    });

    it('check compoment click action button', () => {
        expect(button.value).to.be.equal('Click me');
        simulate(button,'click');
        expect(button.value).to.be.equal('Everything looks fine');
    });
    
  });

});