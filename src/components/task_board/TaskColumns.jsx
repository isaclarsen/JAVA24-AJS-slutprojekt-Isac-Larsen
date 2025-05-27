import { TaskCard } from "./TaskCard";

export function TaskColumns({filteredTasks, members, updateTask, deleteTask}) {
  console.log(filteredTasks);
  
  return (
    <div id="taskColumnsContainer">
        <div className="taskColumn">
            <h3>NEW</h3>
            {
              filteredTasks.filter(task => task.status === "new")
              .map(task => (
                <TaskCard
                key={task.id}
                task={task}
                members={members}
                updateTask={updateTask}
                deleteTask={deleteTask}
                />
              ))
            }
        </div>
        <div className="taskColumn">
            <h3>IN-PROGRESS</h3>
            {
              filteredTasks.filter(task => task.status === "in-progress")
              .map(task => (
                <TaskCard
                key={task.id}
                task={task}
                members={members}
                updateTask={updateTask}
                deleteTask={deleteTask}
                />
              ))
            }
        </div>
        <div className="taskColumn">
            <h3>FINISHED</h3>
                        {
              filteredTasks.filter(task => task.status === "finished")
              .map(task => (
                <TaskCard
                key={task.id}
                task={task}
                members={members}
                deleteTask={deleteTask}
                />
              ))
            }
        </div>
    </div>
  )
}
