const LS_KEY = 'LS_KEY';
let id = Date.now();

let tasks;
try {
  tasks = JSON.parse(localStorage.getItem(LS_KEY));
} catch (e) {
  console.error('Error on parsing tasks', e);
}

export const getId = _ => id++;

tasks = Array.isArray(tasks) ? tasks : [
  { complited: true, title: 'Create To do app', priority: 'Normal', date: '2018-01-01' },
  { complited: false, title: 'Visit lesson', priority: 'Low', date: '2018-05-01' },
  { complited: false, title: 'Have a rest', priority: 'Normal', date: '2018-01-01' },
  { complited: true, title: 'Play with kids', priority: 'Normal', date: '2018-06-01' },
].map(item => ({ ...item, id: getId() }));

const saveTasks = () => localStorage.setItem(LS_KEY, JSON.stringify(tasks));

export const getTasks = () => new Promise(resolve => setTimeout(resolve, 0, [...tasks]));

export const addTask = data => {
  let task = { ...data, id: getId() };
  tasks.push(task);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 2000, task));
}