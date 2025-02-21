"use client";
import React, { use, useState } from "react";
import ProjectHeader from "./ProjectHeader";

type Props = {
  params: { id: string };
};

const Project = ({ params }: { params: Promise<Props> }) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  return (
    <div>
      {/* MODAL NEW TASKS */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab === "Board" && <Board />} */}
    </div>
  );
};

export default Project;
