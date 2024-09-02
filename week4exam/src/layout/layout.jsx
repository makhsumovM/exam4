import React, { useState } from 'react';
import logo from "../assets/Logo.png";
import { Link, Outlet } from 'react-router-dom';
import Switcher from '../components/darkLightMode/switcher';
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Layout = () => {
  const { i18n, t } = useTranslation();
  const [lang, changeLang] = useState("en");

  function handleChange(value) {
    changeLang(value);
    i18n.changeLanguage(value);
  }

  const [open, setOpen] = useState(false);

  // Функция, возвращающая функцию для изменения состояния
  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  const menuItems = (
    <List>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="/">
          <ListItemText primary={t("Home")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="about">
          <ListItemText primary={t("About")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="services">
          <ListItemText primary={t("Services")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="gallery">
          <ListItemText primary={t("Gallery")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="contact">
          <ListItemText primary={t("Contact")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="story">
          <ListItemText primary={t("Story")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="careers">
          <ListItemText primary={t("Careers")} />
        </Link>
      </ListItem>
      <ListItem button onClick={handleMenuItemClick}>
        <Link to="news">
          <ListItemText primary={t("News")} />
        </Link>
      </ListItem>
    </List>
  );

  return (
    <div>
      <header className='flex items-center  p-4 justify-between bg-[transparent] absolute w-[100%] 'style={{zIndex:"1"}}>
        <div className='flex sm:gap-4 lg:w-[80%] lg:gap-[5%] xl:justify-around items-center'>
            <div><img src={logo} alt="Logo" /></div>
            <div className=''>
            <div className='flex gap-3 dark:text-[white] m:hidden lg:flex lg:text-[18px] 2xl:text-[24px] lg:gap-[20px]'>
                <Link to="/"><p className='dark:text-[white]'>{t('Home')}</p></Link>
                <Link to="/about"><p className='dark:text-[white]'>{t('About')}</p></Link>
                <Link to="/services"><p className='dark:text-[white]'>{t('Services')}</p></Link>
                <Link to="/gallery"><p className='dark:text-[white]'>{t('Gallery')}</p></Link>
                <Link to="/contact"><p className='dark:text-[white]'>{t('Contact')}</p></Link>
                <Link to="/careers"><p className='dark:text-[white]'>{t('Careers')}</p></Link>
                <Link to="/news"><p className='dark:text-[white]'>{t('News')}</p></Link>
            </div>
            <div className='lg:hidden'>
                <Button onClick={toggleDrawer(true)}>
                <MenuIcon fontSize='large' color='success'/>
                </Button>
            </div>
            </div>
        </div>

        <div className='flex items-center gap-2'>
          <Switcher />
          <Select
            value={lang}
            onChange={handleChange}
            className="text-sm h-10 sm:text-lg sm:h-12 lg:text-xl lg:h-14"
            >
            <Select.Option value="en">En</Select.Option>
            <Select.Option value="ru">Ру</Select.Option>
            </Select>

        </div>
      </header>
      <div>
            <Outlet />
            <Drawer open={open} onClose={toggleDrawer(false)}>
            {menuItems}
            </Drawer>
      </div>
      <footer className='bg-[#023957] p-4 grid grid-cols-2 justify-center justify-items-center gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[1fr,1fr,1fr,1fr,1fr] lg:text-[24px] xl:text-[32px]'>
        <div className='flex flex-col gap-4 items-start'>
            <div><img src={logo} alt="" /></div>
            <p className='dark:text-white w-[60%]'>Lizenzo street number 12
            Jakarta, Indonesia</p>
            <Button variant='contained' sx={{color:"white", background:'linear-gradient(to right, #056088, #09A7CA)', "^:hover":{background:"linear-gradient(to right, #056088, #09A7CA)0"}, padding:"20px"}}>
                 Get directions
            </Button>
        </div>
        <div className='dark:text-white'>
            <h1 className='font-bold'>Menu</h1>
            <div className='py-4'>
                <p>Home</p>
                <p>About</p>
                <p>Gallery</p>
                <p>Service</p>
            </div>
        </div>
        <div className='dark:text-white'>
            <h1 className='font-bold'>Contact</h1>
            <div className='py-4'>
                <p>E-mail</p>
                <p>Mobile</p>
                <p>Whatsapp</p>
                <p>Fax</p>
            </div>
        </div>
        <div className='dark:text-white'>
            <h1 className='font-bold'>Career</h1>
            <div className='py-4'>
                <p>Job</p>
                <p>Part-time</p>
                <p>Internship</p>
                <p>Service</p>
            </div>
        </div>
        <div className='dark:text-white'>
            <h1 className='font-bold'>Business</h1>
            <div className='py-4'>
                <p>Affiliate</p>
                <p>Collaboration</p>
                <p>Investment</p>
                <p>Investment</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
