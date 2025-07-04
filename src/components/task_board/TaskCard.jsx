// TaskCard.jsx – Visar enskild uppgift samt hanterar interaktion (t.ex. tilldelning, slutförande, radering)
import { ref, remove, update } from "firebase/database";
import { dataBase } from "../../firebase/firebaseconfig";

export function TaskCard({ task, members, }) {

function handleChange(event){
  const member = event.target.value;
  if (!member) return;

  const taskRef = ref(dataBase, `/tasks/${task.id}`);
  update(taskRef, {
    member,
    status: "in-progress"
  });
}

function handleInProgressClick(){
    const taskRef = ref(dataBase, `/tasks/${task.id}`);
    update(taskRef, { status: "finished" });
  }

function handleFinishedClick(){
    const taskRef = ref(dataBase, `/tasks/${task.id}`);
    remove(taskRef);
  }

  return(
    <div className="taskCard">
      <h4>{task.task}</h4>
      <span className={`taskTag${task.category}`}>{task.category}</span>
      <p>
        {/* Formaterar datum till mer läsvänligt */}
          Created: {new Date(task.timestamp).toLocaleString("sv-SE", {
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        })}
      </p>
      <div className="deleteIconContainer">
        <img className="deleteIcon" src="https://cdn-icons-png.flaticon.com/512/70/70757.png" alt="delete" onClick={handleFinishedClick}/>
      </div>

      {
        task.status === "new" && (
          <select name="memberList" id="taskCardAssignMember" onChange={handleChange}>
              <option value="" defaultValue={true}>
                 Assign to...
              </option>
            {
              members.filter(member => member.category === task.category)
              .map(member =>
                <option key={member.id} value={member.name}>{member.name}</option>
              )
            }
          </select>
        )
      }

      {
        task.status === "in-progress" && (
          <>
            <p>Assigned to: {task.member}</p>
            <button onClick={handleInProgressClick} id="completeButton">Mark as complete</button>
          </>
        )
      }

      {
        task.status === "finished" && (
          <>
            <p>Completed by: {task.member}</p>
            <button onClick={handleFinishedClick} id="deleteButton">Delete</button>
          </>
        )
      }
    </div>
  )
}
