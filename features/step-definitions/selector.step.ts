import { Given, When, Then } from '@cucumber/cucumber';
import {should, expect} from 'chai'

var tag;
Given('I choose {} tag', (tagName) =>{
   tag = $(tagName) 
});

Then('I can get {} of that tag', (text) => {
    expect(tag.getText()).to.equal(text)
});