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
	<Overlay  x='y' />);

/*---------- VARIABLES ----------*/
var result = renderer.getRenderOutput();
console.log(result.props);

/*----------- TESTS -----------*/
describe('Overlay component', function() {
	it('renders a div of instructions', function() {
		result.id.should.equal('modal');
	});
});
