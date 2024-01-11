import React, { useState } from "react";
import "./SearchQuestions.scss";
import { Button, Card, CardContent, Chip, Divider, Pagination, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const arr = [0, 1, 2];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchQuestions = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="search-questions-content">
            <div className="content-filters">
                <TextField label="Search" fullWidth />
            </div>
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
                                        <Button startIcon={<AddIcon />} variant="outlined" sx={{ minWidth: 120 }}>
                                            Add
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Pagination
                    count={15}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                />
            </div>
        </div>
    );
};

export default SearchQuestions;
