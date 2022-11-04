interface TaskProps {
  id: string | number[];
  task: string;
  key?: string | number[];
  completed: boolean;
}

interface CheckProps {
  handleCheck: (id: string | number[]) => void;
}

interface DeleteProps {
  handleDelete: (id: string | number[]) => void;
}

interface HeaderProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
