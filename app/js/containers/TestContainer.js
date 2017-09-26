import 'react-dom'
import * as TestActions from '../actions/Test'
import TestComponent from '../components/Test'
import { connect } from 'react-redux'

const mapStateToProps = ({ TestReducer }) => {
	return {
		...TestReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateText: () => {dispatch(TestActions.setText())}
	}
}

const TestContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TestComponent)

export default TestContainer