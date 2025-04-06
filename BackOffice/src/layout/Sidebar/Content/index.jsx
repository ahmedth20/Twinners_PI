// styled components
import {LinksList, List, MainItem} from '../style';
import {colors} from '@styles/vars';

// components
import Accordion from 'react-bootstrap/Accordion';
import {NavLink} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { jwtDecode } from "jwt-decode";
// hooks
import {useSidebarContext} from '@contexts/sidebarContext';

// menu links
import {menuadmin,menuchefservice,menudoctors,menuparamedic,menustaff} from '@constants/menu';
import { useState, useEffect } from "react";

const Content = () => {
   const token = useSelector(state => state.auth.user.token);
    const secretKey = "abc123";

    const {toggleSidebar} = useSidebarContext();
    const activeStyle = {color: colors.blue};
   /* const decoded = jwt.decode(token,secretKey, { complete: true });*/
    const [user, setUser] = useState(null);
    const decoded = jwtDecode(token);
    console.log(decoded);
    console.log(decoded.userId);
    console.log(decoded.role);


   

    return (
      <> { decoded.role == "medecin" &&<List as={Accordion}>
            {
                menudoctors.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.links.map(link => {
                                                return (
                                                    <li key={link.link}>
                                                        <NavLink to={link.link}
                                                                 onClick={() => toggleSidebar()}
                                                                 style={({isActive}) =>
                                                                     isActive ? activeStyle : undefined
                                                                 }
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.link) {
                        return (
                            <MainItem as={NavLink}
                                      to={item.link}
                                      onClick={() => toggleSidebar()}
                                      style={({isActive}) =>
                                          isActive ? activeStyle : undefined
                                      }
                                      key={item.link}
                                      className={index === menudoctors.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>}
      { decoded.role == "service manager" &&<List as={Accordion}>
            {
                menuchefservice.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.links.map(link => {
                                                return (
                                                    <li key={link.link}>
                                                        <NavLink to={link.link}
                                                                 onClick={() => toggleSidebar()}
                                                                 style={({isActive}) =>
                                                                     isActive ? activeStyle : undefined
                                                                 }
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.link) {
                        return (
                            <MainItem as={NavLink}
                                      to={item.link}
                                      onClick={() => toggleSidebar()}
                                      style={({isActive}) =>
                                          isActive ? activeStyle : undefined
                                      }
                                      key={item.link}
                                      className={index === menuchefservice.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>}
        
        { decoded.role == "staff" &&<List as={Accordion}>
            {
                menustaff.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.links.map(link => {
                                                return (
                                                    <li key={link.link}>
                                                        <NavLink to={link.link}
                                                                 onClick={() => toggleSidebar()}
                                                                 style={({isActive}) =>
                                                                     isActive ? activeStyle : undefined
                                                                 }
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.link) {
                        return (
                            <MainItem as={NavLink}
                                      to={item.link}
                                      onClick={() => toggleSidebar()}
                                      style={({isActive}) =>
                                          isActive ? activeStyle : undefined
                                      }
                                      key={item.link}
                                      className={index === menustaff.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>}
        
        { decoded.role == "paramedic" &&<List as={Accordion}>
            {
                menuparamedic.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.links.map(link => {
                                                return (
                                                    <li key={link.link}>
                                                        <NavLink to={link.link}
                                                                 onClick={() => toggleSidebar()}
                                                                 style={({isActive}) =>
                                                                     isActive ? activeStyle : undefined
                                                                 }
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.link) {
                        return (
                            <MainItem as={NavLink}
                                      to={item.link}
                                      onClick={() => toggleSidebar()}
                                      style={({isActive}) =>
                                          isActive ? activeStyle : undefined
                                      }
                                      key={item.link}
                                      className={index === menuparamedic.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>}

        { decoded.role == "admin" &&<List as={Accordion}>
            {
                menuadmin.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.links.map(link => {
                                                return (
                                                    <li key={link.link}>
                                                        <NavLink to={link.link}
                                                                 onClick={() => toggleSidebar()}
                                                                 style={({isActive}) =>
                                                                     isActive ? activeStyle : undefined
                                                                 }
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.link) {
                        return (
                            <MainItem as={NavLink}
                                      to={item.link}
                                      onClick={() => toggleSidebar()}
                                      style={({isActive}) =>
                                          isActive ? activeStyle : undefined
                                      }
                                      key={item.link}
                                      className={index === menuadmin.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>}
        
        
       
        </>
    )
}

export default Content;