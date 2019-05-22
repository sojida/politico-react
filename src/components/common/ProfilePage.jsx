import React, { Component } from 'react';
import uniqid from 'uniqid';
import ProfileCard from './ProfileCard';
import vote from '../../services/vote';
import Loader from './Loader';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myVotes: [],
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const votes = await vote.getMyVotes();
    this.setState({ myVotes: votes.data, loading: false });
  };

  render() {
    const { myVotes, loading } = this.state;
    const listOfVotes = myVotes.map((info, index) => (
      <tr key={uniqid()}>
        <td>{index + 1}</td>
        <td>{info.officename}</td>
        <td>{info.partyname}</td>
        <td>
          {info.firstname}
          &nbsp;
          {info.lastname}
        </td>
      </tr>
    ));

    const noVotes = (
      <div className="center">
        <h2>You have not voted yet</h2>
      </div>
    );
    return (
      <div>
        {loading && <Loader />}
        <ProfileCard />
        {listOfVotes.length ? (
          <table className="result-table">
            <tbody>
              <tr>
                <th className="serial-num">s/n</th>
                <th>Name</th>
                <th>Party</th>
                <th>Votes</th>
              </tr>
            </tbody>
            <tbody>{listOfVotes}</tbody>
          </table>
        ) : (
          noVotes
        )}
      </div>
    );
  }
}

export default ProfilePage;
