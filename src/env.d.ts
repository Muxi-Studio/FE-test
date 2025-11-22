/// <reference types="@rsbuild/core/types" />

/**
 * Imports the SVG file as a React component.
 * @requires [@rsbuild/plugin-svgr](https://npmjs.com/package/@rsbuild/plugin-svgr)
 */
declare module '*.svg?react' {
  import type React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
interface LoginApireq{
  email:string,
  password:string
}
interface LoginApires{
  success: boolean,
  message: string,
  data: {
    token: string,
    user: {
      id: string,
      email: string,
      username: string,
      role: string
  }}
}
interface departreq{
  name:string,
  code:string,
  description:string,
  managerId:number
}
// interface verreq{
//   email:string,
//   type:string
// }
interface  pulicres{
  success: boolean,
  message: string,
  code: string
}
interface Employee{
  name:string,
  email:string,
  phone:string,
  position:string,
  salary:number,
  hireDate:string,
  status:string,
  department?:number,
  role?:number
}
// 员工信息类型
 interface Employee {
  id?: number; // 新增时无需传id，后端生成
  name: string;
  email: string;
  phone: string;
  position: string;
  salary: number;
  hireDate: string; // 格式："YYYY-MM-DD"
  status: 'on-leave' | 'working' | 'resigned'; // 状态枚举
  departmentId: number;
  roleId: number;
}
interface ApiResponse<T> {
  success: boolean;
  message: string;
  code: number;
  data?: T;
}
// interface registerreq{
//   email: string,
//   password:string,
//   username:string,
//   verificationCode:string
// }
// interface registerres{
//   success:boolean,
//   message:string,
//   code:string
// }
