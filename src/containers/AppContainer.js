import * as SearchActions from '../store/actions/searchActions';

import App from "../components/App";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    searchTextChangedAction: SearchActions.searchTextChangedAction,
    loadCrewMembersAction: SearchActions.loadCrewMembersAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
