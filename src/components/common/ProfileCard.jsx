import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import '../../assets/stylesheets/modal.css';
import avatar from '../../assets/images/avatar.png';
import upload from '../../services/upload';
import Loader from './Loader';
import handleErrorMessage from '../../helpers/handleErrorMessage';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passporturl: JSON.parse(localStorage.user).passporturl,
      loading: false,
    };
  }

  handleChange = async () => {
    this.setState({ loading: true });
    const form = new FormData();
    const imageData = document.querySelector('input[type="file"]').files[0];
    form.append('passporturl', imageData);
    const response = await upload.uploadPic(form);

    if (response.status === 200) {
      this.setState({ loading: false });
      this.changePassport(response.data[0].passporturl);
      notify.show(handleErrorMessage(response.message), 'success');
    }

    if (response.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(response.error), 'error');
    }
  };

  changePassport = newPassporturl => {
    this.setState({ passporturl: newPassporturl });
    const user = JSON.parse(localStorage.user);
    user.passporturl = newPassporturl;
    localStorage.setItem('user', JSON.stringify(user));
  };

  handleProfilePic = img => {
    const localUrl = 'http://127.0.0.1:3000/api/v1';
    const url = `${localUrl}`;
    if (img === 'null') {
      return avatar;
    }

    if (img === 'logourl') {
      return avatar;
    }

    return `${url}/images/${img}`;
  };

  render() {
    const user = JSON.parse(localStorage.user);
    const { passporturl, loading } = this.state;
    return (
      <div className="card">
        {loading && <Loader />}
        <Notifications />
        <div className="img-container">
          <img src={this.handleProfilePic(passporturl)} alt="avatar" />
        </div>
        <div className="card-container">
          <h4>
            <b>
              {user.firstname}
              &nbsp;
              {user.lastname}
            </b>
          </h4>
          <p>{user.phonenumber}</p>
          <p>{user.email}</p>
          <form encType="multipart/form-data">
            <p>Change Profile Picture:</p>
            <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-upload" />
              Upload
              <input
                type="file"
                id="file-upload"
                onChange={this.handleChange.bind(this)}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {};

export default ProfileCard;
