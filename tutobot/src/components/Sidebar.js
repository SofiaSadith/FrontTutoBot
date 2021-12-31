import React from 'react';
import * as FAIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faBook, faHome, faHeart, faEdit, faDoorClosed, faPlusCircle,faUserFriends} from '@fortawesome/free-solid-svg-icons';
import SchoolIcon from '@mui/icons-material/School';


export const Sidebar= [
    {
        cName: 'nav-line-inicial',
    },
    /*{
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        cName: 'nav-text',
        kind: ''
    },*/
    {
        title: 'Perfil',
        path: '/perfilalumno',
        icon: <FontAwesomeIcon icon={faUser}/>,
        cName: 'nav-text',
        kind: 'alumno'
    },
    {
        title: 'Perfil',
        path: '/perfiltutor',
        icon: <FontAwesomeIcon icon={faUser}/>,
        cName: 'nav-text',
        kind: 'tutor'
    },
    {
        title: 'Tutoriales',
        path: '/tutos',
        icon: <FontAwesomeIcon icon={faBook}/>,
        cName: 'nav-text',
        kind: 'alumno'
    },
    
    {
        title: 'Mis Tutoriales',
        path: '/mistutos',
        icon: <FontAwesomeIcon icon={faHeart}/>,
        cName: 'nav-text',
        kind: 'alumno'
    },
    {
        title: 'Mis alumnos',
        path: '/misalumnos',
        icon: <SchoolIcon/>,
        cName: 'nav-text',
        kind: 'tutor'
    },
    {
        cName: 'nav-line'
    },
    {
        title: 'Cerrar Sesión',
        path: '/inicio',
        icon: <FontAwesomeIcon icon={faDoorClosed}/>,
        cName: 'nav-text-logout',
        kind: ''
    },
    {
        title: 'Mis Sesiones',
        path: '/misSesiones',
        icon: <FontAwesomeIcon icon={faUserFriends}/>,
        cName: 'nav-text',
        kind: 'alumno'
    },
    {
        title: 'Mis Sesiones',
        path: '/misSesionesTutor',
        icon: <FontAwesomeIcon icon={faUserFriends}/>,
        cName: 'nav-text',
        kind: 'tutor'
    },
]

