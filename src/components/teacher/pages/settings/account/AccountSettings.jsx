import { Button, Divider } from "@mui/material";
import React from "react";
import "./AccountSettings.scss";

const AccountSettings = () => {
    return (
        <div className="teacher-account-settings">
            <div className="settings-item">
                <div className="item-content">
                    <div className="content-title"></div>
                    <div className="content-text">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
                            alt=""
                            style={{
                                width: "8em",
                                height: "8em",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                    </div>
                </div>
                <div className="item-actions">
                    <Button variant="outlined" color="primary">
                        Change photo
                    </Button>
                </div>
            </div>
            <Divider />
            <div className="settings-item">
                <div className="item-content">
                    <div className="content-title">
                        <h4>Account role:</h4>
                    </div>
                    <div className="content-text">Teacher</div>
                </div>
                <div className="item-actions"></div>
            </div>
            <Divider />
            <div className="settings-item">
                <div className="item-content">
                    <div className="content-title">
                        <h4>Name:</h4>
                    </div>
                    <div className="content-text">Jose Rizal</div>
                </div>
                <div className="item-actions"></div>
            </div>
            <Divider />
            <div className="settings-item">
                <div className="item-content">
                    <div className="content-title">
                        <h4>Email:</h4>
                    </div>
                    <div className="content-text">rizaljose@email.com</div>
                </div>
                <div className="item-actions">
                    <Button variant="outlined" color="primary">
                        Change email
                    </Button>
                </div>
            </div>
            <Divider />
            <div className="settings-item">
                <div className="item-content">
                    <div className="content-title">
                        <h4>Password:</h4>
                    </div>
                    <div className="content-text">******</div>
                </div>
                <div className="item-actions">
                    <Button variant="outlined" color="primary">
                        Change Password
                    </Button>
                </div>
            </div>
            <Divider />
            <div className="settings-item">
                <div className="item-content">
                    <div className="content-title">
                        <h4>Phone number:</h4>
                    </div>
                    <div className="content-text">No details</div>
                </div>
                <div className="item-actions">
                    <Button variant="outlined" color="primary">
                        Change phone number
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
