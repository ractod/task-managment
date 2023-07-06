function filterByStage(tasks, stage) {
   const filteredTasks = tasks.filter(task => task.stage == stage)
   return filteredTasks
}

export { filterByStage }