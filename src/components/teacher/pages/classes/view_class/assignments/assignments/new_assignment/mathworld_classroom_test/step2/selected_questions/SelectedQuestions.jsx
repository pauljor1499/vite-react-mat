import React from "react";
import { Button, Card, CardContent, Chip, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const arr = [0];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SelectedQuestions = () => {
    return (
        <div className="search-questions-content">
            <div className="content-filters"></div>
            <div className="content-right">
                <div className="content-questions">
                    {arr.map((item, index) => (
                        <Card key={index}>
                            <CardContent className="question-card">
                                <div className="card-header">
                                    <span>{"Question " + (index + 1)}</span>
                                    <span>2 points</span>
                                </div>
                                <Divider />
                                <div className="card-questions">
                                    This is a math world question 1. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu?
                                </div>
                                <div className="card-options"></div>
                                <div className="card-footer">
                                    <div className="footer-chips">
                                        {arr2.map((item, index) => (
                                            <Chip size="small" key={index} label="Key" />
                                        ))}
                                    </div>
                                    <div>
                                        <Button
                                            startIcon={<CloseIcon />}
                                            variant="outlined"
                                            color="error"
                                            sx={{ minWidth: 120 }}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectedQuestions;
