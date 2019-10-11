using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ToDoAPI.Mock;
using ToDoAPI.Models;

namespace ToDoAPI.Controllers
{
    [Route("api/todo")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        // GET: api/ToDo
        [HttpGet]
        public IEnumerable<ToDo> Get()
        {
            return ToDos.ReturnToDos();
        }

        // GET: api/ToDo/5
        [HttpGet("{id}", Name = "Get")]
        public ToDo Get(int id)
        {
            return ToDos.GetToDoById(id);
        }

        // POST: api/ToDo
        [HttpPost]
        public ToDo Post([FromBody] ToDo value)
        {
            return ToDos.AddToDos(value);
        }

        // PUT: api/ToDo/5
        [HttpPut("{id}")]
        public ToDo Put(int id, [FromBody] ToDo value)
        {
            return ToDos.EditToDo(value, id);
        }

        // DELETE: api/ToDo/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return ToDos.DeleteToDo(id);
        }
    }
}
