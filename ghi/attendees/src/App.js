import React, { Fragment } from 'react';
import Nav from './Nav';

App.defaultProps = {
  attendees: [],
};

function App(props) {
  return (
    <div>
      <Nav />
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Conference</th>
              </tr>
            </thead>
            <tbody>
              {props.attendees.map((attendee, index) => {
                return (
                  <Fragment key={attendee.href}>
                    <tr>
                      <td>{attendee.name}</td>
                      <td>{attendee.conference}</td>
                    </tr>
                  </Fragment>
                );
              })}
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
