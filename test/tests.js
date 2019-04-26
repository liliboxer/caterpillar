import feedSlinky from '../src/feed-slinky.js';

const test = QUnit.test;

test('adds donut to slinky', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const donutName = 'red';
    const parentElement = document.createElement('div');
    const expected = '<span class="part red"></span>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    feedSlinky(parentElement, donutName);

    //Assert
    assert.equal(parentElement.innerHTML, expected);
});