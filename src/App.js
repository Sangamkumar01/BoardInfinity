import React, { useState } from "react";
import Section from "./components/Section";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useParams } from "react-router-dom";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
function App() {
  const intialsections = [
    {
      title: "To Do",
      tasks: ["Task 1", "Task 2", "Task 3"],
      color: "#ffd4d8",
    },
    {
      title: "In Progress",
      tasks: ["Task 4", "Task 6"],
      color: "#fbf0d4",
    },
    {
      title: "Done",
      tasks: ["Task 7", "Task 8", "Task 9"],
      color: "#cde8e2",
    },
  ];
  const addNewCard = (sectionIndex, newCard) => {
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[sectionIndex].tasks.push(newCard);
      return updatedSections;
    });
  };
  const moveTask = (
    fromSectionIndex,
    fromTaskIndex,
    toSectionIndex,
    toTaskIndex
  ) => {
    const updatedSections = [...sections];
    const movedTask = updatedSections[fromSectionIndex].tasks.splice(
      fromTaskIndex,
      1
    )[0];
    updatedSections[toSectionIndex].tasks.splice(toTaskIndex, 0, movedTask);
    setSections(updatedSections);
  };
  const [sections, setSections] = useState(intialsections);
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Container>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <React.Fragment>
                  {" "}
                  {/* Wrap sections with React.Fragment */}
                  {sections.map((section, index) => (
                    <Section
                      key={index}
                      section={section}
                      index={index}
                      onAddNewCard={(newCard) => addNewCard(index, newCard)}
                      moveTask={moveTask}
                    />
                  ))}
                </React.Fragment>
              }
            />
            <Route
              path="/task/:sectionIndex/:taskIndex"
              element={
                <TaskDetails sections={sections} setSections={setSections} />
              }
            />
          </Routes>
        </Container>
      </Router>
    </DndProvider>
  );
}

export default App;
const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
