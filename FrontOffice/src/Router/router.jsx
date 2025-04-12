import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ProjectDetails from '../Pages/InnerPage/ProjectDetails/ProjectDetails';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import ServiceDetails from '../Pages/InnerPage/ServiceDetails/ServiceDetails';
import ServiceDetails2 from '../Pages/InnerPage/ServiceDetails/ServiceDetails2';
import ServiceDetails3 from '../Pages/InnerPage/ServiceDetails/ServiceDetails3';
import ServiceDetails4 from '../Pages/InnerPage/ServiceDetails/ServiceDetails4';
import ServiceDetails5 from '../Pages/InnerPage/ServiceDetails/ServiceDetails5';
import BlogGrid from '../Pages/InnerPage/BlogGrid/BlogGrid';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import TeamInner from '../Pages/InnerPage/TeamInner/TeamInner';
import AppointmentInner from '../Pages/InnerPage/Appointment/AppointmentInner';
import ProjectInner from '../Pages/InnerPage/ProjectInner/ProjectInner';
import TestimonialInner from '../Pages/InnerPage/TestimonialInner/TestimonialInner';
import FaqInner from '../Pages/InnerPage/Faq/FaqInner';
import TeamDetails from '../Pages/InnerPage/TeamDetails/TeamDetails';
import BlogLeftSidebar from '../Pages/InnerPage/BlogLeftSidebar/BlogLeftSidebar';
import BlogRightSidebar from '../Pages/InnerPage/BlogRightSidebar/BlogRightSidebar';
import { createBrowserRouter , Navigate } from 'react-router-dom';
import Home from '../screens/loginscreen';
import Edit from '../Pages/editprofile/edit';

import { useSelector } from "react-redux";

import Forgotpassword from '../screens/forgotpassword'
import Resetpassword1 from '../screens/restpasswordslouma';
import Home2 from '../Pages/HomeLogin/Home2';
import Map from '../Pages/InnerPage/Map/Map';
import CallAmbulance from '../Pages/InnerPage/Notifications/CallAmbulance';

const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.auth.user);
  return user ? children : <Navigate to="/" />;
};

// Empêche l'accès à "/" si l'utilisateur est connecté
const PublicRoute = ({ children }) => {
  const user = useSelector(state => state.auth.user);
  return user ? <Navigate to="/home" /> : children;
};


const router = createBrowserRouter([
      { path: '/forgotpassword', element:<Forgotpassword />},
      { path:"/ResetPassword/:id" ,element:<Resetpassword1 />},
      { path: '/loginPage', element:<PublicRoute><Home /></PublicRoute> },
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '', element: <PublicRoute><Home2 /></PublicRoute> },
      { path: 'home', element: <PrivateRoute><Home1 /></PrivateRoute> },
      { path: 'about', element: <PrivateRoute><AboutInner /></PrivateRoute> },
      { path: 'editprofile', element: <PrivateRoute><Edit /></PrivateRoute> },

      { path: 'project_details', element: <PrivateRoute><ProjectDetails /></PrivateRoute> },
      { path: 'service', element: <PrivateRoute><ServiceInner /></PrivateRoute> },
      { path: 'service_details', element: <PrivateRoute><ServiceDetails /></PrivateRoute> },
      { path: 'service_details2', element: <PrivateRoute><ServiceDetails2 /></PrivateRoute> },
      { path: 'service_details3', element: <PrivateRoute><ServiceDetails3 /></PrivateRoute> },
      { path: 'service_details4', element: <PrivateRoute><ServiceDetails4 /></PrivateRoute> },
      { path: 'service_details5', element: <PrivateRoute><ServiceDetails5 /></PrivateRoute> },
      { path: 'project', element: <PrivateRoute><ProjectInner /></PrivateRoute> },
      { path: 'testimonial', element: <PrivateRoute><TestimonialInner /></PrivateRoute> },
      { path: 'team', element: <PrivateRoute><TeamInner /></PrivateRoute> },
      { path: 'team_details', element: <PrivateRoute><TeamDetails /></PrivateRoute> },
      { path: 'blog_grid', element: <PrivateRoute><BlogGrid /></PrivateRoute> },
      { path: 'blog_left_sidebar', element: <PrivateRoute><BlogLeftSidebar /></PrivateRoute> },
      { path: 'blog_right_sidebar', element: <PrivateRoute><BlogRightSidebar /></PrivateRoute> },
      { path: 'blog_details', element: <PrivateRoute><BlogDetails /></PrivateRoute> },
      { path: 'appointment', element: <PrivateRoute><AppointmentInner /></PrivateRoute> },
     
      { path: 'faqs', element: <PrivateRoute><FaqInner /></PrivateRoute> },
      { path: 'contact', element: <PrivateRoute><ContactInner /></PrivateRoute> },
      { path: 'notif', element: <PrivateRoute><CallAmbulance/></PrivateRoute> },
      { path: 'map', element: <PrivateRoute><Map /></PrivateRoute> },
    ],
  },
  { path: '*', errorElement: <ErrorPage /> },
]);

export default router;
