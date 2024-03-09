import React, { useState } from "react";
import Section from "./components/Section";
import styled from "styled-components";

function App() {
  const intialsections = [
    {
      title: "To Do",
      tasks: ["Task 1", "Task 2", "Task 3"],
      color: "#ffd4d8",
    },
    {
      title: "In Progress",
      tasks: ["Task 4", "Task 5", "Task 6"],
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
  const [sections, setSections] = useState(intialsections);
  return (
    <Container>
      {sections.map((section, index) => (
        <Section
          key={index}
          section={section}
          onAddNewCard={(newCard) => addNewCard(index, newCard)}
        />
      ))}
    </Container>
  );
}

export default App;
const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
