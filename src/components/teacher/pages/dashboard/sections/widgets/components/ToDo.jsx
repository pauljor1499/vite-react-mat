import { useState } from "react";
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Checkbox,
    IconButton,
    Typography,
    Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
            setTaskInput("");
        }
    };

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
        );
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <Paper elevation={2} sx={{ p: "1rem" }}>
            <TextField
                fullWidth
                size="small"
                label="Enter text"
                variant="outlined"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                onClick={addTask}
                style={{ marginTop: "10px" }}
            >
                Add
            </Button>
            <List dense style={{ marginTop: "20px" }}>
                {tasks.length !== 0 ? (
                    tasks.map((task) => (
                        <ListItem dense key={task.id} disablePadding>
                            <Checkbox
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                inputProps={{ "aria-label": "controlled" }}
                            />
                            <ListItemText
                                primary={task.text}
                                style={{
                                    textDecoration: task.completed ? "line-through" : "none",
                                    wordBreak: "break-all",
                                }}
                            />
                            <IconButton aria-label="delete" onClick={() => deleteTask(task.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))
                ) : (
                    <Typography color="text.secondary">
                        <i>ToDo list is empty</i>
                    </Typography>
                )}
            </List>
        </Paper>
    );
};

export default ToDo;
