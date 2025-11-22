/**
 *
 * student 的格式为：
 * {
 *   name: "张三",
 *   math: 100,
 *   english: 90
 * }
 */

function createGradeManager() {
  const students = [];

  return {
    /**
     * 添加学生
     * @param {Object} student
     */
    addStudent(student) {
      if (!student || typeof student !== 'object') return;
      const { name, math, english } = student;
      if (typeof name !== 'string' || typeof math !== 'number' || typeof english !== 'number') {
        return;
      }
      students.push({ name, math, english });
    },

    /**
     * 获取某一科目的平均分
     * @param {"math"|"english"} subject
     */
    getAverage(subject) {
      let average = 0;
      if (subject === 'math') {
        let sum = 0;
        for (const student of students) {
          sum += student[subject];
        }
        average = students.length ? sum / students.length : 0;
        return average;

      }
      if (subject === 'english') {
        let sum = 0;
        for (const student of students) {
          sum += student[subject];
        }
        average = students.length ? sum / students.length : 0;
        return average;
      }
    },

    /**
     * 获取成绩排名（从高到低）
     * @param {"math"|"english"} subject
     * @returns {Array} 排序后的新数组
     */
    getRankList(subject) {

    },

    /**
     * 搜索学生（按姓名包含）
     * @param {string} keyword
     */
    search(keyword) {
    },

    /**
     * 获取全部学生（返回副本）
     */
    getAll() {

    },
  };
}