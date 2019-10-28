import React from 'react';

import qrcode from '../../../../assets/img/qrcode.png';

const UserProfile = () => (
  <div
    className="modal fade"
    id="userProfile"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Profile
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>Name</td>
                <th>Ajesh Kumar S</th>
              </tr>
              <tr>
                <td>College</td>
                <th>Model Engineering College</th>
              </tr>
              <tr>
                <td>Excel ID</td>
                <th>#084023984038</th>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <img
                    src={qrcode}
                    alt="qrcode"
                    className="img-fluid"
                    align="center"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default UserProfile;
