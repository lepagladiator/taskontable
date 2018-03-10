const rgb = {
  RED: '255, 99, 132',
  YELLOW: '255, 205, 86',
  GREEN: '75, 192, 192',
  BLUE: '54, 162, 235',
  PURPLE: '153, 102, 255',
  GREY: '201, 203, 207',
};
export default {
  TITLE: 'Taskontable',
  CONTACT_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSd12kJ8lJ79_669Ymzx8QyRksfZ0LvmwasK99Ual7HdUOvNVg/viewform',
  REPOSITORY_URL: 'https://github.com/hand-dot/taskchute-web',
  CHROME_HELP_PERMISSION_URL: 'https://support.google.com/chrome/answer/114662',
  APPWIDTH: window.innerWidth < 1280 ? window.innerWidth : 1280,
  APPHEIGHT: window.innerHeight,
  REQEST_DELAY: 100,
  RENDER_DELAY: 500,
  HOT_MINROW: 20,
  shortcuts: {
    NEXTDATE: e => e.ctrlKey && e.shiftKey && e.keyCode === 190,
    PREVDATE: e => e.ctrlKey && e.shiftKey && e.keyCode === 188,
    SAVE: e => e.ctrlKey && !e.shiftKey && e.keyCode === 83,
    TOGGLE_HELP: e => e.ctrlKey && e.shiftKey && e.keyCode === 191,
    TOGGLE_DASHBOAD: e => e.ctrlKey && !e.shiftKey && e.keyCode === 74,
    HOT_CURRENTTIME: e => e.ctrlKey && e.shiftKey && e.keyCode === 186,
  },
  menuItemKey: {
    CONTACT: 'contact',
    GIT: 'git',
  },
  taskPoolType: {
    HIGHPRIORITY: 'highPriorityTasks',
    LOWPRIORITY: 'lowPriorityTasks',
    REGULAR: 'regularTasks',
  },
  taskStateType: {
    add: 'add',
    edit: 'edit',
  },
  taskActionType: {
    ADD: 'add',
    EDIT: 'edit',
    MOVE_TABLE: 'moveTable',
    MOVE_POOL_HIGHPRIORITY: 'movePoolHighPriority',
    MOVE_POOL_LOWPRIORITY: 'movePoolLowPriority',
    REMOVE: 'remove',
    DOWN: 'down',
    UP: 'up',
    BOTTOM: 'bottom',
    TOP: 'top',
  },
  scriptType: {
    IMPORTSCRIPT: 'importScript',
    EXPORTSCRIPT: 'exportScript',
  },
  DATEFMT: 'YYYY-MM-DD',
  TIMEFMT: 'HH:mm',
  INITIALDATE: '1970-01-01',
  DAY_OF_WEEK_STR: ['日', '月', '火', '水', '木', '金', '土'],
  brandColor: {
    base: {
      RED: `rgb(${rgb.RED})`,
      YELLOW: `rgb(${rgb.YELLOW})`,
      GREEN: `rgb(${rgb.GREEN})`,
      BLUE: `rgb(${rgb.BLUE})`,
      PURPLE: `rgb(${rgb.PURPLE})`,
      GREY: `rgb(${rgb.GREY})`,
    },
    light: {
      RED: `rgba(${rgb.RED},0.2)`,
      YELLOW: `rgba(${rgb.YELLOW},0.2)`,
      GREEN: `rgba(${rgb.GREEN},0.2)`,
      BLUE: `rgba(${rgb.BLUE},0.2)`,
      PURPLE: `rgba(${rgb.PURPLE},0.2)`,
      GREY: `rgba(${rgb.GREY},0.2)`,
    },
  },
  cellColor: {
    DONE: `rgba(${rgb.GREY},0.2)`,
    RESERVATION: `rgba(${rgb.GREEN},0.2)`,
    WARNING: `rgba(${rgb.YELLOW},0.2)`,
    RUNNING: `rgba(${rgb.BLUE},0.2)`,
    OUT: `rgba(${rgb.RED},0.2)`,
  },
};
