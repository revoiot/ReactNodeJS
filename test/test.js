import { Index } from '../../src/client'
import React from "react"
import { expect } from 'chai'
import { shallow } from 'enzyme';

describe('react test sample', () => {
  it('rendering <div>Hello React!</div>', () => {
    const result = shallow(<Index />).contains(<div>Hello React!</div>)
    expect(result).to.be.true
  });
});