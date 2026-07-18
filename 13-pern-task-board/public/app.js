const form = document.querySelector('#task-form');
const input = document.querySelector('#task-title');
const message = document.querySelector('#message');
const template = document.querySelector('#task-template');

const request = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message || 'Something went wrong.');
  }
  return response.status === 204 ? null : response.json();
};

const render = (tasks) => {
  document.querySelectorAll('.column').forEach((column) => {
    const list = column.querySelector('.task-list');
    const columnTasks = tasks.filter((task) => task.status === column.dataset.status);
    list.replaceChildren();
    column.querySelector('.count').textContent = columnTasks.length;

    if (!columnTasks.length) {
      const empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = 'Nothing here yet.';
      list.append(empty);
    }

    columnTasks.forEach((task) => {
      const card = template.content.firstElementChild.cloneNode(true);
      card.querySelector('p').textContent = task.title;
      const select = card.querySelector('select');
      select.value = task.status;
      select.addEventListener('change', async () => {
        await request(`/api/tasks/${task.id}`, {
          method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: select.value }),
        });
        loadTasks();
      });
      card.querySelector('.delete').addEventListener('click', async () => {
        await request(`/api/tasks/${task.id}`, { method: 'DELETE' });
        loadTasks();
      });
      list.append(card);
    });
  });
};

const loadTasks = async () => {
  try {
    const data = await request('/api/tasks');
    render(data.tasks);
    message.textContent = '';
  } catch (error) {
    message.textContent = `${error.message} Is PostgreSQL running?`;
  }
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    await request('/api/tasks', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: input.value }),
    });
    input.value = '';
    input.focus();
    loadTasks();
  } catch (error) {
    message.textContent = error.message;
  }
});

loadTasks();
