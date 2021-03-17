import { Given, When, Then } from '@cucumber/cucumber';
import {should, expect} from 'chai'

import MainPage from '../pages/main.page'
var tag;
// Given('I choose {} tag', (tagName) =>{
//     tag = $(tagName) 
// });

// Then('I can get {} of that tag', (text) => {
//     expect(tag.getText()).to.equal(text)
// });


Given('I select h1 tag', () =>{
    tag = MainPage.pageHeader
    // tagText = main.pageHeader
});

Then('I can get text of h1', () =>{
    expect(tag.getText()).to.equal('Welcome to the-internet')
});

Given('I select h2 tag', () =>{
    tag = MainPage.subHeading
});

Then('I can get text of h2', () =>{
    expect(tag.getText()).to.equal('Available Examples')
});