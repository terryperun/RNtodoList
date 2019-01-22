import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
} from 'recompose';
import HomeScreenView from './HomeScreenView';
import { selectors, actions, operation } from '../../modules/app';
// import * as operation from '../../modules/app';
// import { selectors, actions } from '../../modules/collections';

const mapStateToProps = (state) => ({
  items: state.app.items,
});

const enhance = compose(
  connect(
    mapStateToProps,
    // {
    //   addToCollection: actions.addToCollection,
    // },
  ),
  withState('task', 'setTask', ''),
  // withHandlers({
  //   addToCollection: (props) => () => {
  //     props.addToCollection(props.task);
  //   },
  // }),
  withHandlers({
    showState: (props) => () => {
      console.log('START IN RECOMPOSE HOME', props.addToCollection);
    },
  }),
);

export default hoistStatics(enhance)(HomeScreenView);
