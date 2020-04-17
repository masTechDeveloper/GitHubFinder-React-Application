import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'masTechDeveloper',
      avatar_url:
        'https://avatars0.githubusercontent.com/u/40725533?s=460&u=fd6942d2a702edaacba03d88889ceb8256462b44&v=4',
      html_url: 'https://github.com/masTechDeveloper',
    };
  }

  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.state.avatar_url}
          alt={this.state.login}
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a
            href={this.state.html_url}
            className='btn btn-dark btn-sm my-1'
            target='_blank'
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
