export function TaskCard({ task, members }) {
  return(
    <div key={task.id} className="taskCard">
      <h4>{task.task}</h4>
      <span className={`taskTag${task.category}`}>{task.category}</span>
      <p>Created: {task.timestamp}</p>

      {
        task.status === "new" && (
          <select name="memberList" id="taskCardAssignMember">
              <option value="" defaultValue={true}>
                 Assign to...
              </option>
            {
              members.filter(member => member.category === task.category)
              .map(member =>
                <option key={member.name} value={member.name}>{member.name}</option>
              )
            }
          </select>
        )
      }

      {
        task.status === "in-progress" && (
          <>
            <p>Assigned to: {task.assignedTo}</p>
            <button id="completeButton">Mark as complete</button>
          </>
        )
      }

      {
        task.status === "finished" && (
          <>
            <p>Completed by: {task.assignedTo}</p>
            <button id="deleteButton">Delete</button>
          </>
        )
      }
    </div>
  )
}
