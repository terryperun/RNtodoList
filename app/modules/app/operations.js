import * as actions from './actions';
import Api from '../../api/Api';

export const addToCollection = () => async (dispatch) => {
  dispatch(actions.addToCollectionStart());

  const createTask = (item) => ({
    task: item.task || '',
    status: false,
  });
  const task = createTask(item);

  try {
    const newTask = await Api.add(task);
    // console.log('result--------------', newTask);
    dispatch(action.addToCollectionOk(newTask));
  } catch (error) {
    dispatch(action.addToCollectionError({ message: error.message }));
  }
};
