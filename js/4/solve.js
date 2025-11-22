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
      this.name=student.name
      if(student.name=="")
        return 0
        
      this.math=+ student[math]
      this.english=+ student[english]


    },

    /**
     * 获取某一科目的平均分
     * @param {"math"|"english"} subject
     */
    getAverage(subject) {
      var average=0
      for(var i=0;i<Object.length;i++)
      {average+=Object[i][subject]}
      average=average/Object.length
      
    },

    /**
     * 获取成绩排名（从高到低）
     * @param {"math"|"english"} subject
     * @returns {Array} 排序后的新数组
     */
    getRankList(subject) {
      for(var i=0;i<Object.length;i++)
            {for(var j=0;j<Object.length-1-i;j++)
                if(Object[j][subject]<Object[j+1][subject])
                    {var file=Object[j]
                     Object[j]=Object[j+1]
                     Object[j+1]= file  
                    }

                            }                         

    },

    /**
     * 搜索学生（按姓名包含）
     * @param {string} keyword
     */
    search(keyword) {
      for(var i=0;i<Object.length;i++)
        {if (keyword in Object[i])
            {return Object[i]}
        }
    },

    /**
     * 获取全部学生（返回副本）
     */
    getAll() {
      
    },
  };
}