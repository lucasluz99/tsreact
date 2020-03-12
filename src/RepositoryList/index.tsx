import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as RepositoriesActions from '../store/ducks/repositories/actions';
import { Repository } from '../store/ducks/repositories/types';

import { List } from './styles';

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
 loadRequest():void
}


type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }


  render() {
    const { repositories } = this.props;
    console.log(repositories);
    return (
      <List>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.name}
          </li>
        ))}
      </List>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
