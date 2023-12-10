"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LuFileText, LuGanttChart } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { LiaIdCardSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import LoginWindow from "@/components/Login";
import useAuthContext from "@/hooks/use-auth-hooks";
import { initTasks, getStartEndDateForProject } from "@/helper";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

export default function Home() {
    const router = useRouter();
    const [projectList, setProjectList] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuthContext();
    const [view, setView] = useState(ViewMode.Week);
    const [tasks, setTasks] = useState(initTasks());
    const [isChecked, setIsChecked] = useState(true);

    const handleLogout = () => {
        if (isLoggedIn) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            setIsLoggedIn(false);
            router.push("/login");
        } else {
            router.push("/login");
        }
    };

    const handleTaskChange = (task) => {
        console.log("On date change Id:" + task.id);
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
        if (task.project) {
            const [start, end] = getStartEndDateForProject(
                newTasks,
                task.project
            );
            const project =
                newTasks[newTasks.findIndex((t) => t.id === task.project)];
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = { ...project, start, end };
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t
                );
            }
        }
        setTasks(newTasks);
    };

    const handleTaskDelete = (task) => {
        const conf = window.confirm("Are you sure about " + task.name + " ?");
        if (conf) {
            setTasks(tasks.filter((t) => t.id !== task.id));
        }
        return conf;
    };

    const handleProgressChange = async (task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        console.log("On progress change Id:" + task.id);
    };

    const handleDblClick = (task) => {
        alert("On Double Click event Id:" + task.id);
    };

    const handleClick = (task) => {
        console.log("On Click event Id:" + task.id);
    };

    const handleSelect = (task, isSelected) => {
        console.log(
            task.name + " has " + (isSelected ? "selected" : "unselected")
        );
    };

    const handleExpanderClick = (task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        console.log("On expander click Id:" + task.id);
    };

    return !isLoggedIn ? (
        <LoginWindow />
    ) : (
        <main className="min-h-screen flex">
            <div className="w-16 bg-white h-full min-h-screen flex flex-col justify-between border-r ">
                <div className="mx-auto pt-4 px-2">
                    <div
                        className="mb-4 flex justify-center"
                        onClick={() => setProjectList(true)}
                    >
                        <Image
                            src={"/img/logo.png"}
                            width={38}
                            height={150}
                            alt="logo"
                        />
                    </div>
                    <div
                        className={`mb-4 rounded-xl`}
                        onClick={() => setProjectList(true)}
                    >
                        <LuFileText className="h-12 w-12  py-2" />
                    </div>
                    <div className="mb-4 rounded-xl">
                        <PiGraduationCap className="h-12 w-12 py-2" />
                    </div>
                    <div className="mb-4  rounded-xl">
                        <LiaIdCardSolid className=" h-12 w-12 py-2" />
                    </div>
                </div>
                <div className="mx-auto">
                    <button className="my-8" onClick={handleLogout}>
                        <RxExit className="h-8 w-8" />
                    </button>
                </div>
            </div>
            <div className="w-full min-h-screen bg-white">
                <h2 className="text-xl text-black font-medium mb-4 p-4">
                    My Marketing Plan
                </h2>
                <div className="w-20 flex gap-2 border-b-2 mb-4 ml-4">
                    <LuGanttChart className="mt-1" /> Gantt
                </div>
                <hr className="w-full" />

                <div className="w-full">
                    <Gantt
                        tasks={tasks}
                        viewMode={view}
                        onDateChange={handleTaskChange}
                        onDelete={handleTaskDelete}
                        onProgressChange={handleProgressChange}
                        onDoubleClick={handleDblClick}
                        onClick={handleClick}
                        onSelect={handleSelect}
                        onExpanderClick={handleExpanderClick}
                        listCellWidth={isChecked ? "155px" : ""}
                        ganttHeight={350}
                        columnWidth={81}
                    />
                </div>
            </div>
        </main>
    );
}
