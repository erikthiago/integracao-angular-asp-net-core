using System.Collections.Generic;
using ToDoAPI.Models;

namespace ToDoAPI.Mock
{
    public static class ToDos
    {
        public static List<ToDo> Tarefas { get; set; } = new List<ToDo>();

        public static List<ToDo> ReturnToDos()
        {
            if (Tarefas == null || Tarefas.Count == 0)
            {
                for (int i = 0; i < 5; i++)
                {
                    var tarefa = new ToDo()
                    {
                        Id = i + 1,
                        Title = "Tarefa " + i,
                        Description = "Descrição " + i
                    };

                    Tarefas.Add(tarefa);
                }
            }

            return Tarefas;
        }

        public static ToDo GetToDoById(int id)
        {
            Tarefas = ReturnToDos();
            return Tarefas.Find(x => x.Id == id);
        }

        public static ToDo AddToDos(ToDo model)
        {
            model.Id = Tarefas.Count + 1;

            Tarefas.Add(model);
            return model;
        }

        public static ToDo EditToDo(ToDo model, int id)
        {
            var tarefa = Tarefas.Find(x => x.Id == id);
            tarefa.Title = model.Title;
            tarefa.Description = model.Description;

            return tarefa;
        }

        public static int DeleteToDo(int id)
        {
            Tarefas.Remove(Tarefas.Find(x => x.Id == id));

            return id;
        }
    }
}
