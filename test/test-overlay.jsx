/*---------- DEPENDENCIES ----------*/
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var Provider = require('react-redux').Provider;
var should = require('chai').should();
var Overlay = require('../js/overlay.jsx');
var store = require('../js/store.js');



/*---------- TEST RENDER ----------*/
var renderer = TestUtils.createRenderer();
renderer.render(
	<Overlay />
	);

/*---------- VARIABLES ----------*/
var result = renderer.getRenderOutput();
var resultChildren = result.props.children;

console.log(resultChildren.props.children[1].props.children[1].props.children, '<==== Result');

/*----------- TESTS -----------*/
describe('Overlay component', function() {
	it('renders a div containing instructions', function() {
		result.type.should.equal('div');
		result.props.id.should.equal('modal');
		result.props.className.should.equal('overlay hidden');
		resultChildren.type.should.equal('div');
		resultChildren.props.className.should.equal('content');
	});

	it('renders detailed instructions on how to play the game', function() {
		resultChildren.props.children[0].type.should.equal('h3');
		resultChildren.props.children[0].props.children.should.equal('What do I do?');
		resultChildren.props.children[1].type.should.equal('div');
		resultChildren.props.children[1].props.children[0].type.should.equal('p');
		// children[0].props.children = text 
		resultChildren.props.children[1].props.children[1].type.should.equal('ul');
		resultChildren.props.children[1].props.children[1].props.children[0].type.should.equal('li');
		// children[0].props.children = text 
		resultChildren.props.children[1].props.children[1].props.children[1].type.should.equal('li');
		// children[1].props.children = text
		resultChildren.props.children[1].props.children[1].props.children[2].type.should.equal('li');
		// children[2].props.children = text
	});

	it('renders section to close overlay', function() {	
		resultChildren.props.children[1].props.children[2].type.should.equal('p');
		// children[2].props.children = text 
		resultChildren.props.children[1].props.children[3].type.should.equal('a');
		resultChildren.props.children[1].props.children[3].props.className.should.equal('close');
		resultChildren.props.children[1].props.children[3].props.children.should.equal('Got It!');

	});
});