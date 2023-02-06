import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
//   {
//     title: 'Overview',
//     path: '/overview',
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Users',
//         path: '/overview/users',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Revenue',
//         path: '/overview/revenue',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
  {
    title: 'Level 1',
    path: '/items',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Level 1.1',
        path: '/items/item1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Level 1.2',
        path: '/items/item2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Level 1.3',
        path: '/items/item3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />,
    
//   },
  {
    title: 'Level 2',
    path: "/level2items",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Level 2.1',
        path: "/level2items/item1",
        icon: <IoIcons.IoIosPaper />,
       
        
        
      },
      {
        title: 'Level 2.2',
        path: "/level2items/item2",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Level 2.3',
        path: "/level2items/item3",
        icon: <IoIcons.IoIosPaper />
      }

    ]
    
  },
  

  
];
