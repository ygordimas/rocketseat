interface TaskProps {
  task: string;
  key?: string | number[];
}

interface HeaderProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
