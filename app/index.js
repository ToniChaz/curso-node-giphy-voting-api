'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './components/users/UsersList';

let users = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "48/48/people/" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "48/48/people/" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "48/48/people/" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "48/48/people/" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "48/48/people/" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "48/48/people/" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "48/48/people/" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "48/48/people/" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "48/48/people/" }

];

ReactDOM.render(<UsersList list={ users } />, document.getElementById('application'));