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
  const manager = createGradeManager();

  return {
    /**
     * 添加学生
     * @param {Object} student
     */
    addStudent(student) {
      manager.addStudent({name:"张三",math:100,englishi:90});
      manager.addStudent({name:"李四",math:85,englishi:95});
      manager.addStudent({name:"王五",math:90,englishi:80});
    },

    /**
     * 获取某一科目的平均分
     * @param {"math"|"english"} subject
     */
    getAverage(subject) {
      manager.getAverage("math");
    },

    /**
     * 获取成绩排名（从高到低）
     * @param {"math"|"english"} subject
     * @returns {Array} 排序后的新数组
     */
    getRankList(subject) {
      manager.getRankList("english");
    },

    /**
     * 搜索学生（按姓名包含）
     * @param {string} keyword
     */
    search(keyword) {
      manager.search("张");
    },

    /**
     * 获取全部学生（返回副本）
     */
    getAll() {
      manager.getAll();
    },
  };
}