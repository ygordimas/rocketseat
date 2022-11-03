interface TaskProps {
  task: string;
  taskId: string | number[];
}

interface TasksProps {
  tasks: {
    task: string;
    taskId: string | number[];
  }[];
}

interface HeaderProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
