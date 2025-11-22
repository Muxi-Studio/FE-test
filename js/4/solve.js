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
        students.push(student);
    },

    /**
     * 获取某一科目的平均分
     * @param {"math"|"english"} subject
     */
    getAverage(subject) {
        let total = 0;
        for (const student of students) {
            total += student[subject];
        }
        return students.length ? total / students.length : 0;
    },

    /**
     * 获取成绩排名（从高到低）
     * @param {"math"|"english"} subject
     * @returns {Array} 排序后的新数组
     */
    getRankList(subject) {
        for(let i=0;i<students.length;i++){
            for(let j=0;j<students.length-i-1;j++){
                if(students[j][subject]<students[j+1][subject]){
                    let temp=students[j];
                    students[j]=students[j+1];
                    students[j+1]=temp;
                }
            }
        }
        for(let i=0;i<students.length;i++){
            students[i].rank=i+1;
            students[i].score=students[i][subject];
            delete students[i].math;
            delete students[i].english;
        }
        return [...students];
    },

    /**
     * 搜索学生（按姓名包含）
     * @param {string} keyword
     */
    search(keyword) {
        return students.filter(student => student.name.includes(keyword));
    },

    /**
     * 获取全部学生（返回副本）
     */
    getAll() {
      return [...students];
    },
  };
}
