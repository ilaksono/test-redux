import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store';
const Table = ({ state, actions }) => {


  return (
    <div>
      <table>
        <tr>
          <td>
            Hello
          </td>
          <td>
            <button
              onClick={() =>
                store.dispatch(actions.increment())}
            >{state.button}</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   ...state
// });
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(Actions, dispatch)
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Table);

export default Table;